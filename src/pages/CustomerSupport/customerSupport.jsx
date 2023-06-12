import React, { useState } from "react";
import { TextField, List, ListItem, ListItemText, ListItemIcon, Typography } from "@material-ui/core";

const CustomerSupport = () => {
  const [query, setQuery] = useState("");
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const handleSubmit = (event) => {
      event.preventDefault();
        // Create an object with the query, name, and mobileNumber
    const formData = {
        query: query,
        name: name,
        mobileNumber: mobileNumber
      };
  
      // Send the form data to the server
      axios.post('YOUR_API_ENDPOINT_URL', formData)
        .then((response) => {
          console.log("API response:", response.data);
          // Add your desired logic here for successful form submission
        })
        .catch((error) => {
          console.error("API error:", error);
          // Add your desired logic here for failed form submission
        });
  
      // Clear the input fields
      setQuery('');
      setName('');
      setMobileNumber('');

    // Send the query, name, and mobile number to the server
  };

  return (
    <div>
      <h2>Customer Support</h2>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Query"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
              />
              <div></div>
        <TextField
          label="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
              />
                            <div></div>

        <TextField
          label="Mobile Number"
          value={mobileNumber}
          onChange={(event) => setMobileNumber(event.target.value)}
              />
                            <div><h1>    </h1></div>

        <button type="submit">Submit</button>
      </form>

      <h2>Frequently Asked Questions </h2>

      <List>
        <ListItem>
          <ListItemIcon>
            <i>question</i>
          </ListItemIcon>
          <ListItemText primary="What is the customer support phone number?" />
              </ListItem>
              <p>answer 1</p>
        <ListItem>
          <ListItemIcon>
            <i>question</i>
          </ListItemIcon>
          <ListItemText primary="How do I submit a support ticket?" />
              </ListItem>
              <p>answer 1</p>

        <ListItem>
          <ListItemIcon>
            <i>question</i>
          </ListItemIcon>
          <ListItemText primary="What are the hours of operation for customer support?" />
              </ListItem>
              <p>answer 1</p>

      </List>

      <h3>Contact Information</h3>

      <Typography variant="h4">
        Email: <a href="mailto:thirtymlbombay@gmail.com">thirtymlbombay@gmail.com</a>
      </Typography>
      <Typography variant="h4">
        Phone Number: 8427728042
      </Typography>
    </div>
  );
};

export default CustomerSupport;