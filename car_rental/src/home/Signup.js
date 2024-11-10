import React, { useState } from 'react';
import axios from 'axios';
import './signup.css'; 
import { useNavigate, useParams, useLocation, Link } from 'react-router-dom';
const Signup = () => {
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [name, setName] = useState('');
  const [userRole, setUserRole] = useState('0');
const nav =useNavigate(); 
  const signupUser = (e) => {
    e.preventDefault();
    const signupData = {
      email: signupEmail,
      password: signupPassword,
      name,
      userRole: parseInt(userRole, 10) 
    };

    axios
      .post('http://localhost:8080/api/auth/signup', signupData)
      .then(() => {
      
        alert('Signup successful! You can now log in.');
      })
      .catch((error) => {
        console.error('There was an error signing up!', error);
        alert('Signup failed! Please try again.');
      });
  };

  return (
    <div className="signup-page">
      <div className="form-wrapper sign-up">
        <form onSubmit={signupUser}>
          <h2>Sign Up</h2>
          <div className="input-group">
            <input 
              type="text" 
              placeholder="Name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
            <label>Name</label>
          </div>
          <div className="input-group">
            <input 
              type="email" 
              placeholder="Email" 
              value={signupEmail} 
              onChange={(e) => setSignupEmail(e.target.value)} 
              required 
            />
            <label>Email</label>
          </div>
          <div className="input-group">
            <input 
              type="password" 
              placeholder="Password" 
              value={signupPassword} 
              onChange={(e) => setSignupPassword(e.target.value)} 
              required 
            />
            <label>Password</label>
          </div>
          <select value={userRole} onChange={(e) => setUserRole(e.target.value)}>
            <option value="0">Admin</option>
            <option value="1">User</option>
          </select>
          <button type="submit">Sign Up</button>
          <div className="signUp-link">
            <p>Already have an account? <a href="/login">Sign In</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
