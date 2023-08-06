import React from 'react'

import css from './HeroComponent.module.css'

import food2Img from '/images/toyroom2.jpg';
import t1 from  '/images/techno.jpg';



const HeroComponent = () => {
  return (
    <div className={css.outerDiv}>
      <img className={css.heroImg} src={t1} alt="Hero" />
    </div>
  );
};

export default HeroComponent