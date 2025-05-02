import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import google from '../images/google.png';
import './Auth.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/users/register', { username, email, password });
      localStorage.setItem('token', res.data.token);
      alert('Registration successful');
    } catch (err) {
      console.error(err);
      alert('Registration failed: ' + (err.response?.data?.message || err.message));
    }
  };

  const handleGoogleRegister = () => {
    alert('Google signup coming soon!');
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2 className="auth-title">Create Account</h2>
        <button type="button" className="google-btn" onClick={handleGoogleRegister}>
  <img src={google} alt="Google logo" />
  Continue with Google
</button>

        <div className="or-divider"><span>or</span></div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
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
        <button type="submit">Register</button>
        <p className="auth-footer">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;