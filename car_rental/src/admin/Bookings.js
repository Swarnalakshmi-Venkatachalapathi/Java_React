








import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './bookings.css'; // Import CSS specific to this component

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isSpinning, setIsSpinning] = useState(false);
  const navigate = useNavigate();

  // Fetch bookings on component load
  useEffect(() => {
    getBookings();
  }, []);

  const getBookings = async () => {
    setIsSpinning(true);
    const token = localStorage.getItem('token'); // Get JWT token from localStorage

    try {
      const response = await axios.get('http://localhost:8080/api/admin/car/bookings', {
        headers: {
          Authorization: `Bearer ${token}`, // Add Authorization header
        },
      });
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings', error);
    } finally {
      setIsSpinning(false);
    }
  };

  const changeBookingStatus = async (bookingId, status) => {
    const token = localStorage.getItem('token'); // Get JWT token from localStorage

    try {
      await axios.get(`http://localhost:8080/api/admin/car/booking/${bookingId}/${status}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Add Authorization header
        },
      });
      getBookings(); // Refresh bookings after status change
    } catch (error) {
      console.error('Error changing booking status', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the JWT token
    localStorage.removeItem('userId'); // Clear the user ID as well
    navigate('/'); // Redirect to the login page
  };

  return (
    <div className="bookings-page">
      {/* Menu Header */}
      <div className="menu-page">
        <div className="menu-container">
          <div className="website-name">Car Rental Service</div>
          <nav>
            <Link to="/menu">Home</Link> 
            <Link to="/post-car">Car</Link>
            <Link to="/bookings">Bookings</Link> 
            <Link to="/search">Search</Link>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          
          </nav>
        </div>
      

      {/* Bookings Table */}
      <div className="bookings-container">
        {isSpinning ? <div className="spinner">Loading...</div> : null}
        <table>
          <thead>
            <tr>
              <th>From</th>
              <th>To</th>
              <th>Days</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.fromDate} PM</td>
                <td>{booking.toDate} PM</td>
                <td>{booking.days}</td>
                <td>${booking.price}</td>
                <td>{booking.bookCarStatus}</td>
                <td>
                  {booking.bookCarStatus === 'PENDING' && (
                    <>
                      <button onClick={() => changeBookingStatus(booking.id, 'Approve')}className="approve-btn">
                        Approve
                      </button>
                      <div>
                        
                      </div>
                      <button onClick={() => changeBookingStatus(booking.id, 'Reject')} className="reject-btn">
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default Bookings;

