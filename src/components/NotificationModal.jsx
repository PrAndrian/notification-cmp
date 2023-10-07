import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { useCallback } from 'react';

/**
 * A notification modal component that displays messages or prompts for user confirmation.
 *
 * @component
 * @param {object} props - The component's props.
 * @param {boolean} props.isVisible - Indicates whether the modal is visible (required).
 * @param {string} props.message - The message to display in the modal (required).
 * @param {boolean} [props.error] - Indicates whether the message represents an error.
 * @param {function} props.setter - A callback function to hide the modal (required).
 * @param {boolean} [props.isChoice] - Indicates whether the modal presents a choice for the user.
 * @param {function} [props.onYes] - A callback function to execute when the "Yes" button is clicked.
 * @param {object} [props.employeeTmp] - An object containing employee information.
 * @param {React.Element} props.successElement - A React element to display for successful notifications (required).
 * @param {string} [props.isErrorColor] - The background color for error messages.
 * @param {string} [props.isChoiceColor] - The background color for choice messages.
 * @param {string} [props.isSuccessColor] - The background color for success messages.
 * @return {JSX.Element} The rendered NotificationModal component.
 */
const NotificationModal = ({ 
    isVisible, 
    message, 
    error, 
    setter, 
    onYes, 
    isChoice, 
    successElement,
    isErrorColor = 'red',
    isChoiceColor = 'orange',
    isSuccessColor= 'green',
}) => {

    const handleClick = useCallback(event => {
        if (event.target.id || event.target.icon) {
            setter(false)
        }
    },[setter])

    return (
        <div id={'modal'} 
            onClick={(event)=>handleClick(event)} 
            className={`
                ${isVisible ? 'block' : 'hidden'} 
                absolute 
                left-0 
                top-0 
                h-[100%] 
                w-[100%] 
                flex 
                justify-center 
                items-center 
                bg-black 
                z-50
                bg-opacity-80
            `}
        >
            <div
                className={`
                    flex
                    flex-col
                    relative 
                    p-5 
                    text-xl 
                    rounded-md
                    
                `
            }
            style={{
                color : "white",
                backgroundColor : 
                    isChoice ? 
                        isChoiceColor : 
                            error ? isErrorColor : isSuccessColor,
            }}
            >
                <button 
                    id={'buttonCloseModal'} 
                    className={` 
                        ${isVisible ? 'visible' : "invisible"}  
                        flex
                        border 
                        absolute 
                        top-[-10px] 
                        left-[-10px]
                        bg-white 
                        p-1
                        rounded-md 
                        text-[#000]
                        cursor-pointer`
                    }
                >
                    <FontAwesomeIcon id={'iconCloseModal'} icon={faXmark}/>
                </button>
                <span className='font-bold'>{message}</span>

                {!error && successElement }

                {isChoice &&<span>Are you sure you want to continue ?</span>}
                {isChoice && (
                    <footer className='w-full flex gap-2 justify-center pt-4 pb-2 '>
                        <button id={'buttonCloseModal-yes'}
                            onClick={onYes} 
                            className='
                            w-full 
                            p-2 
                            bg-white 
                            text-black 
                            rounded'
                        >
                            Yes
                        </button>

                        <button id={'buttonCloseModal-no'}
                            onClick={(event)=>handleClick(event)} 
                            className='
                                w-full 
                                p-2 
                                bg-white 
                                text-black 
                                rounded
                            '
                        >
                            No
                        </button>
                    </footer>)
                }
            </div>
        </div>
    );
}

NotificationModal.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    setter : PropTypes.func.isRequired,
    error: PropTypes.bool,
    isChoice: PropTypes.bool,
    onYes: PropTypes.func,
    employeeTmp : PropTypes.objectOf(PropTypes.string),
    successElement : PropTypes.element.isRequired,
    isErrorColor: PropTypes.string,
    isChoiceColor: PropTypes.string,
    isSuccessColor: PropTypes.string,
};

export default NotificationModal