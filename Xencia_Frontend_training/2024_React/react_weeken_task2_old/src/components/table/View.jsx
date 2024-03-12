import React from "react";
import './View.css'
 
const View = ({ data, closeModal }) => {
  return (
    <div className="view-modal">
      <div className="modal-content">
        <h2><b>Details</b></h2>
        <p><b>ID:</b> {data.Id}</p>
        <p><b>Name:</b> {data.Name}</p>
        <p><b>Department:</b> {data.Department}</p>
        <p><b>Designation:</b> {data.Designation}</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};
 
export default View;
 