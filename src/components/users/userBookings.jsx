import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookingList = ({ userId }) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`/api/bookings?userId=${userId}`);
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, [userId]);

  return (
    <div>
      <h2>Your Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <ul>
          {bookings.map((booking) => (
            <li key={booking.id}>
              <div>
                <strong>Club Name:</strong> {booking.clubName}
              </div>
              <div>
                <strong>Time:</strong> {booking.time}
              </div>
              <div>
                <strong>Price:</strong> {booking.price}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookingList;
