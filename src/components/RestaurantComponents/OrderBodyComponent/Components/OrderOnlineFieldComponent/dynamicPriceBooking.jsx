import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Axios from "axios";
import HeroComponent from "../../../HeroComponent/HeroComponent";
import NavigationBar from "../../../../Navbars/NavigationBar2/NavigationBar2";
import OrderTitleComponent from "../../../OrderTitleComponent/OrderTitleComponent";
import Footer from "../../../../Footer/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ClubPricing = () => {
  const [clubs, setClubs] = useState([]);
  const [load, setLoad] = useState(false);
  const { userId } = useParams(); // Assuming you are extracting the userId from the URL params

  async function callData() {
    try {
      const res = await Axios.get("http://localhost:5005/api/pricing/646f4207e907d42c3e10bfe9");
      setClubs(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setLoad(true);
    callData();
    setLoad(false);
  }, []);

  const bookNow = (ClubID, Mobile_number, username, time) => {
    Axios.post("/book-now", {
      ClubID,
      userId, // Include the userId in the POST data
      Mobile_number,
      username,
      time,
    })
      .then((response) => {
        // Handle the success response
        toast.success("Booking successful!");
      })
      .catch((error) => {
        // Handle the error
        toast.error("Booking failed!");
      });
  };

  return (
    <div>
      <NavigationBar />
      <HeroComponent />
      <h1>Club's Name</h1>
      {load ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {clubs.map((club) => (
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
          ))}
        </ul>
      )}
      <Footer />
    </div>
  );
};

export default ClubPricing;



// problem - prices not rendering even on valid api calls

// problem 2 - make a button or a drop down menu to send booking against the 3 option
// it should include clubID, userID, mobile number of loggen in user and time

// pop up displaying booking confirmed - after the booking is made 

