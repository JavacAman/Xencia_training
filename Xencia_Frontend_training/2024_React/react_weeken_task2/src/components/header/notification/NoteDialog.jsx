import React, { useEffect, useState } from 'react';
import './NoteDialog.css'; // Import your DialogBox styles

const NoteDialogBox = (props) => {
  const {idName,action, message, setDialogOnOrOff, setEditDialogOnOrOff } = props;
  const [isVisible, onClose] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // Close the dialog after a certain period (e.g., 3000 milliseconds)
    }, 3000);

    // Clear the timer when the component unmounts or when onClose changes
    return () => clearTimeout(timer);
  }, [isVisible]);

  const isClose = () => {
    setDialogOnOrOff(false);
    setEditDialogOnOrOff(false);
    onClose(false);
  };

  function getRender(){
    return  <div className="dialog-box">
            <p>{`${action[0]} is ${action[1]}`}</p>
            <button onClick={isClose}>Close</button>
             </div>
  }

  return <div>
    {isVisible && getRender()}

  </div>

   
  ;
};

export default NoteDialogBox;
