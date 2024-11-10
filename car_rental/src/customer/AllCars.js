


import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // For navigation
import styles from './AllCars.module.css';
import axios from 'axios';
//import CustomerMenuStyles from './CustomerMenu1.module.css'; // Import your CSS for AppBar
import styles1 from './CustomerMenu1.module.css'; // CSS module for AppBar
import { Dropdown } from 'semantic-ui-react';
const AllCars = () => {
  const [cars, setCars] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // Hook for navigation
  const userId = localStorage.getItem('userId'); 
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      fetchCars(token);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const fetchCars = async (token) => {
    try {
      const response = await axios.get('http://localhost:8080/api/customer/cars', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const carsData = response.data.map((car) => ({
        ...car,
        processedImage: `data:image/jpeg;base64,${car.returnedImage}`,
      }));
      setCars(carsData);
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };

  const handleBookCar = (carId, price) => {
    navigate(`/book-car/${carId}`, { state: { carId, price } });
  };

  if (!isLoggedIn) {
    return <p>Please log in to view the dashboard</p>;
  }

  const handleViewCarDetails = (carId) => {
    navigate(`/car-details/${carId}`); // Navigate to the car details page
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the JWT token
    navigate('/'); // Redirect to the login page
  };
  const handleUserInfo = () => {
    navigate(`/userInfo/${userId}`);
  };
  return (
    <div>
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

      {/* All Cars Section */}
      <div className={styles.dashboardContainer}>
        {cars.map((car) => (
          <div className={styles.carCard} key={car.id}>
            <div className={styles.carCardImage}>
              <img src={car.processedImage} alt="Car" className={styles.profile} />
            </div>
            <div className={styles.carCardDetails}>
              <h2 className={styles.carTitle}>
                {car.brand} - {car.name}
              </h2>
              <div></div>
              {/* Wrap buttons in a container with flex styles */}
  <div className={styles.buttonContainer}>
    <button onClick={() => handleBookCar(car.id, car.price)} className={styles.bookButton}>
      Book Car
    </button>
    <button onClick={() => handleViewCarDetails(car.id)} className={styles.viewButton}>
      View Car Details
    </button>
  </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCars;

