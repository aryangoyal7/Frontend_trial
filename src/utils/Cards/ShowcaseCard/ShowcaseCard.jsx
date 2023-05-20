import { Link } from 'react-router-dom';

import css from './ShowcaseCard.module.css';

import biryani from '/images/profilebanner.jpg'
import upArrowIcon from '/icons/up-arrow-icon.png';
import maxSAfety from '/icons/heart.jpeg';
import safeDelivery from '/icons/fire.jpeg';
import star from '/icons/star.png';

let ShowcaseCard = (props) => {
    const { link2, promoted, time, offB, proExtraB, off, proExtra, name, rating, imgSrc } = props;
    let link = "/" + "hyderabad/paraside/order";
    return <Link className={css.outerDiv} to={link}>
        <div className={css.innerDiv}>
            <div className={css.imgBox}>
                
                <img className={css.img} src={imgSrc} alt="food image" />
                
                
                
            </div>
            <div className={css.txtBox}>
                <div className={css.titleBox}>
                    <div className={css.title}>{name}</div>
                    
                </div>
                <div className={css.tagBox}>
                    <div className={css.tagTitle}>Clubbing</div>
                    <div className={css.tagTxt}>₹<span className={css.type}>3500</span> for two <span className={css.num}></span></div>
                </div>
            </div>
            
        </div>
    </Link>
}

export default ShowcaseCard;