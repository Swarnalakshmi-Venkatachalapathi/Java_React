




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Modal, Button } from "semantic-ui-react";
import './home.css';

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[userRole,setUserRole] =useState('');
  const [open, setOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState(''); // Default role is 'USER'
  const navigate = useNavigate();

  // Function to handle login
  const loginUser = async (e) => {
    e.preventDefault();
    const loginData = { email, password };

    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', loginData);
      const { jwt, userId, userRole } = response.data;
      localStorage.setItem('token', jwt);
      localStorage.setItem('userId', userId);

      if (userRole === 'ADMIN') {
        navigate('/menu');
      } else if (userRole === 'USER') {
        navigate('/customer-menu');
      } else {
        alert('Invalid role!');
      }
    } catch (error) {
      console.error('There was an error logging in!', error);
      alert('Login failed! Please check your credentials.');
    }
  };

  // Function to handle signup
  const signupUser = async (e) => {
    e.preventDefault();
    const signupData = { name, email: signupEmail, password: signupPassword, userRole:role }; // Include role in signup data

    try {
      await axios.post('http://localhost:8080/api/auth/signup', signupData);
      alert('Signup successful! Please log in.');
      setSignupOpen(false);
    } catch (error) {
      console.error('There was an error signing up!', error);
      alert('Signup failed! Please try again.');
    }
  };

  return (
    <div className="home-container">
      <Button onClick={() => setOpen(true)} className="ui button primary">Login</Button>
      <div></div>
      <Button onClick={() => setSignupOpen(true)} className="ui button secondary">Signup</Button>

      {/* Login Modal */}
      <Modal onClose={() => setOpen(false)} open={open}>
        <Modal.Header>Login</Modal.Header>
        <Modal.Content>
          <form onSubmit={loginUser}>
            <div className="input-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Modal.Actions>
              <Button type="submit">Sign In</Button>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
            </Modal.Actions>
          </form>
          <div className="signUp-link">
            <p>Don't have an account? <a href="#" onClick={() => { setOpen(false); setSignupOpen(true); }}>Sign Up</a></p>
          </div>
        </Modal.Content>
      </Modal>

      {/* Sign Up Modal */}
      <Modal onClose={() => setSignupOpen(false)} open={signupOpen}>
        <Modal.Header>Sign Up</Modal.Header>
        <Modal.Content>
          <form onSubmit={signupUser}>
            <div className="input-group">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                placeholder="Email"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="Password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Role:</label>
              <select value={role} onChange={(e) => setRole(e.target.value)} required>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
              </select>
            </div>
            <Modal.Actions>
              <Button type="submit">Sign Up</Button>
              <Button onClick={() => setSignupOpen(false)}>Cancel</Button>
            </Modal.Actions>
          </form>
          <div className="signUp-link">
            <p>Already have an account? <a href="#" onClick={() => { setSignupOpen(false); setOpen(true); }}>Sign In</a></p>
          </div>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default Home;
