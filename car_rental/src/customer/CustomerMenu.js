


import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import styles from './CustomerMenu1.module.css'; // Assuming you're using a CSS module
import 'semantic-ui-css/semantic.min.css';
import { Dropdown } from 'semantic-ui-react';


const CustomerMenu = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);
  const slideIntervalTime = 5000; // 5 seconds for slide transition
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId'); 

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    const fetchCars = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/customer/cars', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.status === 401) {
          localStorage.removeItem('token');
          navigate('/login');
          return;
        }

        const data = await response.json();
        const processedCars = data.map((car) => ({
          ...car,
          processedImage: car.returnedImage
            ? `data:image/jpeg;base64,${car.returnedImage}`
            : 'defaultImageURL', // Replace with a valid default image URL
        }));
        setCars(processedCars);
      } catch (error) {
        console.error('Error fetching cars:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, [navigate]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % cars.length);
    }, slideIntervalTime);

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, [cars]);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the JWT token
    localStorage.removeItem('userId'); // Clear the user ID as well
    navigate('/'); // Redirect to the login page
  };

    const handleUserInfo = () => {
      navigate(`/userInfo/${userId}`);
    };



  return (
    <div className={styles.menuContainer}>
      {/* Header Section */}
 {/* Header Section */}
 
{/* <div className={styles.menuContainer}>
  <div className={styles.websiteName}>Car Rental Service</div>
  <nav className={styles.nav}>
    <Link to={`/customer/bookings/${userId}`} className={styles.navLink}>
      Bookings
    </Link>
    <Link to="/customer/cars" className={styles.navLink}>
      Cars
    </Link>
    <Link to="/search/car/cust" className={styles.navLink}>
      Search
    </Link>
    <i class="user icon"></i>
    <button className={styles.logoutButton} onClick={handleLogout}>
      Logout
    </button>
  </nav>
</div> */}




<div className={styles.menuContainer}>
      <div className={styles.websiteName}>Car Rental Service</div>
      <nav className={styles.nav}>
        <Link to={`/customer/bookings/${userId}`} className={styles.navLink}>
          Bookings
        </Link>
        <Link to="/customer/cars" className={styles.navLink}>
          Cars
        </Link>
        <Link to="/search/car/cust" className={styles.navLink}>
          Search
        </Link>
        
        <Dropdown icon="user" pointing="top right" className={styles.userIcon}>
          <Dropdown.Menu>
            <Dropdown.Item text="User Info" onClick={handleUserInfo}/>
            <Dropdown.Item text="Logout" onClick={handleLogout} />
          </Dropdown.Menu>
        </Dropdown>
      </nav>
    </div>


      {/* Slider Section (replacing Hero Section) */}
      <div className={styles.heroSection}>
        {loading ? (
          <div>Loading...</div>
        ) : cars.length > 0 ? (
          <div className={styles.sliderContainer}>
            <div className={styles.slides}>
              {cars.map((car, index) => (
                <img
                  key={index}
                  className={`${styles.slide} ${counter === index ? styles.active : ''}`}
                  src={car.processedImage}
                  alt={car.name}
                  style={{
                    display: counter === index ? 'block' : 'none',
                    width: '100%', // Make sure it takes full width of the hero section
                    height: 'auto', // Maintain aspect ratio
                  }}
                />
              ))}
            </div>
            <span
              className={styles.prev}
              onClick={() => setCounter((counter - 1 + cars.length) % cars.length)}
            >
              &#10094;
            </span>
            <span
              className={styles.next}
              onClick={() => setCounter((counter + 1) % cars.length)}
            >
              &#10095;
            </span>
          </div>
        ) : (
          <div>No cars available at the moment.</div>
        )}
      </div>

      <div className={styles.promoSection}>
  <h2>Discover the Best Car Rental Deals!</h2>
  <p>
    Explore our wide range of vehicles, from economy to luxury. Whether you're planning a weekend getaway or a business trip, we have the perfect car for you.
  </p>
  <p>
    Book your ride today and enjoy seamless, reliable, and affordable car rentals with unmatched service. Your journey starts here!
  </p>
</div>



    {/* Car Brands Section */}
<div className={styles.carBrands}>
  <img src="honda.jpg" alt="Honda" className={styles.brandLogo} />
  <img src="toyota.jpg" alt="Toyota" className={styles.brandLogo} />
  <img src="GMC.jpg" alt="GMC" className={styles.brandLogo} />
  <img src="tesla.jpg" alt="Tesla" className={styles.brandLogo} />
</div>

    </div>
  );
};

export default CustomerMenu;
