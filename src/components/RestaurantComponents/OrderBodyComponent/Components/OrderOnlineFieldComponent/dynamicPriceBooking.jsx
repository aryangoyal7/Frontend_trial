import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Axios from "axios";
import NavigationBar from "../../../../Navbars/NavigationBar2/NavigationBar2";
import Footer from "../../../../Footer/Footer";
import css from "./dynamicPriceBooking.module.css"

const ClubPricing = () => {
  const [clubs, setClubs] = useState([]);
  const [load, setLoad] = useState(false);

  async function callData() {
    try {
      const res = await Axios.get("http://localhost:5005/api/pricing/646f4207e907d42c3e10bfe9");
      setClubs(res.data);
    } catch (error) {
      console.log(error);
    }
    await Axios.get("http://localhost:1002/api/bookings/")
      .then((res) => res.json())
      .then((res) => console.log(res))
      .then((response) => setClubs(response.data));
  }
  
  useEffect(() => {
    setLoad(true);
    callData();
    setLoad(false);
  }, []);

  const bookNow = (ClubID, Mobile_number, username, time) => {
    Axios.post("/book-now", {
      ClubID,
      userID, // Include the userID in the POST data
      Mobile_number,
      username,
      time,
    });
  };

  return (
    <>
      <NavigationBar />
      <div className="css.club">
        <ul>
          {clubs.length === 0 ? (
            <h1>Loading...</h1>
          ) : (
            clubs.map((club) => (
              <li key={club.id}>
                <h2>{club.name}</h2>
                <ul>
                  <li>Stag Price: {club.StagPrice}</li>
                  <li>Couple Price: {club.CouplePrice}</li>
                  <li>Lady Price: {club.LadyPrice}</li>
                </ul>
                <button onClick={() => bookNow(club.id, Mobile_number, username, time)}>
                  Book Now
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default ClubPricing;
