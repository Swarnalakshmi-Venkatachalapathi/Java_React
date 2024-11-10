




import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import styles from './dashboard.module.css';
import axios from 'axios';

const Dashboard = () => {
  const [cars, setCars] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

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
      const response = await axios.get('http://localhost:8080/api/admin/cars', {
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

  const deleteCar = async (id) => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete(`http://localhost:8080/api/admin/car/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCars((prevCars) => prevCars.filter((car) => car.id !== id));
      alert('Car deleted successfully');
    } catch (error) {
      console.error('Error deleting car:', error);
      alert('Failed to delete the car');
    }
  };

  if (!isLoggedIn) {
    return <p>Please log in to view the dashboard</p>;
  }

  return (
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
            <p>{car.description}</p>
            <hr />
            <h5>
              Price: <b>${car.price}</b> - Color: <b>{car.color}</b> - Transmission: <b>{car.transmission}</b> - Type: <b>{car.type}</b> - Year: <b>{car.year}</b>
            </h5>
            <div className={styles.actionButtons}>
              <button
                className={styles.buttonPrimary}
                onClick={() => navigate(`/update-car/${car.id}`)} // Navigate to UpdateCar page
              >
                Update
              </button>
              <button className={styles.buttonDanger} onClick={() => deleteCar(car.id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
