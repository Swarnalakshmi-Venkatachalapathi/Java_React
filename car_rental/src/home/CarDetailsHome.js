
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // To get carId and use navigation
import axios from 'axios';
import '../customer/CarDetails.css';

const CarDetailsHome = () => {
  const { carId } = useParams(); // Get carId from URL parameters
  const [car, setCar] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    fetchCarDetails();
  }, [carId]);

  const fetchCarDetails = async () => {
    setIsSpinning(true);
    // const token = localStorage.getItem('token');

    try {
      const response = await axios.get(`http://localhost:8080/api/home/car/${carId}`, {
  
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
const handleOut=()=>
{
    navigate(`/`)
}
  if (isSpinning) {
    return <p>Loading...</p>;
  }

  return (
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

          {/* Add Book Car Button */}
          <button className="book-button" onClick={handleBookCar}>
            Book Car
          </button>
          <div> </div>
          <button className='book-button' onClick={handleOut}> Cancel </button>
        </div>
      ) : (
        <p>Car details not found.</p>
      )}
    </div>
  );
};

export default CarDetailsHome;
