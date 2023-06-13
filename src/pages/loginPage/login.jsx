import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [Mobile_number, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');

  

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
    axios.post('http://localhost:5005/api/users/login', loginData, { withCredentials: true })
      .then((response) => {
        // console.log("LOGIN DATA:", loginData);
        // console.log("api response here")
        // Handle the response from the API
        // console.log(response.data.access_token);
        document.cookie = response.data.access_token;
        console.log("login successful")
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
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="Mobile_number">Mobile Number:</label>
        <input
          type="text"
          id="Mobile_number"
          name="Mobile_number"
          value={Mobile_number}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Login</button>
      

    </form>
  );
};

export default LoginForm;
