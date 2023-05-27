import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AddRestaurant from './pages/AddRestaurant/AddRestaurant'
import ShowCase from './pages/ShowCase/ShowCase'
import ShowCase_links from './pages/ShowCase/ShowCase_links'
import RestaurantPage from './pages/RestaurantPage/RestaurantPage'
import User from './pages/User/User'
import GetTheApp from './pages/GetTheApp/GetTheApp'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import SkipedPage from './pages/SkipedPage/SkipedPage'
import UserSettingsPage from './pages/UserSettingsPage/UserSettingsPage'
import LoginPage from './pages/loginPage/login'
import SignupPage from './pages/signupPage/signup'
import BookingsList from './components/users/userBookings'
import ClubPricing from './components/RestaurantComponents/OrderBodyComponent/Components/OrderOnlineFieldComponent/dynamicPriceBooking' 
import TestPage from './pages/TestPage/TestPage'
// import AddRestaurantHeader from './components/AddRestaurantHeader/AddRestaurantHeader'
import App from './App'
import './index.css'
import Signup from './components/Auth/Signup/Signup'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="/" element={<App />} />
      <Route path="/add-restaurant" element={<AddRestaurant />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/signup-page" element={<SignupPage />} />
      <Route path="/user-bookings" element={<BookingsList />} />
      <Route path="/trial/" exact element={<ClubPricing />} />
      <Route path="/Club-Page/:clubID" exact element={<ClubPricing />} />


      <Route path="/show-case" element={<ShowCase_links />} />
      <Route path="/user/:userId" element={<User />} />
      <Route path="/user/:userId/:hashId" element={<User />} />
      <Route path="/user/:userId/notifications" element={<SkipedPage />} />
      <Route path="/user/:userId/network" element={<SkipedPage />} />
      <Route path="/user/:userId/find-friends" element={<SkipedPage />} />
      <Route path="/user/:userId/settings" element={<UserSettingsPage />}/>
      <Route path="/get-the-app" element={<GetTheApp />} />
      <Route path="/:city/:hotel" element={<RestaurantPage />} />
      <Route path="/:city/:hotel/:page" element={<RestaurantPage />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
)
