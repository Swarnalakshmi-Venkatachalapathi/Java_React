







import React, { useEffect, useState } from "react";
import { Card, Modal, Button } from "semantic-ui-react"; // Import Semantic UI components
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Customermenu.css';

const CustomerMenu = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      const token = localStorage.getItem('token'); // Assuming token is stored in local storage
      if (!token) {
        nav('/'); // Redirect to login if not logged in
        return; // Ensure fetchBooks exits if no token
      }
      try {
        const response = await axios.get("http://localhost:8080/api/user/books", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, [nav]);

  // Handle opening the modal
  const handleOpenModal = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from local storage
    nav('/'); // Redirect to login page or home page
  };

  return (
    <div>
      {/* Header Section */}
      <div className="menu-page">
        <div className="menu-container">
          <div className="website-name">Library Management</div>
          <Button onClick={handleLogout} style={{ marginLeft: 'auto' }}>Logout</Button>
        </div>
      </div>

      {/* Books Display Section */}
      <div className="customer-menu">
        <Card.Group>
          {books.map((book) => (
            <Card key={book.isbn}>
              <Card.Content>
                <Card.Header>{book.title}</Card.Header>
                <Button onClick={() => handleOpenModal(book)} className="view-details-button">View Details</Button>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>

        {/* Modal for Book Details */}
        <Modal className="custom-modal" open={isModalOpen} onClose={handleCloseModal}>
          <Modal.Header>Book Details</Modal.Header>
          <Modal.Content>
            {selectedBook ? (
              <div>
                <p><strong>ISBN:</strong> {selectedBook.isbn}</p>
                <p><strong>Title:</strong> {selectedBook.title}</p>
                <p><strong>Author:</strong> {selectedBook.author}</p>
                <p><strong>Year:</strong> {selectedBook.year}</p>
              </div>
            ) : (
              <p>No book selected.</p> // Fallback if no book is selected
            )}
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={handleCloseModal}>Back</Button>
          </Modal.Actions>
        </Modal>
      </div>
    </div>
  );
};

export default CustomerMenu;
