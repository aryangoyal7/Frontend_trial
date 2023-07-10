import {Link, useParams} from "react-router-dom"

import css from './OverviewFieldComponent.module.css'

import rightArrrow from '/icons/right-arrow.png'
import food1 from '/images/food1.jpg'
import CathTheMatachImg from '/images/cathcthematch.jpg'
import happyHoursImg from "/images/happyhours.jpg";

import OverviewAboutCard from '../../../../../utils/Cards/RestaurantBodyCards/OverviewAboutCard/OverviewAboutCard'
import MenuCard from '../../../../../utils/Cards/RestaurantBodyCards/MenuCard/MenuCard'
import LabelUtil from '../../../../../utils/RestaurantUtils/LabelUtil/LabelUtil'

import RecentlyViewedCard from '../../../../../utils/Cards/RecentlyViewedCard/RecentlyViewedCard'
import CollectionsCard from '../../../../../utils/Cards/card2/CollectionsCard'
import { useEffect , useState} from "react"
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import Button from '@mui/material/Button';

const OverviewFieldComponent = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [clubs, setClubs] = useState([]);
  const [load, setLoad] = useState(false);
  const [ClubID, setClubID] = useState("");
  const [clubName, setClubName] = useState("");
  const [userId, setuserId] = useState("");
  const [username, setUsername] = useState("");
  const [Mobile_number, setMobile_number] = useState("");
  const [Coupleprice, setCouple] = useState("newprice");
  const [Ladyprice, setLady] = useState("newprice");
  const [Stagprice, setStag] = useState("newprice");
  const [isloggedIn, setisloggedIn] = useState(false);
  var token = document.cookie; 
  // const { userId } = useParams(); // Assuming you are extracting the userId from the URL params
  const navigate = useNavigate();

  const {city, hotel, page=""} = useParams();
  // console.log("USER PARAMS: ",hotel);

  async function UserData() {
    // console.log("USE PARAMS: ", hotel);
    try {
        if(document.cookie[0] === "c"){
  //      console.log("AREY IDHAR CHAL GAYA")
        token = document.cookie.split(";")[1];
  //      console.log("idhar ka token",token)
      }
        if(!token){
          token = localStorage.getItem("access_token");
        }  
      console.log("TOKEN HERE IS: ",token)
      const response = await axios.get(
        `http://34.100.246.170/api/users/current`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("is set?",localStorage.getItem('access_token'))
      console.log("REQUEST COMPLETED ", response.data);
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
      console.log("USER NAME: ", username);
      // console.log("ACCESS TOKEN: ", document.cookie)
      const res = await axios.get(`http://34.100.246.170/api/pricing/${hotel}`);
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
    if(localStorage.getItem("access_token")){
      setisloggedIn(true);
    }
    callData();
    UserData();
    setLoad(false);
  }, [isloggedIn]);


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
  const bookNow = async(ClubID, bookingType, clubName, userId, username, Mobile_number, price) => {
  
    if(!token){
      token = localStorage.getItem("access_token");
    }
    try {

      const response = await axios.post(
        `http://34.100.246.170/api/bookings/book-now`,
        {
          ClubID: ClubID, // Include the ClubID in the POST data
          bookingType,
          clubname: clubName, // Include the clubName in the POST data
          UserID: userId, // Include the userId in the POST data
          username: username,
          Mobile_number: Mobile_number,
          price: price,
          time: new Date().toISOString(),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      toast("Booking Successful");
    } catch (error) {
      toast("Booking Failed");
      console.error('Error:', error);
    }

  };

  // const navigateBook = () => {
  //   // navigate to /book-now
  //   bookNow(clubs.id, Mobile_number, password,booking_type, time);
  //   navigate('/Book/book-now');
  // };

  const data = {
    phone: "9988098812",
    address: "50000, kukatpally, Hyderabad, Telangane, India",
    lat: 11.11,
    lng: 18.31
  }

  const similarRest = [
    {
      id: 1,
      imgSrc: happyHoursImg,
      name: "Paradise Biryani",
      ratingsDining: 4.2,
      ratingsDelivery: 4.6,
      address: "Kukatpally, Hyd",
      link: "#"
    },
    {
      id: 2,
      imgSrc: happyHoursImg,
      name: "Paradise Biryani",
      ratingsDining: 4.2,
      ratingsDelivery: 4.6,
      address: "Kukatpally, Hyd",
      link: "#"
    }
  ]

  const labels = [
    {link: "/", txt: "North Indian"},
    {link: "/", txt: "South Indian"},
    {link: "/", txt: "East Indian"},
    {link: "/", txt: "West Indian"},
    {link: "/", txt: "Desserts"}
  ]

  const menuData = [
    {ttl: "Food Menu", imgSrc:food1, pages:"23"},
    {ttl: "Food Menu Card", imgSrc:food1, pages:"30"}
  ]

  const moreInfo = ["Breakfast", "Takeaway Available", "Family Friendly", "Home Delivery", "Indoor Seating"]

  const collectionData = [
    {imgSrc: CathTheMatachImg, title: "Catch the Match", places: "23"},
    {imgSrc: CathTheMatachImg, title: "Catch the Match", places: "30"}
  ]

  function logoutHandler(){
    navigate("/login-page");
  }

  return <div className={css.outerDiv}>
    <div className={css.innerDiv}>
      <div className={css.leftBox}>
       {isloggedIn ? (
          <>
           <div className={css.ttl}>About this place
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
        </div>
        </>
        ) : (<>
        <div className="text-center" style={{padding: "5%", paddingLeft: "0"}}>Please Login before making any bookings!</div>

        <Button variant="contained" onClick={logoutHandler}>Click here to login!</Button>
        </>)}
        <div className={css.menuSec}>
          <div className={css.subTtl}>Menu</div>
          <Link to={`/${city}/${hotel}/menu`} className={css.menuLink}>See all menus <img src={rightArrrow} className={css.rightArrowIcon} alt="right arrow" /></Link>
        </div>
        <div className={css.menuSecBdy}>
          {menuData?.map((val, id) => {
            return <MenuCard key={id} ttl={val.ttl} imgSrc={val.imgSrc} pages={val.pages} />;
          })}
        </div>
        <div className={css.sec}>
          <div className={css.subTtl}>Cuisines</div>
          <div className={css.labels}>
            {labels?.map((val, id) => {
              return <LabelUtil key={id} link={val.link} txt={val.txt} />;
            }) }
          </div>
        </div>
        <div className={css.sec}>
            <div className={css.subTtl}>People Say This Place Is Known For</div>
            <div className={css.secTxt}>Great Buffet Spread, Fusion Dishes, Ample Seating Area, Family Place, Family Crowd, Quantity</div>
        </div>
        <div className={css.sec}>
            <div className={css.subTtl}>Average Cost</div>
            <div className={css.secTxt}>₹800 for two people (approx.)</div>
            <div className={css.secTxt1}>Exclusive of applicable taxes and charges, if any</div>
            <div className={css.toolTipBox}>
              <div className={css.secTxtToolTip}>
                How do we calculate cost for two?
              </div>
              {/* <div className={css.toolTip}>The cost for two is computed as follows: Average of 2 appetizers + 2 mains + 2 beverages + 1 dessert. The actual cost you incur at a restaurant might change depending on your appetite, or with changes in restaurant menu prices.</div> */}
            </div>
        </div>
        <div className={css.sec2}> 
            <div className={css.subTtl}>More Info</div>
            <div className={css.ulList}>
              {moreInfo?.map((val , id)=> {
                return <li key={id} className={css.list}>{val}</li>
              })}
            </div>
        </div>
        <div className={css.sec}>
            <div className={css.subTtl}>Featured In</div>
            <div className={css.secBdy}>
              {collectionData?.map((val , id)=> {
                return <CollectionsCard key={id}  imgSrc={val.imgSrc} title={val.title} places={val.places} />;
              })}
            </div>
        </div>
        <div className={css.sec}>
            <div className={css.subTtl}>Similar Restaurants</div>
            <div className={css.secBdy}>
              {similarRest.map((item) => {
                return <RecentlyViewedCard udata={item} key={item?.id} />;
              })}
            </div>
        </div>
      </div>
      <div className={css.rightBox}>
        <OverviewAboutCard data={data} />
      </div>
    </div>
  </div>
}

export default OverviewFieldComponent
