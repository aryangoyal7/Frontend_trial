import React from 'react'

import css from './OrderTitleComponent.module.css'


const OrderTitleComponent = () => {
  return <div className={css.outerDiv}>
    <div className={css.innerDiv}>
        <div className={css.left}>
            <div className={css.title}>Toyroom</div>
            <div className={css.specials}></div>
            <div className={css.address}>Santa Cruz, Bombay</div>
            
        </div>
       
    </div>
  </div>
}

export default OrderTitleComponent