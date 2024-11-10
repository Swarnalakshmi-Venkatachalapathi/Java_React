// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import styles from './UpdateUserInfo.module.css'; // You can create this CSS module for styling

// const UpdateUserInfo = () => {
//   const { userId } = useParams();
//   const navigate = useNavigate();
//   const [userInfo, setUserInfo] = useState({
//     user: {
//       id: userId,
//     },
//     address1: '',
//     address2: '',
//     city: '',
//     state: '',
//     country: '',
//     mobile: '',
//     pincode: '',
//   });
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUserInfo = async () => {
//       const token = localStorage.getItem('token');
//       const response = await fetch(`http://localhost:8080/api/customer/custdetails/${userId}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.ok) {
//         const data = await response.json();
//         // Update userInfo to include user.id
//         setUserInfo((prevInfo) => ({
//           ...prevInfo,
//           address1: data.address1,
//           address2: data.address2,
//           city: data.city,
//           state: data.state,
//           country: data.country,
//           mobile: data.mobile,
//           pincode: data.pincode,
//         }));
//       } else {
//         console.error('Failed to fetch user info');
//       }
//     };

//     fetchUserInfo();
//   }, [userId]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserInfo((prevInfo) => ({
//       ...prevInfo,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem('token');
//     try {
//       const response = await fetch('http://localhost:8080/api/customer/custdetails/update', {
//         method: 'PUT',
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userInfo),
//       });

//       if (response.ok) {
//         alert('User information updated successfully!');
//         navigate(`/userInfo/${userId}`); // Navigate back to UserInfo page
//       } else {
//         const errorMessage = await response.text();
//         setError(errorMessage);
//       }
//     } catch (error) {
//       console.error('Error updating user info:', error);
//       setError('An error occurred while updating user information.');
//     }
//   };

//   return (
//     <div className={styles.updateUserInfoContainer}>
//       <h2>Update User Information</h2>
//       {error && <div className={styles.errorMessage}>{error}</div>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Address 1:</label>
//           <input type="text" name="address1" value={userInfo.address1} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Address 2:</label>
//           <input type="text" name="address2" value={userInfo.address2} onChange={handleChange} />
//         </div>
//         <div>
//           <label>City:</label>
//           <input type="text" name="city" value={userInfo.city} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>State:</label>
//           <input type="text" name="state" value={userInfo.state} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Country:</label>
//           <input type="text" name="country" value={userInfo.country} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Mobile:</label>
//           <input type="text" name="mobile" value={userInfo.mobile} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Pincode:</label>
//           <input type="text" name="pincode" value={userInfo.pincode} onChange={handleChange} required />
//         </div>
//         <button type="submit">Update</button>
//         <button type="button" onClick={() => navigate(`/userInfo/${userId}`)}>Cancel</button>
//       </form>
//     </div>
//   );
// };

// export default UpdateUserInfo;

  




import React, { useEffect, useState } from 'react';
import { useParams, useNavigate,Link } from 'react-router-dom';
import styles from './UpdateUserInfo.module.css';
import styles1 from './CustomerMenu1.module.css';
import { Dropdown } from 'semantic-ui-react';
import { Margin } from '@mui/icons-material';
import { toast } from 'react-toastify';
const UpdateUserInfo = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    user: {
      id: userId,
    },
    address1: '',
    address2: '',
    city: '',
    state: '',
    country: '',
    mobile: '',
    pincode: '',
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:8080/api/customer/custdetails/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUserInfo((prevInfo) => ({
          ...prevInfo,
          address1: data.address1,
          address2: data.address2,
          city: data.city,
          state: data.state,
          country: data.country,
          mobile: data.mobile,
          pincode: data.pincode,
        }));
      } else {
        console.error('Failed to fetch user info');
      }
    };

    fetchUserInfo();
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const response = await fetch('http://localhost:8080/api/customer/custdetails/update', {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      });

      if (response.ok) {
        toast('User information updated successfully!');
        navigate(`/userInfo/${userId}`);
      } else {
        toast('Error occured while updating User information');
        const errorMessage = await response.text();
        setError(errorMessage);
      }
    } catch (error) {
      console.error('Error updating user info:', error);
      setError('An error occurred while updating user information.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the JWT token
    localStorage.removeItem('userId'); // Clear the user ID as well
    navigate('/'); // Redirect to the login page
  };

  const handleUserInfo = () => {
    navigate(`/userInfo/${userId}`);
  };

  return (
    <div>
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
      
    <div className={styles.updateUserInfoContainer}>
      <h2>Update User Information</h2>
      {error && <div className={styles.errorMessage}>{error}</div>}
      <form 
  style={{
    display: 'grid', 
    gridTemplateColumns: 'repeat(2, 1fr)', 
    margin: '30px',
    gap:'40px'
  }} 
  onSubmit={handleSubmit}
>
        <div>
          <label>Address 1:</label>
          <input type="text" name="address1" value={userInfo.address1} onChange={handleChange} required />
        </div>
        <div>
          <label>Address 2:</label>
          <input type="text" name="address2" value={userInfo.address2} onChange={handleChange} />
        </div>
        <div>
          <label>City:</label>
          <input type="text" name="city" value={userInfo.city} onChange={handleChange} required />
        </div>
        <div>
          <label>State:</label>
          <input type="text" name="state" value={userInfo.state} onChange={handleChange} required />
        </div>
        <div>
          <label>Country:</label>
          <input type="text" name="country" value={userInfo.country} onChange={handleChange} required />
        </div>
        <div>
          <label>Mobile:</label>
          <input type="text" name="mobile" value={userInfo.mobile} onChange={handleChange} required />
        </div>
        <div>
          <label>Pincode:</label>
          <input type="text" name="pincode" value={userInfo.pincode} onChange={handleChange} required />
        </div>
        <div >
    <button style={{  margin : '20px' }} type="submit">Update</button>
  
    <button type="button" onClick={() => navigate(`/userInfo/${userId}`)}>Cancel</button>
</div>

      </form>
    </div>
    </div>
  );
};

export default UpdateUserInfo;
