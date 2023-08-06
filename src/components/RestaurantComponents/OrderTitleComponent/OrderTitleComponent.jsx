import React from 'react'

import css from './OrderTitleComponent.module.css'


const OrderTitleComponent = () => {
  return <div className={css.outerDiv}>
    <div className={css.innerDiv}>
        <div className={css.left}>
            <div className={css.title}>Make your booking here</div>
            <div className={css.specials}></div>
            <div className={css.address}>Pay at Venue</div>
            
        </div>
       
    </div>
  </div>
}

export default OrderTitleComponent