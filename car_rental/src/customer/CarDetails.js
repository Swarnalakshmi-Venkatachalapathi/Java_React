

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate,Link } from 'react-router-dom'; // To get carId and use navigation
import axios from 'axios';
import './CarDetails.css';
import styles from './CustomerMenu1.module.css'; // Import styles for the header
import styles1 from './CustomerMenu1.module.css'; // CSS module for AppBar
import { Dropdown } from 'semantic-ui-react';
const CarDetails = () => {
  const { carId } = useParams(); // Get carId from URL parameters
  const [car, setCar] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const navigate = useNavigate(); // For navigation
  const userId = localStorage.getItem('userId'); 

  useEffect(() => {
    fetchCarDetails();
  }, [carId]);

  const fetchCarDetails = async () => {
    setIsSpinning(true);
    const token = localStorage.getItem('token');

    try {
      const response = await axios.get(`http://localhost:8080/api/customer/car/${carId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const carData = {
        ...response.data,
        processedImage: `data:image/jpeg;base64,${response.data.returnedImage}`,
      };
      setCar(carData);
    } catch (error) {
      console.error('Error fetching car details:', error);
    } finally {
      setIsSpinning(false);
    }
  };

  const handleBookCar = () => {
    navigate(`/book-car/${carId}`, { state: { carId, price: car.price } }); // Navigate to BookCar with carId and price
  };

  const handleOut = () => {
    navigate(`/customer-menu`); // Change to the appropriate route
  };
  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the JWT token
    localStorage.removeItem('userId'); // Clear the user ID as well
    navigate('/'); // Redirect to the login page
  };
  const handleUserInfo = () => {
    navigate(`/userInfo/${userId}`);
  };

  if (isSpinning) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {/* Header Section */}
      <div className={styles1.menuContainer}>
        <div className={styles1.websiteName}>Car Rental Service</div>
        <nav className={styles1.nav}>
        <Link to="/customer-menu" className={styles1.navLink}>
            Home
          </Link>

          <Link to={`/customer/bookings/${userId}`} className={styles1.navLink}>
            Bookings
          </Link>
          <Link to="/customer/cars" className={styles1.navLink}>
            Cars
          </Link>
          <Link to="/search/car/cust" className={styles1.navLink}>
            Search
          </Link>
          <Dropdown icon="user" pointing="top right" className={styles1.userIcon}>
          <Dropdown.Menu>
            <Dropdown.Item text="User Info" onClick={handleUserInfo}/>
            <Dropdown.Item text="Logout" onClick={handleLogout} />
          </Dropdown.Menu>
        </Dropdown>
        </nav>
      </div>

      {/* Car Details Section */}
      <div className="car-details">
        {car ? (
          <div className="car-details-card">
            <img src={car.processedImage} alt={car.name} className="car-image" />
            <h2>{car.brand} - {car.name}</h2>
            <p>{car.description}</p>
            <h4>Price: ${car.price}</h4>
            <p>Year: {car.year}</p>
            <p>Color: {car.color}</p>
            <p>Transmission: {car.transmission}</p>

            {/* Button container for horizontal layout */}
            <div className="button-container">
              <button className="book-button" onClick={handleBookCar}>
                Book Car
              </button>
              <button className="cancel-button" onClick={handleOut}>
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <p>Car details not found.</p>
        )}
      </div>
    </div>
  );
};

export default CarDetails;
