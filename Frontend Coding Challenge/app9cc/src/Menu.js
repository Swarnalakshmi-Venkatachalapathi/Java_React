



import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, Button, Image, Form } from 'semantic-ui-react'; // Import Semantic UI components
import axios from 'axios';
import './menu.css'; 

const Menu = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    year: ''
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  // Add a new book
  const handleAddBook = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.post('http://localhost:8080/api/admin/book', newBook, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert('Book added successfully!');
      setNewBook({ name: '', author: '', year: '' }); // Reset form fields
    } catch (error) {
      console.error('Error adding book:', error);
      alert('Failed to add the book.');
    }
  };

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the JWT token
    localStorage.removeItem('userId'); // Clear the user ID as well
    navigate('/'); // Redirect to the login page
  };

  if (!isLoggedIn) {
    return <p>Please log in to view the dashboard</p>;
  }

  return (
    <div className="menu-page">
      <div className="menu-container">
        <div className="website-name">Library Management</div>
        <nav>
    <Link to="/update" className="nav-link">Update/Delete Book</Link>
    <button className="logout-button" onClick={handleLogout}>Logout</button>
</nav>

      </div>

      {/* Form to add new book */}
      <div className="add-book-form">
        <h3>Add New Book</h3>
        <Form onSubmit={handleAddBook}>
          <Form.Field>
            <label>Title</label>
            <input 
              placeholder="Book Title" 
              value={newBook.title} 
              onChange={(e) => setNewBook({ ...newBook, title: e.target.value })} 
              required 
            />
          </Form.Field>
          <Form.Field>
            <label>Author</label>
            <input 
              placeholder="Author" 
              value={newBook.author} 
              onChange={(e) => setNewBook({ ...newBook, author: e.target.value })} 
              required 
            />
          </Form.Field>
          <Form.Field>
            <label>Year</label>
            <input 
              type="number" 
              placeholder="Year" 
              value={newBook.year} 
              onChange={(e) => setNewBook({ ...newBook, year: e.target.value })} 
              required 
            />
          </Form.Field>
          <Button type="submit" style={{ backgroundColor: '#5d999c' }}>Add Book</Button>
        </Form>
      </div>
    </div>
  );
};

export default Menu;
