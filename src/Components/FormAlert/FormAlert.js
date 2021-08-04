import React from "react";
import "./formAlert.css";

const FormAlert = ({ formStatus }) => {
  return (
    <div className="form-alert">
      <h3>{formStatus}</h3>
    </div>
  );
};

export default FormAlert;
