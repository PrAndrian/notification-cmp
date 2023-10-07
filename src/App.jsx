import { useState } from 'react';
import NotificationModal from './components/NotificationModal';

function App() {
  // Define state variables for the modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalError, setModalError] = useState(false);
  const [modalIsChoice, setModalIsChoice] = useState(false);

  // Function to show the modal with a message
  const showModal = (message, error = false, isChoice = false) => {
    setModalMessage(message);
    setModalError(error);
    setModalIsChoice(isChoice);
    setIsModalVisible(true);
  };

  // Function to hide the modal
  const hideModal = () => {
    setIsModalVisible(false);
  };

  const handleClickError = () =>{
    showModal('This is a sample message', true, false)
  }

  const handleClickSuccess = () =>{
    showModal('This is a sample message', false, false)
  }

  const handleClickChoice = () =>{
    showModal('This is a sample message', false, true)
  }

  return (
    <>
      <div className='w-full flex justify-center'>
        {/* Your other content goes here */}
        <button className='border border-4 border-red-500 p-5 m-5 rounded ' onClick={handleClickError}>Click for Error</button>
        <button className='border border-4 border-orange-500 p-5 m-5 rounded ' onClick={handleClickChoice}>Click Choice</button>
        <button className='border border-4 border-green-500 p-5 m-5 rounded ' onClick={handleClickSuccess}>Click Success</button>
        {/* Render the NotificationModal component */}
        <NotificationModal
          isVisible={isModalVisible}
          message={modalMessage}
          error={modalError}
          setter={hideModal} // Call hideModal when the modal is closed
          onYes={() => {
            // Handle 'Yes' button click here
            // This function will be called when the 'Yes' button is clicked in the modal
            // You can implement your logic here
            hideModal(); // Close the modal after handling the 'Yes' action
          }}
          isChoice={modalIsChoice}
        />
      </div>
    </>
  );
}

export default App;
