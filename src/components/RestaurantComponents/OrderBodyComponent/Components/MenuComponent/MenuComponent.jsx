import React from 'react'

import css from './MenuComponent.module.css'

import MenuCardImg from '/images/menucard.png'

import MenuCard from '../../../../../utils/Cards/RestaurantBodyCards/MenuCard/MenuCard'

const MenuComponent = () => {

  const menuCards = [
    {
      imgSrc: MenuCardImg,
      ttl: "Menu",
      pages: 23
    },
    {
      imgSrc: MenuCardImg,
      ttl: "Menu Card",
      pages: 12
    }
  ]

  return <div className={css.outerDiv}>
      
        
  </div>
}

export default MenuComponent