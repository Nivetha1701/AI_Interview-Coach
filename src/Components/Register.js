import React from 'react';
import './Auth.css';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import login_img from '../images/login_img1.png';

function Register() {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-image">
          <img src={login_img} alt="Register Illustration" />
        </div>
        <div className="auth-form">
          <h2>Register</h2>

          <div className="input-group input-limited">
            <FaUser className="input-icon" />
            <input type="text" placeholder="Your Name" />
          </div>

          <div className="input-group input-limited">
            <FaEnvelope className="input-icon" />
            <input type="email" placeholder="Email" />
          </div>

          <div className="input-group input-limited">
            <FaLock className="input-icon" />
            <input type="password" placeholder="Password" />
          </div>

          <button className="login-btn small">Register</button>

          <p className="create-account">
            Already have an account? <a href="/">Log in here</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
