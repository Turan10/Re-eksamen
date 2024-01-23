import React, { useState, useRef } from "react";
import "./controlledUncontrolled.css";

const ControlledUncontrolled = () => {
  const [password, setPassword] = useState("");
  const [passwordCriteriaMet, setPasswordCriteriaMet] = useState(false);
  const usernameRef = useRef(null);

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordCriteriaMet(value.length >= 8);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = usernameRef.current ? usernameRef.current.value : "";
    const isUsernameValid = username !== "";

    if (!isUsernameValid) {
      alert("Username cannot be empty.");
      return; 
    }

    if (!passwordCriteriaMet) {
      alert("Password does not meet the criteria.");
      return; 
    }

    alert(`Username: ${username}, Password: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="form-group">
        <label>Username (uncontrolled):</label>
        <input
          type="text"
          ref={usernameRef}
          className="input-field"
          defaultValue=""
        />
        <div className="criteria">
          Username must not be empty (validated on submit).
        </div>
      </div>
      <div className="form-group">
        <label>Password (controlled):</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className="input-field"
        />
        <span
          className={
            passwordCriteriaMet ? "status-icon valid" : "status-icon invalid"
          }
        >
          {passwordCriteriaMet ? "✓" : "✕"}
        </span>
        <div className="criteria">
          Password must be at least 8 characters long.
        </div>
      </div>
      <button type="submit" className="submit-button">
        Create User
      </button>
    </form>
  );
};

export default ControlledUncontrolled;
