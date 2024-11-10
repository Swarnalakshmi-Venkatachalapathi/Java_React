





import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link for navigation
import axios from 'axios';
import '../admin/searchcar.css'; // Your CSS file
//import styles from './CustomerMenu1.module.css'; // CSS module for AppBar
import styles1 from './CustomerMenu1.module.css'; // CSS module for AppBar
import { Dropdown } from 'semantic-ui-react';
const CustomerSearchCar = ({ userId }) => {
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

  const token = localStorage.getItem('token'); // Retrieve JWT token from localStorage
  const navigate = useNavigate(); // For navigation

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        'http://localhost:8080/api/customer/car/search/cars',
        {
          brand: selectedBrand,
          type: selectedType,
          color: selectedColor,
          transmission: selectedTransmission,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          }
        }
      );
      setCars(response.data.carDtoList);
    } catch (error) {
      console.error('Error searching cars:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleViewCar = (carId) => {
    navigate(`/car-details/${carId}`); // Navigate to the CarDetails page with the carId
  };

  const handleUserInfo = () => {
    navigate(`/userInfo/${userId}`);
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the JWT token
    localStorage.removeItem('userId'); // Clear the user ID as well
    navigate('/'); // Redirect to the login page
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

      {/* Search Car Section */}
      <div className="ssbody">
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
                <div key={car.id} className="car-card chocolat-zoomable">
                  <div className="chocolat-wrapper">
                    <div className="chocolat-image-wrapper">
                      <img src={`data:image/jpeg;base64,${car.returnedImage}`} alt={car.name} className="chocolat-img car-img" />
                    </div>
                    <h2>{car.name}</h2>
                    <p>Brand: {car.brand}</p>
                    <p>Type: {car.type}</p>
                    <p>Color: {car.color}</p>
                    <p>Transmission: {car.transmission}</p>
                    <p>Price: {car.price}</p>

                    {/* Add View Car Button */}
                    <button onClick={() => handleViewCar(car.id)} className="view-car-btn">
                      View Car
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerSearchCar;
