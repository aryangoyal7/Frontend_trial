import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [Mobile_number, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'Mobile_number') {
      setMobileNumber(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Create an object with the signup data
    const signupData = {
      username,
      Mobile_number,
      password
    };

    // Send the signup data to the API endpoint
    axios.post('http://34.100.246.170:5005/api/users/register', signupData)
      .then((response) => {
        // Handle the response from the API
        console.log(response.data);
        toast("Sign Up Successfull!");
        // Add your desired logic here for successful signup
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
        // Add your desired logic here for failed signup
      });

    // Clear the input fields
    setUsername('');
    setMobileNumber('');
    setPassword('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div style={{ margin: "15px" }} >
        {/* <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleInputChange}
        /> */}
        <TextField onChange={handleInputChange} type="text" name="username" id="username" value={username} label="Username" variant="outlined" />
      </div>
      <div style={{ margin: "15px" }} >
        {/* <label htmlFor="Mobile_number">Mobile Number:</label>
        <input
          type="text"
          id="Mobile_number"
          name="Mobile_number"
          value={Mobile_number}
          onChange={handleInputChange}
        /> */}
        <TextField onChange={handleInputChange} type="text" name="Mobile_number" id="Mobile_number" value={Mobile_number} label="Mobile Number" variant="outlined" />
      </div>
      <div style={{ margin: "15px" }} >
        {/* <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        /> */}
        <TextField id="password" name="password" value={password} onChange={handleInputChange} label="Password" variant="outlined" />
      </div>
      <ToastContainer />
      <div style={{ margin: "15px" }}>
        <Button variant="contained" type="Submit">Sign Up</Button>
      </div>
    </form>
  );
};

export default SignupForm;
