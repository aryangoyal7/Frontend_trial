import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Collections from '../../components/HomeComponents/Collections/Collections';

import NavigationBar2 from '../../components/Navbars/NavigationBar2/NavigationBar2';
import CategorySelectionComp from '../../utils/OrderingUtils/CategorySelectionComp/CategorySelectionComp'
import FilterBox from '../../utils/OrderingUtils/FilterBox/FilterBox';
import CircleCard1 from '../../utils/Cards/CircleCards/CircleCard1/CircleCard1';
import CircleCard2 from '../../utils/Cards/CircleCards/CircleCard2/CircleCard2';
import ShowcaseCard from '../../utils/Cards/ShowcaseCard/ShowcaseCard'
import ExploreOptionsNearMe from '../../components/HomeComponents/ExploreOptionsNearMe/ExploreOptionsNearMe'
import Footer from '../../components/Footer/Footer'
import CarouselUtil from '../../utils/CarouselUtil/CarouselUtil'
import Promotions from '../../components/RestaurantComponents/slider';

import dinning1 from '/icons/dinning1.png';
import dinning2 from '/icons/dinning2.png';
import delivery1 from '/icons/delivery1.png';
import delivery2 from '/icons/delivery2.png';
import nightlife1 from '/icons/nightlife1.png';
import nightlife2 from '/icons/nightlife2.png';
import filtersIcon from '/icons/filter.png';
import deliveryTimeIcon from '/icons/delivery-time.png';
import downArrowIcon from '/icons/down-arrow.png';

import biryaniCImg from '/icons/Food/burger.png';
import burgerImg from '/icons/Food/burger.png';
import chickenImg from '/icons/Food/chicken.png';
import friesImg from '/icons/Food/fries.png';
import homestyleImg from '/icons/Food/homestyle.png';
import noodelsImg from '/icons/Food/noodels.png';
import pannerImg from '/icons/Food/panner.png';
import pizzaImg from '/icons/Food/pizza.png';
import sandwichImg from '/icons/Food/sandwich.png';
import shawarmaImg from '/icons/Food/shawarma.png';

import kfcImg from '/icons/Brands/toyroom1.jpg';
import pizzahutImg from '/icons/Brands/Tryst .jpg';
import scoopsImg from '/icons/Brands/toyroom2.jpg';

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

    let [isActive, setIsActive] = useState({
        delivery: page === orderOnlinePage,
        dinning: page === diningOutPage,
        nightlife: page === nightLifePage
    });
    let filterBoxes;

    let filters = {
        delivery: [
            { text: "Location", leftIcon: deliveryTimeIcon },
            { text: "Rating: 4.0+" },
            { text: "Freate Offers" },
            { text: "Music type", leftIcon: downArrowIcon },
        ],
        dinning: [
            { text: "Filter", leftIcon: filtersIcon },
            { text: "Rating: 4.0+" },
            { text: "Outdoor Seating" },
            { text: "Sports Screening" },
            { text: "Open Now" },
        ],
        nightLife: [
            { text: "Filter", leftIcon: filtersIcon },
            { text: "Distance", leftIcon: deliveryTimeIcon },
            { text: "Rating: 4.0+" },
            { text: "Pubs & Bars" },
        ]
    }
    

    const brandsCardScroll = [
        {
            name: "Toyroom",
            imgSrc: kfcImg,
            time: "45"
        },
        {
            name: "Dragonfly",
            imgSrc: pizzahutImg,
            time: "35"
        },
        {
            name: "Escobar",
            imgSrc: scoopsImg,
            time: "49"
        },
        {
            name: "Game Placio",
            imgSrc: kfcImg,
            time: "19"
        },
        {
            name: "Kitty Su",
            imgSrc: pizzahutImg,
            time: "22"
        },
        {
            name: "Tryst",
            imgSrc: scoopsImg,
            time: "33"
        },
    ]

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
        
        <div className={css.showCaseDiv}>
            <div className={css.showcaseComps}>
                <CategorySelectionComp title="Clubs" imgSrc={nightlife1} imgSrc2={nightlife1} color="#FCEEC0" comp='delivery' isActive={isActive} setIsActive={setIsActive} />
                <CategorySelectionComp title="Bars and Pubs" imgSrc={nightlife1} imgSrc2={nightlife2} color="#EDF4FF" comp='nightlife' isActive={isActive} setIsActive={setIsActive} />
            </div>
        </div>
        
       
       
       
        <div className={css.innerDiv6}>
            <div className={css.w7}>
                <div className={css.innerDiv6Title}>
                    {page === orderOnlinePage ? "" : page === diningOutPage ? "Dine-Out Restaurants in Bombay" : "Nightlife Restaurants in Bombay"}
                </div>
                <div className={css.innerDiv6Body}>
                    {items?.map((item, id) => {
                        return <ShowcaseCard key={id} promoted={item.promoted} time={item.time} offB={item.offB} proExtraB={item.proExtraB} off={item.off} proExtra={item.proExtra} name={item.name} rating={item.rating} imgSrc={item.imgSrc} />
                    })}
                </div>
            </div>
        </div>
        <Footer />
    </div>
}

export default ShowCase;