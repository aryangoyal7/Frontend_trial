import React from 'react'

import css from './OrderTitleComponent.module.css'

import RatingUtil from '../../../utils/RestaurantUtils/RatingUtil/RatingUtil'

import infoIcon from '/icons/info.png'

const OrderTitleComponent = () => {
  return <div className={css.outerDiv}>
    <div className={css.innerDiv}>
        <div className={css.left}>
            <div className={css.title}>Toyroom</div>
            <div className={css.specials}></div>
            <div className={css.address}>Santa Cruz, Bombay</div>
            <div className={css.timings}>
                <span className={css.opORclo}>Open now -</span>
                <span className={css.time}>7pm - 1am (Today)</span>
                <span className={css.infoIconBox}>
                    <img className={css.infoIcon} src={infoIcon} />
                    <div className={css.infoTooltip}>   
                        <div className={css.ttil}>Opening Hours</div>
                        <div className={css.ttim}>Mon-Sun:<span className={css.ctim}>11:30am-10:30pm</span></div>
                    </div>
                </span>
            </div>
        </div>
        <div className={css.right}>
            <RatingUtil rating="4.1" count="601" txt="Reviews" />
            
        </div>
    </div>
  </div>
}

export default OrderTitleComponent