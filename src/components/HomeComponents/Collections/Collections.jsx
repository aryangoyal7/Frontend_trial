import css from './Collections.module.css'

import rightArrow from '/icons/right-arrow.png'
import CathTheMatachImg from '/images/techno.jpg'
import NewInTownImg from '/images/bollywood.jpg'
import TrendingThisWeekImg from '/images/suprise.jpg'
import CallingBarHoppersImg from '/images/bars.jpg'

import CollectionsCard from '../../../utils/Cards/card2/CollectionsCard'

let Collections = () => {
    return <div className={css.outerDiv}>
        <div className={css.title}>Collections</div>
        <div className={css.tagLine}>
            <span className={css.desc}>What's your vibe?</span>
            <span className={css.collectionPlacesTag}>All collections in Bombay <span className={css.rightArrowBox}><img className={css.rightArrow} src={rightArrow} alt="right arrow" /></span></span>
        </div>
        <div className={css.cards}>
            <CollectionsCard imgSrc={CathTheMatachImg} title="Techno Clubs" places="30" />
            <CollectionsCard imgSrc={NewInTownImg} title="xyz" places="20" />
            <CollectionsCard imgSrc={TrendingThisWeekImg} title="suprise me!" places="30" />
            <CollectionsCard imgSrc={CallingBarHoppersImg} title="Calling all Bar Hoppers" places="30" />
        </div>
    </div>
}

export default Collections;