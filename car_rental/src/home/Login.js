


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import './login.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const loginUser = async (e) => {
    e.preventDefault();
    const loginData = { email, password };

    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', loginData);
      const { jwt, userId, userRole } = response.data; // Get userId, role, and token from the response
      localStorage.setItem('token', jwt); // Save token in localStorage
      localStorage.setItem('userId', userId); // Save userId in localStorage

      // Redirect based on user role (compare with string values)
      if (userRole === 'ADMIN') {
        navigate('/menu'); // Admin menu
      } else if (userRole === 'CUSTOMER') {
        navigate('/customer-menu'); // Customer menu
      } else {
        alert('Invalid role!');
      }
    } catch (error) {
      console.error('There was an error logging in!', error);
      alert('Login failed! Please check your credentials.');
    }
  };

  return (
    <div className="login-page">
      <div className="form-wrapper sign-in">
        <form onSubmit={loginUser}>
          <h2>Login</h2>
          <div className="input-group">
            <input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
            <label>Email</label>
          </div>
          <div className="input-group">
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
            <label>Password</label>
          </div>
          <button type="submit">Login</button>
          <div className="signUp-link">
            <p>Don't have an account? <a href="/signup">Sign Up</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
