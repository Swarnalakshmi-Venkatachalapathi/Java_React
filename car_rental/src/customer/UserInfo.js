


import React, { useEffect, useState } from 'react';
import { useParams ,useNavigate,Link} from 'react-router-dom';
import styles from './UserInfo.module.css';
import styles1 from './CustomerMenu1.module.css'; // CSS module for AppBar
import { Dropdown } from 'semantic-ui-react';

const UserInfo = () => {
  const { userId } = useParams();
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:8080/api/customer/custdetails/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          const data = await response.json();
          setUserInfo(data);
        } else {
          console.error('Failed to fetch user info');
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();
  }, [userId]);

  if (!userInfo) return <div className={styles.loadingMessage}>Loading...</div>;

  const { user, address1, address2, city, state, country, mobile, pincode } = userInfo;


  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the JWT token
    localStorage.removeItem('userId'); // Clear the user ID as well
    navigate('/'); // Redirect to the login page
  };

  const handleUserInfo = () => {
    navigate(`/userInfo/${userId}`);
  };

  const handleEdit = () => {
    navigate(`/update-user/${userId}`); // Navigate to edit page
  };

  const handleClose = () => {
    navigate('/customer-menu'); // Navigate to customer menu
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
    <div className={styles.userInfoContainer}>
    
      <h2 className={styles.userInfoHeader}>User Information</h2>
      <div className={styles.userInfoDetail}>
        <span className={styles.userInfoLabel}>Name:</span>
        <span className={styles.userInfoValue}>{user.name}</span>
      </div>
      <div className={styles.userInfoDetail}>
        <span className={styles.userInfoLabel}>Email:</span>
        <span className={styles.userInfoValue}>{user.email}</span>
      </div>
      <div className={styles.userInfoDetail}>
        <span className={styles.userInfoLabel}>Address 1:</span>
        <span className={styles.userInfoValue}>{address1}</span>
      </div>
      <div className={styles.userInfoDetail}>
        <span className={styles.userInfoLabel}>Address 2:</span>
        <span className={styles.userInfoValue}>{address2}</span>
      </div>
      <div className={styles.userInfoDetail}>
        <span className={styles.userInfoLabel}>City:</span>
        <span className={styles.userInfoValue}>{city}</span>
      </div>
      <div className={styles.userInfoDetail}>
        <span className={styles.userInfoLabel}>State:</span>
        <span className={styles.userInfoValue}>{state}</span>
      </div>
      <div className={styles.userInfoDetail}>
        <span className={styles.userInfoLabel}>Country:</span>
        <span className={styles.userInfoValue}>{country}</span>
      </div>
      <div className={styles.userInfoDetail}>
        <span className={styles.userInfoLabel}>Mobile:</span>
        <span className={styles.userInfoValue}>{mobile}</span>
      </div>
      <div className={styles.userInfoDetail}>
        <span className={styles.userInfoLabel}>Pincode:</span>
        <span className={styles.userInfoValue}>{pincode}</span>
      </div>
      <button onClick={handleEdit} className={styles.editButton}>Edit</button>
               <button onClick={handleClose} className={styles.closeButton}>Close</button>
    </div>
    </div>
  );
};

export default UserInfo;









// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import styles from './UserInfo.module.css'; // CSS module for styling
// import styles1 from './CustomerMenu1.module.css'; // CSS module for AppBar
// import { Dropdown } from 'semantic-ui-react';

// const UserInfo = () => {
//   const { userId } = useParams();
//   const [userInfo, setUserInfo] = useState({});
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [error, setError] = useState(null);
//   const [formData, setFormData] = useState({
//     address1: '',
//     address2: '',
//     city: '',
//     state: '',
//     country: '',
//     mobile: '',
//     pincode: '',
//   });

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
//         setUserInfo(data);
//         setFormData(data); // Set formData to fetched data
//       } else {
//         console.error('Failed to fetch user info');
//       }
//     };

//     fetchUserInfo();
//   }, [userId]);

//   const handleEditClick = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevInfo) => ({
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
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         const updatedInfo = await response.json();
//         setUserInfo(updatedInfo); // Update the user info with the response
//         closeModal(); // Close the modal
//       } else {
//         const errorMessage = await response.text();
//         setError(errorMessage);
//       }
//     } catch (error) {
//       console.error('Error updating user info:', error);
//       setError('An error occurred while updating user information.');
//     }
//   };

//   const { user, address1, address2, city, state, country, mobile, pincode } = userInfo;

