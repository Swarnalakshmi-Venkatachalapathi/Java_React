// import React from 'react';
// import { Navigate } from 'react-router-dom';

// // ProtectedRoute component
// const ProtectedRoute = ({ children }) => {
//   const token = localStorage.getItem('token');

//   if (!token) {
//     // If no token, redirect to login
//     toast ("Login to access")
//     return <Navigate to="/" />;

//   }

//   // If token is present, render the children (protected component)
//   return children;
// };

// export default ProtectedRoute;


import React from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import the toastify CSS

// ProtectedRoute component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    // Display the toast notification
    toast.error('Login to access', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    // If no token, redirect to login
    return <Navigate to="/" />;
  }

  // If token is present, render the children (protected component)
  return children;
};

export default ProtectedRoute;
