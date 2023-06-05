import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import jwt_decode from 'jwt-decode';

import Footer from '../Footer/Footer';
import NavigationBar from '../Navbars/NavigationBar2/NavigationBar2';

const Container = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
 
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const BookingLabel = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const BookingListContainer = styled.div`
  margin-top: 20px;
  flex-grow: 1;
`;

const NoBookingsText = styled.p`
  text-align: center;
  margin-top: 20px;
`;

const BookingList = ({ userId }) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        // Get the access token from the cookie
        const accessToken = document.cookie
          .split('; ')
          .find((row) => row.startsWith('access_token'))
          .split('=')[1];

        const decodedToken = jwt_decode(accessToken);
        const userID = decodedToken.userID;

        const response = await axios.get(
          `http://localhost:5005/api/bookings/${userID}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, [userId]);

  return (
    <Container>
      <NavigationBar />
      <Title>Your Bookings</Title>
      <BookingListContainer>
        {bookings.length === 0 ? (
          <NoBookingsText>No bookings found.</NoBookingsText>
        ) : (
          <ul>
            {bookings.map((booking) => (
              <BookingItem key={booking.id}>
                <BookingLabel>
                  <strong>Club Name:</strong> {booking.username}
                </BookingLabel>
                <BookingLabel>
                  <strong>Mobile Number:</strong> {booking.Mobile_number}
                </BookingLabel>
                <BookingLabel>
                  <strong>Price:</strong> {booking.price}
                </BookingLabel>
              </BookingItem>
            ))}
          </ul>
        )}
      </BookingListContainer>
      <Footer />
    </Container>
  );
};

export default BookingList;
