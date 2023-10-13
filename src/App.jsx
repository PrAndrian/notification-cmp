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
      <div className='w-full flex justify-center items-center'>
        <h1 className='text-3xl'>Examples : </h1>
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
      <div className='px-5'>
        <h2 className="text-xl font-bold" >1. Buttons and Event Handlers:</h2>
        <p>Three buttons are displayed in the component:</p>
        <ul>
            <li>- "Click for Error": When clicked, it triggers <code>handleClickError</code>, which shows the modal with an error message.</li>
            <li>- "Click Choice": When clicked, it triggers <code>handleClickChoice</code>, which shows the modal with a message and a choice.</li>
            <li>- "Click Success": When clicked, it triggers <code>handleClickSuccess</code>, which shows the modal with a success message.</li>
        </ul>

        <h2 className="text-xl font-bold" >2. NotificationModal Component:</h2>
        <p>The NotificationModal component is rendered within the main App component.</p>
        <p>It receives several props to control its behavior:</p>
        <ul>
            <li>- <code>isVisible</code>: Determines whether the modal is visible, controlled by <code>isModalVisible</code>.</li>
            <li>- <code>message</code>: The content of the message in the modal, controlled by <code>modalMessage</code>.</li>
            <li>- <code>error</code>: A boolean indicating whether the message in the modal is an error, controlled by <code>modalError</code>.</li>
            <li>- <code>setter</code>: A function that closes the modal, controlled by <code>hideModal</code>.</li>
            <li>- <code>onYes</code>: A function that handles user interaction when they choose 'Yes' (used when <code>isChoice</code> is true).</li>
            <li>- <code>isChoice</code>: A boolean indicating whether the modal should provide a choice for the user.</li>
        </ul>

        <h2 className="text-xl font-bold" >3. Functions:</h2>
        <ul>
          <li><code>showModal(message, error, isChoice)</code>: This function is used to show the notification modal. It takes three parameters:
              <ul>
                  <li><code>message</code>: The message to be displayed in the modal.</li>
                  <li><code>error</code> (optional): A boolean indicating whether the message is an error message (default is false).</li>
                  <li><code>isChoice</code> (optional): A boolean indicating whether the modal should provide a choice (default is false).</li>
              </ul>
          </li>
          <li><code>hideModal()</code>: This function is used to hide the notification modal by setting <code>isModalVisible</code> to false.</li>
        </ul>

        <h2 className="text-xl font-bold" >4. State Management:</h2>
        <ul>
          <li><code>isModalVisible</code>: A boolean state that controls the visibility of the notification modal.</li>
          <li><code>modalMessage</code>: A state variable to hold the message that will be displayed in the modal.</li>
          <li><code>modalError</code>: A boolean state variable to indicate whether the message in the modal is an error message or not.</li>
          <li><code>modalIsChoice</code>: A boolean state variable to determine whether the modal should provide a choice to the user.</li>
        </ul>

        <p>Overall, this setup allows you to display various types of notifications with different messages, error flags, and choice options based on the buttons clicked in the App component. <br /> The NotificationModal component is a flexible and reusable way to handle notifications and user interactions within your application.</p>
      </div>
    </>
  );
}

export default App;
