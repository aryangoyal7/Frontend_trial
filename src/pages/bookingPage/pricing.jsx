import React, { useState } from "react";
import Axios from "axios";

const CoverChargeBookingPage = () => {
  const [coverCharges, setCoverCharges] = useState([]);
  const [coverChargePrices, setCoverChargePrices] = useState([]);
  const [bookingInfo, setBookingInfo] = useState({
    username: "",
    coverChargeId: "",
    checkinDate: "",
    checkoutDate: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.post("/api/bookings", bookingInfo)
      .then((res) => {
        if (res.data.success) {
          // Display a success message
          alert("Booking successful!");
        } else {
          // Display an error message
          alert("Booking failed!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingInfo({
      ...bookingInfo,
      [name]: value,
    });
  };

  const getCoverCharges = () => {
    Axios.get("/cover-charges")
      .then((res) => {
        setCoverCharges(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCoverChargePrices = () => {
    Axios.get("/cover-charge-prices")
      .then((res) => {
        setCoverChargePrices(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCoverCharges();
    getCoverChargePrices();
  }, []);

  return (
    <div>
      <h1>Cover Charge Booking</h1>
      <div>
        <h2>Available Cover Charges</h2>
        <ul>
          {coverCharges.map((coverCharge) => (
            <li key={coverCharge.id}>
              <h3>{coverCharge.name}</h3>
              <p>Price: ${coverChargePrices[coverCharge.id]}</p>
              <button onClick={() => setBookingInfo({ coverChargeId: coverCharge.id })}>Book Now</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Booking Information</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={bookingInfo.username}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Cover Charge ID"
            value={bookingInfo.coverChargeId}
            disabled
          />
          <input
            type="date"
            placeholder="Check-in Date"
            value={bookingInfo.checkinDate}
            onChange={handleChange}
          />
          <input
            type="date"
            placeholder="Check-out Date"
            value={bookingInfo.checkoutDate}
            onChange={handleChange}
          />
          <input type="submit" value="Book Now" />
        </form>
      </div>
    </div>
  );
};

export default CoverChargeBookingPage;
