import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import jwt_decode from 'jwt-decode';


const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
`;

const BookingItem = styled.li`
  background-color: #f9f9f9;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
`;

const BookingLabel = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const BookingList = ({ userId }) => {
  const [bookings, setBookings] = useState([]);

  const accessToken = document.cookie
  console.log(accessToken)
  
 

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        // Get the access token from the cookie
        const accessToken = document.cookie
          .split('; ')
          .find((row) => row.startsWith('access_token'))
          .split('=')[1];
          console.log(accessToken)
        
          const decodedToken = jwt_decode(accessToken);
        const userID = decodedToken.userID;
        console.log(userID)

        const response = await axios.get(`http://localhost:5005/api/bookings/6467f64e21567db98155f780`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, [userId]);


  return (
    <Container>
      <Title>Your Bookings</Title>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <ul>
          {bookings.map((booking) => (
            <BookingItem key={booking.id}>
              <BookingLabel>
                <strong>Club Name:</strong> {booking.username}
              </BookingLabel>
              <BookingLabel>
                <strong>Mobile_number:</strong> {booking.Mobile_number}
              </BookingLabel>
              <BookingLabel>
                <strong>Price:</strong> {booking.price}
              </BookingLabel>
            </BookingItem>
          ))}
        </ul>
      )}
    </Container>
  );
};

export default BookingList;


// extract userID from access token and use in the url of api call 

// extract bookings from it and render it

