import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './searchcar.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SearchCar = () => {
  const [brands, setBrands] = useState(['Toyota', 'Honda', 'BMW', 'Mercedes', 'Audi', 'Lexus']);
  const [types, setTypes] = useState(['Sports Car', 'Diesel', 'Crossover', 'Luxury Car']);
  const [colors, setColors] = useState(['Red', 'Blue', 'Brown', 'Green']);
  const [transmissions, setTransmissions] = useState(['Manual', 'Automatic']);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedTransmission, setSelectedTransmission] = useState('');
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate();

  // Retrieve JWT token from localStorage
  const token = localStorage.getItem('token'); // Updated to match PostCar token retrieval

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        'http://localhost:8080/api/admin/car/search',
        {
          brand: selectedBrand,
          type: selectedType,
          color: selectedColor,
          transmission: selectedTransmission,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Authorization header with Bearer token
            'Content-Type': 'application/json', // Optional, ensures request is in JSON format
          },
        }
      );
      setCars(response.data.carDtoList);
    } catch (error) {
      console.error('Error searching cars:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the JWT token
    localStorage.removeItem('userId'); // Clear the user ID as well
    navigate('/'); // Redirect to the login page
  };  
  return (
<div className="menu-page">
      <div className="menu-container">
        <div className="website-name">Car Rental Service</div>
        <nav>
          <Link to="/menu">Home</Link> 
          <Link to="/post-car">Car</Link>
          <Link to="/bookings">Bookings</Link> 
          <Link to="/search">Search</Link>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
          <span></span>
        </nav>
      </div>

    <div className="search-car-container">
      <h1 className="search-title">Search Car</h1>

      <div className="search-form">
        <select onChange={(e) => setSelectedBrand(e.target.value)} value={selectedBrand}>
          <option value="">Select Brand</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>

        <select onChange={(e) => setSelectedType(e.target.value)} value={selectedType}>
          <option value="">Select Type</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <select onChange={(e) => setSelectedColor(e.target.value)} value={selectedColor}>
          <option value="">Select Color</option>
          {colors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>

        <select onChange={(e) => setSelectedTransmission(e.target.value)} value={selectedTransmission}>
          <option value="">Select Transmission</option>
          {transmissions.map((transmission) => (
            <option key={transmission} value={transmission}>
              {transmission}
            </option>
          ))}
        </select>

        <button onClick={handleSearch} className="search-btn">
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {cars.length > 0 && (
        <div className="car-list">
          {cars.map((car) => (
            <div key={car.id} className="Acar-card">
              <img src={`data:image/jpeg;base64,${car.returnedImage}`} alt={car.name} className="car-img" />
              <h2>     {car.name}</h2>
              <p>Brand Name : {car.brand}</p>
              <p>Type of the Car : {car.type}</p>
              <p>Car Colour : {car.color}</p>
              <p>Tramsmission Type : {car.transmission}</p>
              <p>Price per Day : ${car.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default SearchCar;
