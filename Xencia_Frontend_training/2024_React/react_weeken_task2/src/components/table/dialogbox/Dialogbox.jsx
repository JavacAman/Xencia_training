import React, { useState } from "react";
import "./Dialogbox.css";

export const Dialogbox = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      Id: "",
      Name: "",
      Designation: "",
      Department: "",
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (formState.Id && formState.Name && formState.Designation && formState.Department) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formState);

    closeModal();
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
        <form>
          <div className="form-group">
            <label htmlFor="Id"><b>Id</b></label>
            <input name="Id" type="number" onChange={handleChange} value={formState.Id} />
          </div>

          <div className="form-group">
            <label htmlFor="Name"><b>Name</b></label>
            <input name="Name" onChange={handleChange} value={formState.Name}
            />
          </div>

          <div className="form-group">
            <label htmlFor="Designation"><b>Designation</b></label>
            <input name="Designation" onChange={handleChange} value={formState.Designation}
            />
          </div>

          <div className="form-group">
            <label htmlFor="Department"><b>Department</b></label>
            <input name="Department" onChange={handleChange} value={formState.Department}
            />
          </div>
          
          {errors && <div className="error">{`Please include: ${errors}`}</div>}
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};