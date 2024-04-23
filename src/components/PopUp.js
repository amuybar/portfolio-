import Form from './Form'; 
import '../styles/PopupForm.css';

const Popup = ({ isOpen, onClose }) => {
  const handleSubmit = async (name, email, message) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });
      if (response.ok) {
        console.log('Email sent successfully!');
        onClose(); 
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
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
