import React, { useState, useEffect } from "react";
import Axios from "axios";


const trial = ({ hotelID, username, name, phone }) => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    Axios.get(`/api/hotels/${hotelID}/rooms`).then((response) => {
      setRooms(response.data);
    });
  }, [hotelID]);

  const bookRoom = (roomID) => {
    Axios.post(`/api/bookings`, {
      hotelID,
      roomID,
      username,
      name,
      phone,
    }).then((response) => {
      console.log("Booking successful!");
    });
  };

  return (
    <div>
      <h1>Hotel Room Booking</h1>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            <h2>{room.name}</h2>
            <p>Price: ${room.price}</p>
            <button onClick={() => bookRoom(room.id)}>Book</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default trial;
