import React, { useState } from "react";
import Axios from "axios";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [Mobile_number, setMobile_number] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.post("http://localhost:1000/api/users/register", {
      username,
      password,
      Mobile_number,
    })
      .then((res) => {
        if (res.data.success) {
          // Redirect to the home page
          window.location.href = "/";
        } else {
          // Display an error message
          alert("Invalid username or password");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
      
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Mobile_number"
          value={Mobile_number}
          onChange={(e) => setMobile_number(e.target.value)}
        />
        <input type="submit" value="Signup" />
      </form>
    </div>
  );
};

export default SignupPage;
