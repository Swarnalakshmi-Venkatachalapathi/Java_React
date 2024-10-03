




import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Table } from "semantic-ui-react"; // Import Semantic UI components
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './menu.css';

const UpdateBook = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      fetchBooks(token);
    } else {
      setIsLoggedIn(false);
      nav('/');
    }
  }, []);

  // Fetch all books
  const fetchBooks = async (token) => {
    try {
      const response = await axios.get("http://localhost:8080/api/admin/books", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  // Handle opening the modal
  const handleOpenModal = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  // Handle updating book details
  const handleUpdateBook = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.put(`http://localhost:8080/api/admin/updateBook/${selectedBook.isbn}`, selectedBook, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert('Book updated successfully!');
      fetchBooks(token); // Refresh book list
      setIsModalOpen(false); // Close the modal
    } catch (error) {
      console.error('Error updating book:', error);
      alert('Failed to update the book.');
    }
  };

  // Handle input change for the selected book
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from local storage
    nav('/'); // Redirect to login page or home page
  };

  // Handle deleting a book
  const handleDelete = async (isbn) => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete(`http://localhost:8080/api/admin/deleteBook/${isbn}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Update state to reflect the deletion
      setBooks((prevBooks) => prevBooks.filter((book) => book.isbn !== isbn));
      alert('Book deleted successfully');
    } catch (error) {
      console.error('Error deleting Book:', error);
      alert('Failed to delete the Book');
    }
  };

  return (
    <div>
      {/* Header Section */}
      <div className="menu-page">
        <div className="menu-container">
          <div className="website-name">Library Management</div>
          <nav>
          <Link to="/menu" className="nav-link">Add Book</Link>
            
      
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="update-book-form">
        <h3>Update/Delete Book</h3>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ISBN</Table.HeaderCell>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Author</Table.HeaderCell>
              <Table.HeaderCell>Year</Table.HeaderCell>
              <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {books.map((book) => (
              <Table.Row key={book.isbn}>
                <Table.Cell>{book.isbn}</Table.Cell>
                <Table.Cell>{book.title}</Table.Cell>
                <Table.Cell>{book.author}</Table.Cell>
                <Table.Cell>{book.year}</Table.Cell>
                <Table.Cell>
                  <Button onClick={() => handleOpenModal(book)}>Update</Button>
                  <Button onClick={() => handleDelete(book.isbn)}>Delete</Button> {/* Pass isbn here */}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>

        {/* Modal for updating book details */}
        <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <Modal.Header>Update Book Details</Modal.Header>
          <Modal.Content>
            <Form onSubmit={handleUpdateBook}>
              <Form.Field>
                <label>Title</label>
                <input 
                  name="title" 
                  value={selectedBook?.title || ''} 
                  onChange={handleChange} 
                  required 
                />
              </Form.Field>
              <Form.Field>
                <label>Author</label>
                <input 
                  name="author" 
                  value={selectedBook?.author || ''} 
                  onChange={handleChange} 
                  required 
                />
              </Form.Field>
              <Form.Field>
                <label>Year</label>
                <input 
                  type="number" 
                  name="year" 
                  value={selectedBook?.year || ''} 
                  onChange={handleChange} 
                  required 
                />
              </Form.Field>
              <Button type="submit" style={{ backgroundColor: '#5d999c' }}>Update Book</Button>
              <Button type="button" onClick={handleCancel}>Cancel</Button> {/* Cancel button */}
            </Form>
          </Modal.Content>
        </Modal>
      </div>
    </div>
  );
};

export default UpdateBook;
