import React from 'react'

import css from './HeroComponent.module.css'

import food2Img from '/images/toyroom2.jpg';



const HeroComponent = () => {
  return (
    <div className={css.outerDiv}>
      <img className={css.heroImg} src={food2Img} alt="Hero" />
    </div>
  );
};

export default HeroComponent