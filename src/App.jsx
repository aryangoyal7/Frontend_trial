// importing components for homepage , refer components
import HomePageBanner from './components/HomeComponents/HomePageBanner/HomePageBanner'
import SmallCard from './utils/Cards/card1/SmallCard'
import Collections from './components/HomeComponents/Collections/Collections'
import PopularPlaces from './components/HomeComponents/PopularPlaces/PopularPlaces'
import GetTheApp from './components/HomeComponents/GetTheApp/GetTheApp'
import ExploreOptionsNearMe from './components/HomeComponents/ExploreOptionsNearMe/ExploreOptionsNearMe'
import Footer from './components/Footer/Footer'



// Use of images and their paths
import orderOnlineImg from '/images/stags.jpg'
import diningoutImg from '/images/couple.jpg'
import proandproplusImg from '/images/event.jpeg'
import nightlifeandclubsImg from '/images/ladies.avif'


import css from './App.module.css'

import { orderOnlinePage, diningOutPage, proAndProPlusPage, nightLifePage } from './helpers/constants';

function App() {
// renders html for homepage
  
  return <>
    <HomePageBanner />
    <div className={css.bodySize}>
      <div className={css.chooseTypeCards}>
        <SmallCard imgSrc={orderOnlineImg} text="Stag Booking" link={"/show-case?page=" + orderOnlinePage} />
        <SmallCard imgSrc={diningoutImg} text="Couple Booking" link={'/show-case?page=' + diningOutPage} />
        <SmallCard imgSrc={proandproplusImg} text="Book an event" link={'/show-case?page=' + proAndProPlusPage} />
        <SmallCard imgSrc={nightlifeandclubsImg} text="Ladies special booking" link={'/show-case?page=' + nightLifePage} />
      </div>
      <Collections />
      
    </div>
    
    
    <Footer />
  </>
}

export default App
