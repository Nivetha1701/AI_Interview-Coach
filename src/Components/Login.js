import React from 'react';
import './Auth.css';
import { FaUser, FaLock } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaGoogle } from 'react-icons/fa';
import login_img from '../images/login_img.jpg';

function Login() {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-image">
          <img src={login_img} alt="Login Illustration" />
        </div>
        <div className="auth-form">
          <h2>Log In</h2>
          <div className="input-group input-limited">
            <FaUser className="input-icon" />
            <input type="text" placeholder="Your Name" />
          </div>
          <div className="input-group input-limited">
            <FaLock className="input-icon" />
            <input type="password" placeholder="Password" />
          </div>
          <div className="extra-options">
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember"> Remember me</label>
            </div>
            <a href="/forgot-password" className="forgot-link">Forgot Password?</a>
          </div>
          <br />
          <button className="login-btn small">Log in</button>
          <p className="create-account">
            <a href="/register">Create an account</a>
          </p>
          <div className="social-login">
            <span>Or login with</span>
            <div className="social-icons">
              <button className="facebook">
                <FaFacebookF />
              </button>
              <button className="twitter">
                <FaTwitter />
              </button>
              <button className="google">
                <FaGoogle />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
