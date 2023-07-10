import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import jwt_decode from 'jwt-decode';

import Footer from '../Footer/Footer';
import NavigationBar from '../Navbars/NavigationBar2/NavigationBar2';
var token = document.cookie;
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
        var accessToken = document.cookie;

        const decodedToken = jwt_decode(accessToken);
        const userID = decodedToken.user.id;
        console.log("USER ID: ", decodedToken.user.id);
        if(document.cookie[0] === "c"){
       //   console.log("AREY IDHAR CHAL GAYA")
         accessToken = document.cookie.split(";")[1];
       //   console.log("idhar ka token",token)
        }
        if(!accessToken){
          accessToken = localStorage.getItem("access_token");
        }
        const response = await axios.get(
          `http://34.100.246.170/api/bookings/${userID}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        setBookings(response.data);
        console.log(response.data);
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
                  <strong>Booking Type:</strong> {booking.bookingType}
                </BookingLabel>
                <BookingLabel>
                  <strong>Price:</strong> {booking.price}
                </BookingLabel>
                <BookingLabel>
                  <strong>Time:</strong> {booking.createdAt}
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
