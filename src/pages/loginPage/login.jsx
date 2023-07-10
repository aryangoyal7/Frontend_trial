import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [Mobile_number, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [username, setusername] = useState('');
  const navigate=useNavigate();
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'Mobile_number') {
      setMobileNumber(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Create an object with the login data
    const loginData = {
      Mobile_number,
      password
    };

    // Send the login data to the API endpoint
    axios.post('http://34.125.27.77/api/api/users/login', loginData, { withCredentials: true })
      .then((response) => {
        // console.log("LOGIN DATA:", loginData);
        // console.log("api response here")
        // Handle the response from the API
        // console.log(response.data.access_token);
        document.cookie = response.data.access_token;
        console.log("login successful", response.data.username);
        setusername(response.data.username);
        toast("Login Successfull!");
        // Add your desired logic here for successful login
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
        // Add your desired logic here for failed login
      });

    // Clear the input fields
    setMobileNumber('');
    setPassword('');
  };

  return (
    <>
    {!username ? (
    <form onSubmit={handleFormSubmit}>
      <div style={{ margin: "15px" }}>
        {/* <label htmlFor="Mobile_number">Mobile Number:</label> */}
        {/* <input
          type="text"
          id="Mobile_number"
          name="Mobile_number"
          value={Mobile_number}
          onChange={handleInputChange}
        /> */}
        <TextField onChange={handleInputChange} type="text" name="Mobile_number" id="Mobile_number" value={Mobile_number} label="Mobile Number" variant="outlined" />
      </div>
      <div style={{ margin: "15px" }}>
        {/* <label htmlFor="password">Password:</label> */}
        {/* <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        /> */}
        <TextField id="password" name="password" value={password} onChange={handleInputChange} label="Password" variant="outlined" />
      </div>
      <div style={{ margin: "15px" }}>
        <Button variant="contained" type="Submit">Login</Button>
      </div>
      {/* <button type="submit">Login</button> */}
    </form>
  ):(<>
  <div>
    <div style={{ margin: "15px" }}>
      Welcome <b>{username}!</b> <br />
    </div>
    <div style={{ margin: "15px" }}>
      <Button variant="contained" onClick={()=>navigate('/')}>Home</Button>
    </div>
    <ToastContainer />
  </div>
  </>)}
    </>
  )
};

export default LoginForm;
