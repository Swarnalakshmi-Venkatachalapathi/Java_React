// PostCar.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios
import './PostCar.css'; // Import your custom CSS for styling
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";

const PostCar = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    brand: '',
    name: '',
    type: '',
    transmission: '',
    color: '',
    year: '',
    price: '',
    description: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const listOfBrands = ['Toyota', 'Honda', 'BMW', 'Mercedes', 'Audi', 'Lexus'];
  const listOfTypes = ['Sports Car', 'Diesel', 'Crossover', 'Luxury Car'];
  const listOfColors = ['Red', 'Blue', 'Brown', 'Green'];
  const listOfTransmissions = ['Manual', 'Automatic'];

  const onFileSelected = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    previewImage(file);
  };

  const previewImage = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.brand) newErrors.brand = "Brand is required";
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.type) newErrors.type = "Type is required";
    if (!formData.transmission) newErrors.transmission = "Transmission is required";
    if (!formData.color) newErrors.color = "Color is required";
    if (!formData.year) newErrors.year = "Year is required";
    if (!formData.price) newErrors.price = "Price is required";
    if (!formData.description) newErrors.description = "Description is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    setIsSpinning(true);
    const token = localStorage.getItem('token');
    const postData = new FormData();
    postData.append('image', selectedFile);
    Object.keys(formData).forEach(key => postData.append(key, formData[key]));

    try {
      await axios.post('http://localhost:8080/api/admin/car', postData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      toast('Car added successfully');
      navigate('/menu');
    } catch (error) {
      toast('Error posting car');
      console.error('There was an error adding the car!', error);
    } finally {
      setIsSpinning(false);
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
    <div>
      {isSpinning && <div className="spinner">Working...</div>} 
      <div className="flex flex-col items-start"> {/* Changed items-center to items-start */}
        <h1 className="pc">Post Car</h1>
        <form onSubmit={onSubmit} className="form-container"> {/* Added class for styling */}
          <div className="pb-6">
            <div className="profile-badge">
              <label htmlFor="upload_profile_image" className="upload-label" style={{ display: selectedFile ? 'block' : 'none' }}>
                <img className="profile" src={imagePreview} alt="profile" />
              </label>
              <input type="file" id="upload_profile_image" onChange={onFileSelected} accept="image/*" />
            </div>
          </div>

          {/* Input fields */}
          <div>
            <select name="brand" value={formData.brand} onChange={handleInputChange}>
              <option value="" disabled>Select a Brand</option>
              {listOfBrands.map(brand => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
            {errors.brand && <p className="errorMessage">{errors.brand}</p>}
          </div>

          <div>
            <input name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} />
            {errors.name && <p className="errorMessage">{errors.name}</p>}
          </div>

          <div>
            <select name="type" value={formData.type} onChange={handleInputChange}>
              <option value="" disabled>Select a Type</option>
              {listOfTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            {errors.type && <p className="errorMessage">{errors.type}</p>}
          </div>

          <div>
            <select name="transmission" value={formData.transmission} onChange={handleInputChange}>
              <option value="" disabled>Select Transmission</option>
              {listOfTransmissions.map(transmission => (
                <option key={transmission} value={transmission}>{transmission}</option>
              ))}
            </select>
            {errors.transmission && <p className="errorMessage">{errors.transmission}</p>}
          </div>

          <div>
            <select name="color" value={formData.color} onChange={handleInputChange}>
              <option value="" disabled>Select a Color</option>
              {listOfColors.map(color => (
                <option key={color} value={color}>{color}</option>
              ))}
            </select>
            {errors.color && <p className="errorMessage">{errors.color}</p>}
          </div>

          <div>
            <input name="year" type="number" placeholder="Year" value={formData.year} onChange={handleInputChange} />
            {errors.year && <p className="errorMessage">{errors.year}</p>}
          </div>

          <div>
            <input name="price" type="number" placeholder="Price" value={formData.price} onChange={handleInputChange} />
            {errors.price && <p className="errorMessage">{errors.price}</p>}
          </div>

          <div>
            <textarea name="description" placeholder="Description" value={formData.description} onChange={handleInputChange} />
            {errors.description && <p className="errorMessage">{errors.description}</p>}
          </div>
<div></div>
          <button type="submit" className="login-form-button login-form-margin">
            Post Car
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default PostCar;
