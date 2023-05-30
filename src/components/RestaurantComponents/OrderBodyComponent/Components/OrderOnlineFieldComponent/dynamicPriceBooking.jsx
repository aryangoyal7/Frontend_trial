import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import Axios from "axios";
import HeroComponent from "../../../HeroComponent/HeroComponent";
import NavigationBar from "../../../../Navbars/NavigationBar2/NavigationBar2";
import OrderTitleComponent from "../../../OrderTitleComponent/OrderTitleComponent";
import Footer from "../../../../Footer/Footer";





const ClubPricing = () => {
  const [clubs, setClubs] = useState([]);
  const [load, setLoad] = useState(false);
  const { ClubID } = useParams();


  useEffect(() => {
    setLoad(true);
    Axios.get('http://localhost:5005/api/pricing/646f4207e907d42c3e10bfe9').then((response) => {
      setClubs(response.data);
    });
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
    <div>
      
      <NavigationBar/>
      <HeroComponent />
      <h1>Club's Name</h1>
      <ul>
        { load ? (<h1>Loading...</h1>) :
          clubs.map((club) => (
          <li>
            <h2>{club.name}</h2>
            <ul>
              <li>Stag Price: {club.stagPrice}</li>
              <li>Couple Price: {club.couplePrice}</li>
              <li>Lady Price: {club.ladyPrice}</li>
            </ul>
            <button onClick={() => bookNow(club.id, Mobile_number, username, time)}>Book Now</button>
          </li>
        ))}
      </ul>
      <Footer/>
    </div>
  );
};

export default ClubPricing;


// this page can be used for every restraunt added , and clubID can be hardcoded

// edit this and make it similar to restraunt page 