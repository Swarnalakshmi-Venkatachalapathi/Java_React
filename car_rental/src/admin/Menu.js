


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Card, Button, Image } from 'semantic-ui-react'; // Import Semantic UI components
// import axios from 'axios';
// import './menu.css'; 
// import { useNavigate } from 'react-router-dom';
// import { Margin } from '@mui/icons-material';

// const Menu = () => {
//   const navigate = useNavigate();
//   const [cars, setCars] = useState([]);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       setIsLoggedIn(true);
//       fetchCars(token);
//     } else {
//       setIsLoggedIn(false);
//     }
//   }, []);

//   const fetchCars = async (token) => {
//     try {
//       const response = await axios.get('http://localhost:8080/api/admin/cars', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       const carsData = response.data.map((car) => ({
//         ...car,
//         processedImage: `data:image/jpeg;base64,${car.returnedImage}`,
//       }));
//       setCars(carsData);
//     } catch (error) {
//       console.error('Error fetching cars:', error);
//     }
//   };

//   const deleteCar = async (id) => {
//     const token = localStorage.getItem('token');
//     try {
//       await axios.delete(`http://localhost:8080/api/admin/car/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setCars((prevCars) => prevCars.filter((car) => car.id !== id));
//       alert('Car deleted successfully');
//     } catch (error) {
//       console.error('Error deleting car:', error);
//       alert('Failed to delete the car');
//     }
//   };

//   const handleUpdateCar = (carId) => {
//     navigate(`/update-car/${carId}`); // Redirect to the update car page with the car ID
//   };

//   if (!isLoggedIn) {
//     return <p>Please log in to view the dashboard</p>;
//   }

//   const handleLogout = () => {
//     localStorage.removeItem('token'); // Clear the JWT token
//     localStorage.removeItem('userId'); // Clear the user ID as well
//     navigate('/'); // Redirect to the login page
//   };

//   return (
//     <div className="menu-page">
//       <div className="menu-container">
//         <div className="website-name">Car Rental Service</div>
//         <nav>
//           {/* <Link to="/dashboard">Dashboard</Link>  */}
//           <Link to="/post-car">Car</Link>
//           <Link to="/bookings">Bookings</Link> 
//           <Link to="/search">Search</Link>
//           <button className="logout-button" onClick={handleLogout}>Logout</button>
//           <span></span>
//         </nav>
//       </div>

//       {/* Display Cars as Cards */}
//       <div className="cars-container">
//         <Card.Group>
//           {cars.map((car) => (
//             <Card key={car.id}>
//               <Image src={car.processedImage} wrapped ui={false} />
//               <Card.Content>
//                 <Card.Header>
//                   {car.brand} - {car.name}
//                 </Card.Header>
//                 <Card.Meta>
//                   <span>{car.description}</span>
//                 </Card.Meta>
//                 <Card.Description>
//                   <h5>
//                     Price: <b>${car.price}</b> - Color: <b>{car.color}</b> - Transmission: <b>{car.transmission}</b> - Type: <b>{car.type}</b> - Year: <b>{car.year}</b>
//                   </h5>
//                 </Card.Description>
//               </Card.Content>
//               <Card.Content extra>
//                 <Button onClick={() => handleUpdateCar(car.id)}   style={{ backgroundColor: '#5d999c', marginBottom: '5px' }} >Update</Button>
           
//                 <Button onClick={() => deleteCar(car.id)}  style={{ backgroundColor: '#5d999c' }}>Delete</Button>
//               </Card.Content>
//             </Card>
//           ))}
//         </Card.Group>
//       </div>
//     </div>
//   );
// };

// export default Menu;






// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Card, Button, Image } from 'semantic-ui-react'; // Import Semantic UI components
// import axios from 'axios';
// import './menu.css'; 
// import { useNavigate } from 'react-router-dom';
// import { Margin } from '@mui/icons-material';

// const Menu = () => {
//   const navigate = useNavigate();
//   const [cars, setCars] = useState([]);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       setIsLoggedIn(true);
//       fetchCars(token);
//     } else {
//       setIsLoggedIn(false);
//     }
//   }, []);

//   const fetchCars = async (token) => {
//     try {
//       const response = await axios.get('http://localhost:8080/api/admin/cars', {
//         headers: {
//           Authorization: Bearer ${token},
//         },
//       });
//       const carsData = response.data.map((car) => ({
//         ...car,
//         processedImage: data:image/jpeg;base64,${car.returnedImage},
//       }));
//       setCars(carsData);
//     } catch (error) {
//       console.error('Error fetching cars:', error);
//     }
//   };

//   const deleteCar = async (id) => {
//     const token = localStorage.getItem('token');
//     try {
//       await axios.delete(http://localhost:8080/api/admin/car/${id}, {
//         headers: {
//           Authorization: Bearer ${token},
//         },
//       });
//       setCars((prevCars) => prevCars.filter((car) => car.id !== id));
//       alert('Car deleted successfully');
//     } catch (error) {
//       console.error('Error deleting car:', error);
//       alert('Failed to delete the car');
//     }
//   };

//   const handleUpdateCar = (carId) => {
//     navigate(/update-car/${carId}); // Redirect to the update car page with the car ID
//   };

//   if (!isLoggedIn) {
//     return <p>Please log in to view the dashboard</p>;
//   }

//   const handleLogout = () => {
//     localStorage.removeItem('token'); // Clear the JWT token
//     localStorage.removeItem('userId'); // Clear the user ID as well
//     navigate('/'); // Redirect to the login page
//   };

