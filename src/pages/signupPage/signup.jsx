import React, { useState } from "react";
import Axios from "axios";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phonenumber, setPhonenumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.post("/signup", {
      name,
      username,
      password,
      phonenumber,
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
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
          placeholder="Phone Number"
          value={phonenumber}
          onChange={(e) => setPhonenumber(e.target.value)}
        />
        <input type="submit" value="Signup" />
      </form>
    </div>
  );
};

export default SignupPage;
