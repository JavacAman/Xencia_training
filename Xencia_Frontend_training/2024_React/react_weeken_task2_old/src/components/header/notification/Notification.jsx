// Notification.js
// import { changesLog } from '../../table/TableMain';

import React from 'react';
import './Notification.css';

const Notification = ({ listValueDeleted }) => {
  const getNotificationMessage = (change) => {
    switch (change.action) {
      case 'add':
        return `Added a new row with ID: ${change.id}`;
      case 'edit':
        return `Edited row with ID: ${change.id}`;
      case 'delete':
        return `Deleted row with ID: ${change.id}`;
      default:
        return '';
    }
  };

  return (
    
    <div className="notification-container">
      <h3>Notifications</h3>
      {listValueDeleted.length === 0 ? (
        <p>No notifications</p>
      ) : (
        <ul>
          {listValueDeleted.map((each, index) => (
            <li key={index} className="notification-box">
              <div>{each[0].Name}</div>
              <div>{each[0].Id}</div>
              <div>{each[0].Department}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notification;

// (change, index) => (
//   <li key={index} className={change.action}>
//     {getNotificationMessage(change)}
//   </li>
// )
