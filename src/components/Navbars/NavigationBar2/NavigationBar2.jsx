import { useState } from 'react';
import { Link } from 'react-router-dom'

import mobileHand from '/icons/smartphone.png'
import menuBar from '/icons/menu.png'
import downArrow from '/icons/down-arrow.png'
import profilePic from '/images/profilepic.jpg'

import SearchBar from '../../../utils/SearchBar/SearchBar'

import css from './NavigationBar2.module.css';

let NavigationBar = ({ toogleMenu, setToggleMenu, page }) => {
    let [menuDisplay, setMenuDisplay] = useState(false);
    let [loggedIn, setLoggedIn] = useState(localStorage.getItem('auth') || false);
    let [auth, setAuth] = useState({
        closed: true,
        login: false,
        signup: false
    });

    const logoutHandler = () => {
        setLoggedIn(false);
        localStorage.removeItem("auth");
    }

    return <div className={css.navbar}>
        <img className={css.menuBar} src={menuBar} alt='menu bar' onClick={() => setToggleMenu(val => !val)} />
        <div className={css.navbarInner}>
            <div className={css.leftSide}>
                <Link to='/' className={css.appTxt}>Thirtyml</Link>
            </div>
            {page !== 'login-page' ? <Link to='/login-page' className={css.menuItem} >Login</Link> : ''}
                {page !== 'signup-page' ? <Link to='/signup-page' className={css.menuItem} >SignUp</Link> : ''}
                {page !== 'signup-page' ? <Link to='/user-bookings' className={css.menuItem} >My Bookings</Link> : ''}
            
            <div>
                
          </div>
        </div>
    </div>
}

export default NavigationBar;