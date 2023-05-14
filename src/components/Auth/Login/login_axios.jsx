import React, { useState, useEffect } from "react";
import axios from "axios";

const loginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showRegistration, setShowRegistration] = useState(false);

  const handleLogin = async () => {
    const response = await axios.post("/api/login", {
      username,
      password,
    });

    if (response.status === 200) {
      // Redirect to the home page
    } else {
      // Show an error message
    }
  };

  const handleRegistration = async () => {
    const response = await axios.post("/api/register", {
      username,
      password,
    });

    if (response.status === 200) {
      // Hide the registration form
      setShowRegistration(false);
    } else {
      // Show an error message
    }
  };

  useEffect(() => {
    // Get the user's current logged in status
    axios.get("/api/user").then((response) => {
      if (response.data.username) {
        // The user is logged in, so redirect to the home page
      }
    });
  }, []);

  return (
    <div>
      <h1>Login</h1>

      <div>
        <label for="username">Username</label>
        <input type="text" id="username" value={username} onChange={setUsername} />
      </div>

      <div>
        <label for="password">Password</label>
        <input type="password" id="password" value={password} onChange={setPassword} />
      </div>

      <button onClick={handleLogin}>Login</button>

      <div>
        <label>Don't have an account?</label>
        <button onClick={() => setShowRegistration(true)}>Register</button>
      </div>

      {showRegistration && (
        <div>
          <h2>Register</h2>

          <div>
            <label for="name">Name</label>
            <input type="text" id="name" />
          </div>

          <div>
            <label for="username">Username</label>
            <input type="text" id="username" value={username} onChange={setUsername} />
          </div>

          <div>
            <label for="password">Password</label>
            <input type="password" id="password" value={password} onChange={setPassword} />
          </div>

          <button onClick={handleRegistration}>Register</button>
        </div>
      )}
    </div>
  );
};

export default loginComponent;
