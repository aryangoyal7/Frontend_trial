import React, { useState } from 'react';
import axios from 'axios';

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
    axios.post('http://localhost:5005/api/users/register', signupData)
      .then((response) => {
        // Handle the response from the API
        console.log(response.data);
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
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleInputChange}
        />
      </div>
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
      <button type="submit">Signup</button>
    </form>
  );
};

export default SignupForm;
