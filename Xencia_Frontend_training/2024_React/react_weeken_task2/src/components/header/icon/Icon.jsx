import React from 'react';
import { FaBell, FaUser } from 'react-icons/fa';
import './Icon.css';
import Notification from '../notification/Notification';
import { useState } from 'react';




const Icon = (props) => {
  const {listValueDeleted} = props
  console.log(listValueDeleted)
  const [isNotificationOpen, setNotificationOpen] = useState(false);

  const handleNotificationClick = () => {
    setNotificationOpen(!isNotificationOpen);
  };

  return (
    <div className="header">
      <button className="notification-icon" onClick={handleNotificationClick}>
        <FaBell />
      </button>

        {isNotificationOpen && <Notification listValueDeleted={listValueDeleted}/>}
      
      <div className="profile-icon">
        <FaUser />
      </div>
    </div>
  );
};

export default Icon;