//   return (
//     <div>
//       <div className={styles1.menuContainer}>
//         <div className={styles1.websiteName}>Car Rental Service</div>
//         <nav className={styles1.nav}>
//           <Link to="/customer-menu" className={styles1.navLink}>Home</Link>
//           <Link to={`/customer/bookings/${userId}`} className={styles1.navLink}>Bookings</Link>
//           <Link to="/customer/cars" className={styles1.navLink}>Cars</Link>
//           <Link to="/search/car/cust" className={styles1.navLink}>Search</Link>
//           <Dropdown icon="user" pointing="top right" className={styles1.userIcon}>
//             <Dropdown.Menu>
//               <Dropdown.Item text="User Info" onClick={() => {}}/>
//               <Dropdown.Item text="Logout" onClick={() => { /* Handle logout */ }} />
//             </Dropdown.Menu>
//           </Dropdown>
//         </nav>
//       </div>

//       <div className={styles.userInfoContainer}>
//         <h2 className={styles.userInfoHeader}>User Information</h2>
//         <div className={styles.userInfoDetail}>
//           <span className={styles.userInfoLabel}>Name:</span>
//           <span className={styles.userInfoValue}>{user?.name}</span>
//         </div>
//         <div className={styles.userInfoDetail}>
//           <span className={styles.userInfoLabel}>Email:</span>
//           <span className={styles.userInfoValue}>{user?.email}</span>
//         </div>
//         <div className={styles.userInfoDetail}>
//           <span className={styles.userInfoLabel}>Address 1:</span>
//           <span className={styles.userInfoValue}>{address1}</span>
//         </div>
//         <div className={styles.userInfoDetail}>
//           <span className={styles.userInfoLabel}>Address 2:</span>
//           <span className={styles.userInfoValue}>{address2}</span>
//         </div>
//         <div className={styles.userInfoDetail}>
//           <span className={styles.userInfoLabel}>City:</span>
//           <span className={styles.userInfoValue}>{city}</span>
//         </div>
//         <div className={styles.userInfoDetail}>
//           <span className={styles.userInfoLabel}>State:</span>
//           <span className={styles.userInfoValue}>{state}</span>
//         </div>
//         <div className={styles.userInfoDetail}>
//           <span className={styles.userInfoLabel}>Country:</span>
//           <span className={styles.userInfoValue}>{country}</span>
//         </div>
//         <div className={styles.userInfoDetail}>
//           <span className={styles.userInfoLabel}>Mobile:</span>
//           <span className={styles.userInfoValue}>{mobile}</span>
//         </div>
//         <div className={styles.userInfoDetail}>
//           <span className={styles.userInfoLabel}>Pincode:</span>
//           <span className={styles.userInfoValue}>{pincode}</span>
//         </div>
//         <button onClick={handleEditClick} className={styles.editButton}>Edit</button>
//       </div>

//       {isModalOpen && (
//         <div className={styles.modalOverlay}>
//           <div className={styles.modalContent}>
//             <h2>Update User Information</h2>
//             {error && <div style={{ color: 'red' }}>{error}</div>}
//             <form onSubmit={handleSubmit}>
//               <div>
//                 <label>Address 1:</label>
//                 <input
//                   type="text"
//                   name="address1"
//                   value={formData.address1}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div>
//                 <label>Address 2:</label>
//                 <input
//                   type="text"
//                   name="address2"
//                   value={formData.address2}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div>
//                 <label>City:</label>
//                 <input
//                   type="text"
//                   name="city"
//                   value={formData.city}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div>
//                 <label>State:</label>
//                 <input
//                   type="text"
//                   name="state"
//                   value={formData.state}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div>
//                 <label>Country:</label>
//                 <input
//                   type="text"
//                   name="country"
//                   value={formData.country}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div>
//                 <label>Mobile:</label>
//                 <input
//                   type="text"
//                   name="mobile"
//                   value={formData.mobile}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div>
//                 <label>Pincode:</label>
//                 <input
//                   type="text"
//                   name="pincode"
//                   value={formData.pincode}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <button type="submit">Update</button>
//               <button type="button" onClick={closeModal}>Cancel</button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserInfo;














// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate, Link } from 'react-router-dom';
// import styles from './UserInfo.module.css';
// import styles1 from './CustomerMenu1.module.css'; // CSS module for AppBar
// import { Dropdown } from 'semantic-ui-react';

