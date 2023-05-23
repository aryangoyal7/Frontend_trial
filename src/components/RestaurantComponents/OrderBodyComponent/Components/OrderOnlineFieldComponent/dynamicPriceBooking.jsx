import React, { useState, useEffect } from "react";
import Axios from "axios";
import HeroComponent from "../../../HeroComponent/HeroComponent";
import NavigationBar from "../../../../Navbars/NavigationBar2/NavigationBar2";
import OrderTitleComponent from "../../../OrderTitleComponent/OrderTitleComponent";
import Footer from "../../../../Footer/Footer";




const ClubPricing = () => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:1002/api/bookings/").then((response) => {
      setClubs(response.data);
    });
  }, []);

  const bookNow = (clubId, phoneNumber, username, time) => {
    Axios.post("/book-now", {
      clubId,
      phoneNumber,
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
        {clubs.map((club) => (
          <li key={club.id}>
            <h2>{club.name}</h2>
            <ul>
              <li>Stag Price: {club.stagPrice}</li>
              <li>Couple Price: {club.couplePrice}</li>
              <li>Lady Price: {club.ladyPrice}</li>
            </ul>
            <button onClick={() => bookNow(club.id, phoneNumber, username, time)}>Book Now</button>
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


