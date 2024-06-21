// src/components/Notification.jsx

import React from 'react';

const Notification = ({ message, type }) => {
  if (message === null) {
    return null;
  }

  const notificationStyle = {
    color: type === 'success' ? 'green' : 'red',
    background: 'lightgrey',
    fontSize: '20px',
    border: type === 'success' ? '2px solid green' : '2px solid red',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
  };

  return (
    <div style={notificationStyle}>
      {message}
    </div>
  );
};

export default Notification;
