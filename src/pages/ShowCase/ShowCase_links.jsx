import { useState } from 'react';

import { useNavigate,Link, useLocation } from 'react-router-dom';



import NavigationBar2 from '../../components/Navbars/NavigationBar2/NavigationBar2';
import CategorySelectionComp from '../../utils/OrderingUtils/CategorySelectionComp/CategorySelectionComp'

import ShowcaseCard from '../../utils/Cards/ShowcaseCard/ShowcaseCard'
import Footer from '../../components/Footer/Footer'


import nightlife1 from '/icons/nightlife1.png';
import nightlife2 from '/icons/nightlife2.png';

import biryaniSCImg from '/images/Food/Tryst.png';
import biryaniSCImg2 from '/images/Food/toyroom1.jpg';
import chapathiImg from '/images/Food/toyroom2.jpg';
import chickenSCImg from '/images/Food/chicken.png';
import fishImg from '/images/Food/toyroom3.jpg';
import icecreamImg from '/images/Food/toyroom4.jpg';
import kfcSCImg from '/images/Food/Dragonfly.jpg';
import pizzaSCImg from '/images/Food/pizza.png';

import { orderOnlinePage, diningOutPage, nightLifePage } from '../../helpers/constants'

import css from './ShowCase.module.css';

let ShowCase = () => {
    let location = useLocation();
    const urlParams = new URLSearchParams(location.search);
    const page = urlParams.get('page');
    const navigate=useNavigate();
   
    const items = [
        {
            promoted: true,
            time: "25",
            offB: true,
            proExtraB: false,
            off: "30",
            proExtra: "40",
            name: "ToyRoom",
            rating: '3.6',
            imgSrc: biryaniSCImg,
            ClubID:"646f4207e907d42c3e10bfe9"
        },
        {
            promoted: false,
            time: "25",
            offB: true,
            proExtraB: false,
            off: "30",
            proExtra: "40",
            name: "Bombay Martini",
            rating: '5',
            imgSrc: biryaniSCImg2,
            ClubID:""
        },
        {
            promoted: true,
            time: "30",
            offB: false,
            proExtraB: true,
            off: "30",
            proExtra: "40",
            name: "Knotty Yard",
            rating: '4.6',
            imgSrc: chapathiImg,
            ClubID:"dragonfly"
        },
        {
            promoted: false,
            time: "25",
            offB: true,
            proExtraB: false,
            off: "30",
            proExtra: "40",
            name: "Lord Of The Drinks",
            rating: '4.9',
            imgSrc: fishImg,
            ClubID:"thegameplacio"
        },
        {
            promoted: true,
            time: "25",
            offB: false,
            proExtraB: true,
            off: "30",
            proExtra: "40",
            name: "Episode One",
            rating: '4.6',
            imgSrc: icecreamImg,
            ClubID:"anotherclub"
        },
        {
            promoted: false,
            time: "25",
            offB: true,
            proExtraB: false,
            off: "30",
            proExtra: "40",
            name: "Your fav Club",
            rating: '2.8',
            imgSrc: kfcSCImg,
            ClubID:"anotherclub2"
        },
        
        
        
    ]

    return <div className={css.outerDiv}>
        <NavigationBar2 />
        <div className={css.innerDiv6}>
            <div className={css.w7}>
                <div className={css.innerDiv6Title}>
                    {page === orderOnlinePage ? "" : page === diningOutPage ? "" : ""}
                </div>
                <div className={css.innerDiv6Body}>
                    {items?.map((item, id) => {
                       return  <div className={css.innerDiv6Body} onClick={()=>navigate(`${item.ClubID}`)}>
                        <ShowcaseCard key={id} promoted={item.promoted} time={item.time} offB={item.offB} proExtraB={item.proExtraB} off={item.off} proExtra={item.proExtra} name={item.name} rating={item.rating} imgSrc={item.imgSrc} />
                        </div>
                    })}
                </div>
            </div>
        </div>
        <Footer />
    </div>
}

export default ShowCase;


// test the routing - depending on club id

// make a grid of cards and put 3 in one line


