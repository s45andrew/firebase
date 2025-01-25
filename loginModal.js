import React, { useState } from 'react';
import './login.css';

function LoginModal({ isOpen, onClose,handleLogin,errorMessage }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Login</h2>
        {errorMessage && <p className='error-message'> {errorMessage}</p>}
    
        <form onSubmit={handleLogin} >
          <label>
            Username:
            <input type="text" name="username" autoComplete="username"/>
          </label>
          <label>
            Password:
            <input type="password" name="password" autoComplete="current-password"/>
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
