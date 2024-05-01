import React, { useState } from 'react';
import Popup from './Popup.js';
const RequestServiceButton = ({ packageName }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleClick = () => {
    setIsPopupOpen(true);
    document.getElementById('selected-package').textContent = packageName;
  };

  return (
    <>
      <button className="package-link" onClick={handleClick}>
        Request Service
      </button>
      {isPopupOpen && <Popup onClose={() => setIsPopupOpen(false)} />}
    </>
  );
};

export default RequestServiceButton;
