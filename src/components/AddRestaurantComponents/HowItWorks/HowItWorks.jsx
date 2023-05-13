import css from './HowItWorks.module.css';

import backgroundImg from '/images/addressbackground.jpg';
import bookIcon from '/icons/forms.jpeg';
import bikeIcon from '/icons/meetings.jpeg';
import packageIcon from '/icons/cash.jpeg';

import Card5 from '../../../utils/Cards/card5/Card5';

let HowItWorks = () => {
    return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.div1}>
                
            </div>
            <div className={css.div2}>
                <div className={css.title}>How it works?</div>
                <div className={css.cards}>
                    <Card5 step='1' title='Fill the enquiry google form or reach out to our team' tag='' img={bookIcon} color='#FFFCF1' />
                    <Card5 step='2' title='Submit necessary details and have a sit down with our team' tag='' img={bikeIcon} color='#FFF5F6' />
                    <Card5 step='3' title='Start receiving Bookings!' tag='Manage dynamic pricing on web dashboard' img={packageIcon} color='#FFF9F1' />
                </div>
            </div>
        </div>
    </div>
}

export default HowItWorks;