import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

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

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`http://localhost:5005/api/bookings/userId=${userId}`);
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
                <strong>Club Name:</strong> {booking.clubName}
              </BookingLabel>
              <BookingLabel>
                <strong>Time:</strong> {booking.time}
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
