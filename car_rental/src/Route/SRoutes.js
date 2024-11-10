import React from "react";
import { Route, Routes } from "react-router-dom";
import Menu from "../admin/Menu";
import Dashboard from "../admin/Dashboard";
import Login from "../home/Login";
import PostCar from "../admin/PostCar"; 
import Bookings from "../admin/Bookings";
import SearchCar from "../admin/SearchCar";
import Home from "../home/Home";
import Signup from "../home/Signup";
import CustomerMenu from "../customer/CustomerMenu";
import AllCars from "../customer/AllCars";
import MyBookings from "../customer/MyBookings";
import CustomerSearchCar from "../customer/CustomerSearchCar";
import BookCar from "../customer/BookCar";
import CarDetails from "../customer/CarDetails";
import CarDetailsHome from "../home/CarDetailsHome";
import ProtectedRoute from "./ProtectedRoute";
import UserInfo from "../customer/UserInfo";
import UpdateUserInfo from "../customer/UpdateUserInfo";
import Users from "../admin/Users";

const SRoutes = () => {
  return (
    <Routes>
       <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/customer-menu" element={<CustomerMenu />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/post-car" element={<PostCar />} /> {/* New route for PostCar */}
   
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/search" element={<SearchCar />} /> 

      <Route path="/car-details/:carId" element={<CarDetails />}/>
      <Route path="/car-detailsHome/:carId" element={<ProtectedRoute><CarDetailsHome /></ProtectedRoute>}/>

      <Route path="/customer/cars" element={<AllCars />} /> 
      <Route path="/Customer/bookings/:id" element={<MyBookings />} />
      <Route path="/search/car/cust" element={<CustomerSearchCar />} /> 
      <Route path="/book-car/:carId" element={<ProtectedRoute>
        <BookCar /> </ProtectedRoute>} /> 
        <Route path="/userInfo/:userId" element={<UserInfo />} />
        <Route path="/users" element={<Users/>} />
        <Route path="/update-user/:userId" element={<UpdateUserInfo />} />

    </Routes>
  );
}

export default SRoutes;
