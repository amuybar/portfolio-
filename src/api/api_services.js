// api_services.js

// Function to send a message to the backend
export async function sendMessage(formData) {
  try {
    const response = await fetch('https://portfolio-backend-23s0.onrender.com/api/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }
  } catch (error) {
    throw error;
  }
}




// Function to send a service request to the backend
export const sendServiceRequest = async (fullName, phoneNumber, email) => {
  try {
    const requestData = { fullName, phoneNumber, email };

    const response = await fetch('https://portfolio-backend-23s0.onrender.com/api/request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error sending service request:', error);
    throw error;
  }
};

