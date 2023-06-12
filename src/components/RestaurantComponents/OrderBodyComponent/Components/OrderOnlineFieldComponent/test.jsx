import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Axios from "axios";
import HeroComponent from "../../../HeroComponent/HeroComponent";
import NavigationBar from "../../../../Navbars/NavigationBar2/NavigationBar2";
import OrderTitleComponent from "../../../OrderTitleComponent/OrderTitleComponent";
import Footer from "../../../../Footer/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { set } from "mongoose";




const ClubPricing = () => {
  const [clubs, setClubs] = useState([]);
  const [load, setLoad] = useState(false);
  // const [ClubID, setClubID] = u seState("");
  // const [clubName, setClubName] = useState("");
  // const [UserID, setUserID] = useState("");
  // const [username, setUsername] = useState("");
  // const [Mobile_number, setMobile_number] = useState("");
  // const [price, setPrice] = useState("");
  // const { userId } = useParams(); // Assuming you are extracting the userId from the URL params
  const navigate = useNavigate();
  async function callData() {
    try {
      const res = await Axios.get("http://localhost:5005/api/pricing/646f4207e907d42c3e10bfe9");
      setClubs(res.data);
    } catch (error) {
      console.log(error);
    }
    // await Axios.get("http://localhost:1002/api/bookings/")
    //   .then((res) => res.json())
    //   .then((res) => console.log(res))
    //   .then((response) => setClubs(response.data));
  }

  useEffect(() => {
    setLoad(true);
    callData();
    setLoad(false);
  }, []);
  
  
    // const handleOnSubmit = async (e) => {
    //     e.preventDefault();
    //     let result = await fetch(
    //     '/book-now', {
    //         method: "post",
    //         body: JSON.stringify({ClubID, clubName, UserID, username,Mobile_number, price}),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     result = await result.json();
    //     console.log(result);
    //     console.warn(result);
    //     if (result) {
    //         alert("Data saved succesfully");
    //         setClubID("");
    //         setClubName("");
    //         setUserID("");
    //         setUsername("");
    //         setMobile_number("");
    //         setPrice("");
    //     }
    // }


  const bookNow = (ClubID, clubName, userId, userName, Mobile_number, price) => {
    Axios.post("http://localhost:5005/book-now", {
      ClubID: ClubID, // Include the ClubID in the POST data
      clubname: clubName, // Include the clubName in the POST data
      UserID: userId, // Include the userId in the POST data
      userName: userName,
      Mobile_number: Mobile_number,
      price: price,
      time: new Date().toISOString(),
    })
      .then((response) => {
        // Handle the success response
       alert("Booking successful!");
      })
      .catch((error) => {
        // Handle the error
       alert("Booking failed!");
      });
  };

  var userId = "5f9f9b3b9c9b8e1b7c9c9b8e";
  var Mobile_number = "9903483250";
  var  clubName = "Oklahoma";
  var  userName = "nayanika";
  var  price = "2000";

  // const navigateBook = () => {
  //   // navigate to /book-now
  //   bookNow(clubs.id, Mobile_number, password,booking_type, time);
  //   navigate('/Book/book-now');
  // };
  return (
    <div>
      <NavigationBar />
      <HeroComponent />
      <h1>Club's Name</h1>
      {/* <form action="">
      <input type="text" placeholder="clubID"
          value={ClubID} onChange={(e) => setClubID(e.target.value)} />
      <input type="text" placeholder="clubName"
          value={clubName} onChange={(e) => setClubName(e.target.value)} />

      <input type="text" placeholder="userID"
          value={UserID} onChange={(e) => setUserID(e.target.value)} />
        <input type="text" placeholder="Username"
          value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="text" placeholder="Mobile_number"
              value={Mobile_number} onChange={(e) => setMobile_number(e.target.value)} />
            <input type="text" placeholder="price"
              value={price} onChange={(e) => setPrice(e.target.value)} />
            <button type="submit"
                onClick={handleOnSubmit}>submit</button>
      </form> */}
       {load ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {clubs.map((club) => (
            <li key={club.id}>
              <h2>{club.name}</h2>
              <ul>
                <li>Stag Price: {club.StagPrice} <button  onClick={() => bookNow(club.ClubID, clubName, userId, userName, Mobile_number, price)}>Book Now</button>
                </li>
                <li>Couple Price: {club.CouplePrice}<button  onClick={() => bookNow(club.ClubID, clubName, userId, userName,Mobile_number, price)}>Book Now</button></li>
                <li>Lady Price: {club.LadyPrice}<button  onClick={() => bookNow(club.ClubID, clubName, userId, userName,Mobile_number, price)}>Book Now</button></li>
              </ul>

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