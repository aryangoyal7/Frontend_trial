import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ClubBookingOptions = () => {
  const [pricing, setPricing] = useState(null);

  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const response = await axios.get('/api/pricing');
        setPricing(response.data);
      } catch (error) {
        console.error('Error fetching pricing:', error);
      }
    };

    fetchPricing();
  }, []);

  const handleBooking = async (option) => {
    try {
      // Replace with your booking endpoint
      await axios.post('/api/bookings', { option });
      alert('Booking successful!');
    } catch (error) {
      console.error('Error booking:', error);
      alert('Booking failed!');
    }
  };

  return (
    <div>
      <h2>Club Booking Options</h2>
      {pricing ? (
        <ul>
          <li>
            <div>
              <strong>Stag Price:</strong> {pricing.StagPrice}
            </div>
            <button onClick={() => handleBooking('Stag')}>Book Now</button>
          </li>
          <li>
            <div>
              <strong>Couple Price:</strong> {pricing.CouplePrice}
            </div>
            <button onClick={() => handleBooking('Couple')}>Book Now</button>
          </li>
          <li>
            <div>
              <strong>Lady Price:</strong> {pricing.LadyPrice}
            </div>
            <button onClick={() => handleBooking('Lady')}>Book Now</button>
          </li>
        </ul>
      ) : (
        <p>Loading pricing data...</p>
      )}
    </div>
  );
};

export default ClubBookingOptions;
