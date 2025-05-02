import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import google from '../images/google.png';
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/users/login', { email, password });
      localStorage.setItem('token', res.data.token);
      alert('Login successful');
    } catch (err) {
      console.error(err);
      alert('Login failed: ' + (err.response?.data?.message || err.message));
    }
  };

  const handleGoogleLogin = () => {
    alert('Google login coming soon!');
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2 className="auth-title">Welcome Back</h2>
        <button type="button" className="google-btn" onClick={handleGoogleLogin}>
          <img src={google} alt="Google logo" />
          Continue with Google
        </button>

        <div className="or-divider"><span>or</span></div>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <div className="forgot-password">
          <Link to="/forgot-password">Forgot password?</Link>
        </div>

        <button type="submit">Login</button>
        <p className="auth-footer">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;