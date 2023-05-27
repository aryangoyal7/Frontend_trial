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
    const navigate=useNavigate()
   
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
            imgSrc: biryaniSCImg
        },
        {
            promoted: false,
            time: "25",
            offB: true,
            proExtraB: false,
            off: "30",
            proExtra: "40",
            name: "Tryst",
            rating: '2.6',
            imgSrc: biryaniSCImg2
        },
        {
            promoted: true,
            time: "30",
            offB: false,
            proExtraB: true,
            off: "30",
            proExtra: "40",
            name: "DragonFly",
            rating: '4.6',
            imgSrc: chapathiImg
        },
        {
            promoted: false,
            time: "25",
            offB: true,
            proExtraB: false,
            off: "30",
            proExtra: "40",
            name: "The Game Placio",
            rating: '4.9',
            imgSrc: fishImg
        },
        {
            promoted: true,
            time: "25",
            offB: false,
            proExtraB: true,
            off: "30",
            proExtra: "40",
            name: "Toy Room",
            rating: '4.6',
            imgSrc: icecreamImg
        },
        {
            promoted: false,
            time: "25",
            offB: true,
            proExtraB: false,
            off: "30",
            proExtra: "40",
            name: "Dragonfly",
            rating: '2.8',
            imgSrc: kfcSCImg
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
                       return  <div className={css.innerDiv6Body} onClick={()=>console.log("hello")}>
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