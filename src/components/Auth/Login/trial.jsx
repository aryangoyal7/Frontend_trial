import React, { useState } from "react";
import Axios from "axios";

const trial = () => {
  const [Mobile_number, setMobile_number] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    Axios.post("http://34.93.237.206:1000/api/users/login", {
      Mobile_number,
      password,
    })
      .then((response) => {
        if (response.data.success) {
          // Redirect to the home page
          window.location.href = "/";
        } else {
          setError(response.data.message);
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <h1 style="color: black; font-size: 20px; text-align: center;">Login</h1>
      <form onSubmit={handleSubmit} style="width: 500px; margin: 0 auto;">
        <input
          type="text"
          placeholder="Mobile_number"
          value={Mobile_number}
          onChange={(event) => setMobile_number(event.target.value)}
          style="width: 250px; margin: 10px 0 10px 10px; border-radius: 5px; border: 1px solid gray;"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          style="width: 250px; margin: 10px 0 10px 10px; border-radius: 5px; border: 1px solid gray;"
        />
        <button type="submit" style="width: 100px; margin: 10px 0 10px 10px; border-radius: 5px; background-color: blue; color: white; cursor: pointer;">Login</button>
        {error && <p style="color: red">{error}</p>}
      </form>
    </div>
  );
};

export default trial;
