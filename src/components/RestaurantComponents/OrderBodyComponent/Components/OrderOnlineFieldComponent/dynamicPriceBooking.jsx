import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Axios from "axios";
import HeroComponent from "../../../HeroComponent/HeroComponent";
import NavigationBar from "../../../../Navbars/NavigationBar2/NavigationBar2";
import OrderTitleComponent from "../../../OrderTitleComponent/OrderTitleComponent";
import Footer from "../../../../Footer/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { set } from "mongoose";


const ClubPricing = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [clubs, setClubs] = useState([]);
  const [load, setLoad] = useState(false);
  const [ClubID, setClubID] = useState("");
  const [clubName, setClubName] = useState("");
  const [userId, setuserId] = useState("ss");
  const [username, setUsername] = useState("");
  const [Mobile_number, setMobile_number] = useState("");
  const [Coupleprice, setCouple] = useState("newprice");
  const [Ladyprice, setLady] = useState("newprice");
  const [Stagprice, setStag] = useState("newprice");
  // const { userId } = useParams(); // Assuming you are extracting the userId from the URL params
  const navigate = useNavigate();


  async function UserData() {
    console.log("USE PARAMS: ", id);
    try {
      const token = document.cookie;
      const response = await Axios.get(
        `http://34.125.27.77/api/users/current`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log("REQUEST COMPLETED ", response.data);
      setUsername(response.data.username);
      setClubName(response.data.username);
      setMobile_number(response.data.Mobile_number);
      setuserId(response.data.id);
    } catch (error) {

      console.log(error);
    }
  }
  async function callData() {
    try {
      // console.log("ACCESS TOKEN: ", document.cookie)
      const res = await Axios.get("http://34.125.27.77/api/pricing/646f4207e907d42c3e10bfe9");
      // const user_name = await Axios.get("localhost:5005/api/users/current");

      setClubs(res.data);
      setLady(res.data[0].LadyPrice);
      setCouple(res.data[0].CouplePrice);
      setStag(res.data[0].StagPrice);
      setClubName(res.data[0].ClubName);
      // console.log(res.data)
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
    UserData();
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

  // setUsername(user.username);
  // setClubName(user.username);
  // setClubID(user.id);
  // setMobile_number(user.Mobile_number);
  let bookingType;
  const bookNow = (ClubID, bookingType, clubName, userId, username, Mobile_number, price) => {
    // Axios.post("/book-now", {
    Axios.post("http://34.125.27.77:4000/book-now/", {
      ClubID: ClubID, // Include the ClubID in the POST data
      bookingType,
      clubname: clubName, // Include the clubName in the POST data
      UserID: userId, // Include the userId in the POST data
      username: username,
      Mobile_number: Mobile_number,
      price: price,
      time: new Date().toISOString(),
    })
      .then((response) => {
        // Handle the success response
        toast("Booking Successfull!");
      })
      .catch((error) => {
        // Handle the error
        toast("Booking Failed!");
      });
  };

  // const navigateBook = () => {
  //   // navigate to /book-now
  //   bookNow(clubs.id, Mobile_number, password,booking_type, time);
  //   navigate('/Book/book-now');
  // };
  const notify = () => toast("Wow so easy!");
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
          {/* <li>{clubName}</li>
          <li>{userId}</li>
          <li>{username}</li>
          <li>{username}</li>
          <li>{Mobile_number}</li>
          <li>{Stagprice}</li> */}
          {clubs.map((club) => (
            <li key={club.id}>
              <h2>{club.name}</h2>
              <ul>
                <li>Stag Price: {club.StagPrice} <button onClick={() => bookNow(club.ClubID, bookingType = "Stag", clubName, userId, username, Mobile_number, Stagprice)} style={{ padding: "5px", margin: "2px" }}>Book Now</button></li>
                <li>Couple Price: {club.CouplePrice}<button onClick={() => bookNow(club.ClubID, bookingType = "Couple", clubName, userId, username, Mobile_number, Coupleprice)} style={{ padding: "5px", margin: "2px" }}>Book Now</button></li>
                <li>Lady Price: {club.LadyPrice}<button onClick={() => bookNow(club.ClubID, bookingType = "Lady", clubName, userId, username, Mobile_number, Ladyprice)} style={{ padding: "5px", margin: "2px" }}>Book Now</button>
                  <ToastContainer />
                </li>
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
