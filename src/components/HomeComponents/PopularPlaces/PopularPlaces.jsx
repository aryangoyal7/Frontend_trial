import { useState } from 'react';

import PlacesCard from '../../../utils/Cards/card3/PlacesCard'
import ShowMore from '../../../utils/Cards/card3/ShowMore'

import css from './PopularPlaces.module.css';

let PopularPlaces = () => {
    let [showMore, setShowMore] = useState();
    return <div className={css.outerDiv}>
        <div className={css.title}><span className={css.titleTxt}>Popular localities in and around</span> <span className={css.bld}>Bombay</span></div>
        <div className={css.placesCards}>
            <PlacesCard place="Powai" count="421" link='/jubileehills' />
            <PlacesCard place="Colaba" count="421" link='/jubileehills' />
            <PlacesCard place="Bandra" count="421" link='/jubileehills' />
            <PlacesCard place="Andheri" count="421" link='/jubileehills' />
            <PlacesCard place="Khar" count="421" link='/jubileehills' />
            <ShowMore setShowMore={setShowMore} />
        </div>
    </div>
}

export default PopularPlaces;