//   return (
//     <div className="menu-page">
//       <div className="menu-container">
//         <div className="website-name">Car Rental Service</div>
//         <nav>
//           {/* <Link to="/dashboard">Dashboard</Link>  */}
//           <Link to="/post-car">Car</Link>
//           <Link to="/bookings">Bookings</Link> 
//           <Link to="/search">Search</Link>
//           <button className="logout-button" onClick={handleLogout}>Logout</button>
//           <span></span>
//         </nav>
//       </div>

//       {/* Display Cars as Cards */}
//       <div className="cars-container">
//         <Card.Group>
//           {cars.map((car) => (
//             <Card key={car.id}>
//               <Image src={car.processedImage} wrapped ui={false} />
//               <Card.Content>
//                 <Card.Header>
//                   {car.brand} - {car.name}
//                 </Card.Header>
//                 <Card.Meta>
//                   <span>{car.description}</span>
//                 </Card.Meta>
//                 <Card.Description>
//                   <h5>
//                     Price: <b>${car.price}</b> - Color: <b>{car.color}</b> - Transmission: <b>{car.transmission}</b> - Type: <b>{car.type}</b> - Year: <b>{car.year}</b>
//                   </h5>
//                 </Card.Description>
//               </Card.Content>
//               <Card.Content extra>
//                 <Button onClick={() => handleUpdateCar(car.id)}   style={{ backgroundColor: '#5d999c', marginBottom: '5px' }} >Update</Button>
           
//                 <Button onClick={() => deleteCar(car.id)}  style={{ backgroundColor: '#5d999c' }}>Delete</Button>
//               </Card.Content>
//             </Card>
//           ))}
//         </Card.Group>
//       </div>
//     </div>
//   );
// };

// export default Menu;


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Image, Modal } from 'semantic-ui-react';
import axios from 'axios';
import './menu1.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Menu = () => {
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null); // For handling selected car to update
  const [openModal, setOpenModal] = useState(false); // For modal visibility

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
      toast('Car deleted successfully');
    } catch (error) {
      console.error('Error deleting car:', error);
      toast('Failed to delete the car');
    }
  };

  const handleUpdateCar = (car) => {
    setSelectedCar(car); // Set the selected car
    setOpenModal(true);  // Open the modal
  };

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
        <div className="website-name">Car Rental Service</div>
        <nav>
          <Link to="/post-car">Car</Link>
          <Link to="/bookings">Bookings</Link> 
          <Link to="/search">Search</Link>
        
          <button className="logout-button" onClick={handleLogout}>Logout</button>
          <span></span>
        </nav>
      </div>

      {/* Display Cars as Cards */}
      <div className="cars-container">
        <Card.Group>
          {cars.map((car) => (
            <Card key={car.id}>
              <Image src={car.processedImage} wrapped ui={false} />
              <Card.Content>
                <Card.Header>
                  {car.brand} - {car.name}
                </Card.Header>
                <Card.Meta>
                  <span>{car.description}</span>
                </Card.Meta>
                <Card.Description>
                  <h5>
                    Price: <b>${car.price}</b> - Color: <b>{car.color}</b> - Transmission: <b>{car.transmission}</b> - Type: <b>{car.type}</b> - Year: <b>{car.year}</b>
                  </h5>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button onClick={() => handleUpdateCar(car)} style={{ backgroundColor: '#5d999c', marginBottom: '5px' }}>Update</Button>
                <Button onClick={() => deleteCar(car.id)} style={{ backgroundColor: '#5d999c' }}>Delete</Button>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </div>

      {/* Modal for Updating Car */}
      {selectedCar && (
        <Modal open={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>Update Car</Modal.Header>
          <Modal.Content>
            <UpdateCarForm car={selectedCar} setCars={setCars} setOpenModal={setOpenModal} />
          </Modal.Content>
        </Modal>
      )}
    </div>
  );
};

const UpdateCarForm = ({ car, setCars, setOpenModal }) => {
  const [formData, setFormData] = useState(car);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    
    // Create an object with only modified fields
    const updatedFields = {};
    for (let key in formData) {
      if (formData[key] !== car[key]) {
        updatedFields[key] = formData[key];
      }
    }

    try {
      await axios.put(`http://localhost:8080/api/admin/car/${car.id}`, updatedFields, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast('Car updated successfully');
      
      // Update the car in the state
      setCars((prevCars) => prevCars.map((c) => (c.id === car.id ? { ...c, ...updatedFields } : c)));
      
      setOpenModal(false); // Close the modal after saving
    } catch (error) {
      console.error('Error updating car:', error);
      toast('Failed to update the car');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </label>
      <label>
        Brand:
        <input type="text" name="brand" value={formData.brand} onChange={handleInputChange} />
      </label>
      <label>
        Description:
        <textarea name="description" value={formData.description} onChange={handleInputChange}></textarea>
      </label>
      <label>
        Price:
        <input type="number" name="price" value={formData.price} onChange={handleInputChange} />
      </label>
      <label>
        Color:
        <input type="text" name="color" value={formData.color} onChange={handleInputChange} />
      </label>
      <label>
        Transmission:
        <input type="text" name="transmission" value={formData.transmission} onChange={handleInputChange} />
      </label>
      <label>
        Type:
        <input type="text" name="type" value={formData.type} onChange={handleInputChange} />
      </label>
      <label>
        Year:
        <input type="number" name="year" value={formData.year} onChange={handleInputChange} />
      </label>
      
      {/* Buttons */}
      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        <button type="submit">Save Changes</button>
        <button type="button" onClick={() => setOpenModal(false)}>Cancel</button>
      </div>
    </form>
  );
};

export default Menu; 
