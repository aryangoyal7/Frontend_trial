import globIcon from '/icons/glob.png'
import calenderIcon from '/icons/calenderIcon.png'
import restaurantIcon from '/icons/restaurantIcon.png'

import Card4 from '../../../utils/Cards/card4/Card4'

import css from './WhyShouldYouPWZ.module.css';

let WhyShouldYouPWZ = () => {
    return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.title}>Why should you partner with Tomato?</div>
            <div className={css.tagLine}> Dynamic Pricing, More customores on every night and increased visibility!</div>
            <div className={css.cards}>
                <Card4 imgSrc={globIcon} title="All the top Clubs" tagLine="in Bombay" />
                <Card4 imgSrc={calenderIcon} title="Young and Dynamic " tagLine="users on our platform" />
                <Card4 imgSrc={restaurantIcon} title="More reach " tagLine="More customers!" />
            </div>
        </div>
    </div>
}

export default WhyShouldYouPWZ;