// const UserInfo = () => {
//   const { userId } = useParams();
//   const [userInfo, setUserInfo] = useState({
//     user: { name: '', email: '' },
//     address1: '',
//     address2: '',
//     city: '',
//     state: '',
//     country: '',
//     mobile: '',
//     pincode: '',
//   });
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUserInfo = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await fetch(`http://localhost:8080/api/customer/custdetails/${userId}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         });
//         if (response.ok) {
//           const data = await response.json();
//           setUserInfo(data);

//           // Alert user if data is incomplete or empty
//           if (!data || Object.keys(data).length === 0) {
//             alert("Your profile is incomplete. Please update your details.");
//           }
//         } else {
//           console.error('Failed to fetch user info');
//         }
//       } catch (error) {
//         console.error('Error fetching user info:', error);
//       }
//     };

//     fetchUserInfo();
//   }, [userId]);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('userId');
//     navigate('/');
//   };

//   const handleUserInfo = () => {
//     navigate(`/userInfo/${userId}`);
//   };

//   const handleEdit = () => {
//     navigate(`/update-user/${userId}`);
//   };

//   const handleClose = () => {
//     navigate('/customer-menu');
//   };

//   return (
//     <div>
//       <div className={styles1.menuContainer}>
//         <div className={styles1.websiteName}>Car Rental Service</div>
//         <nav className={styles1.nav}>
//           <Link to="/customer-menu" className={styles1.navLink}>
//             Home
//           </Link>
//           <Link to={`/customer/bookings/${userId}`} className={styles1.navLink}>
//             Bookings
//           </Link>
//           <Link to="/customer/cars" className={styles1.navLink}>
//             Cars
//           </Link>
//           <Link to="/search/car/cust" className={styles1.navLink}>
//             Search
//           </Link>
//           <Dropdown icon="user" pointing="top right" className={styles1.userIcon}>
//             <Dropdown.Menu>
//               <Dropdown.Item text="User Info" onClick={handleUserInfo} />
//               <Dropdown.Item text="Logout" onClick={handleLogout} />
//             </Dropdown.Menu>
//           </Dropdown>
//         </nav>
//       </div>
//       <div className={styles.userInfoContainer}>
//         <h2 className={styles.userInfoHeader}>User Information</h2>
//         <div className={styles.userInfoDetail}>
//           <span className={styles.userInfoLabel}>Name:</span>
//           <span className={styles.userInfoValue}>{userInfo.user?.name || "N/A"}</span>
//         </div>
//         <div className={styles.userInfoDetail}>
//           <span className={styles.userInfoLabel}>Email:</span>
//           <span className={styles.userInfoValue}>{userInfo.user?.email || "N/A"}</span>
//         </div>
//         <div className={styles.userInfoDetail}>
//           <span className={styles.userInfoLabel}>Address 1:</span>
//           <span className={styles.userInfoValue}>{userInfo.address1 || "N/A"}</span>
//         </div>
//         <div className={styles.userInfoDetail}>
//           <span className={styles.userInfoLabel}>Address 2:</span>
//           <span className={styles.userInfoValue}>{userInfo.address2 || "N/A"}</span>
//         </div>
//         <div className={styles.userInfoDetail}>
//           <span className={styles.userInfoLabel}>City:</span>
//           <span className={styles.userInfoValue}>{userInfo.city || "N/A"}</span>
//         </div>
//         <div className={styles.userInfoDetail}>
//           <span className={styles.userInfoLabel}>State:</span>
//           <span className={styles.userInfoValue}>{userInfo.state || "N/A"}</span>
//         </div>
//         <div className={styles.userInfoDetail}>
//           <span className={styles.userInfoLabel}>Country:</span>
//           <span className={styles.userInfoValue}>{userInfo.country || "N/A"}</span>
//         </div>
//         <div className={styles.userInfoDetail}>
//           <span className={styles.userInfoLabel}>Mobile:</span>
//           <span className={styles.userInfoValue}>{userInfo.mobile || "N/A"}</span>
//         </div>
//         <div className={styles.userInfoDetail}>
//           <span className={styles.userInfoLabel}>Pincode:</span>
//           <span className={styles.userInfoValue}>{userInfo.pincode || "N/A"}</span>
//         </div>
//         <button onClick={handleEdit} className={styles.editButton}>Edit</button>
//         <button onClick={handleClose} className={styles.closeButton}>Close</button>
//       </div>
//     </div>
//   );
// };

// export default UserInfo;
