import Form from './Form'; 
import '../styles/PopupForm.css';
import { sendMessage } from '../api/api_services';

const Popup = ({ isOpen, onClose }) => {
  const handleSubmit = async (formData) => {
    try {
      // Make an API call to send the form data to the backend
      await sendMessage(formData);
      console.log('Message sent successfully!');
      onClose(); // Close the popup
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };
  return (
    isOpen ? ( 
      <div className="popup open"> 
        <div className="popup-content">
          <h2>Send a Message</h2>
          <Form 
          onSubmit={handleSubmit} onClose={onClose}
          />
          
        </div>
      </div>
    ) : null
  );
};

export default Popup;
