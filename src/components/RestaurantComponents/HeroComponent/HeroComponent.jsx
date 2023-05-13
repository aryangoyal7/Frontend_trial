import React from 'react'

import css from './HeroComponent.module.css'

import food1Img from '/images/toyroom3.jpg';
import food2Img from '/images/toyroom2.jpg';
import food3Img from '/images/toyroom1.jpg';

import GalleryImgCard from '../../../utils/Cards/RestaurantHeroCards/GalleryImgCard/GalleryImgCard'
import AddPhotosCard from '../../../utils/Cards/RestaurantHeroCards/AddPhotosCard/AddPhotosCard'
import ViewGalleryImgCard from '../../../utils/Cards/RestaurantHeroCards/ViewGalleryImgCard/ViewGalleryImgCard'

const HeroComponent = () => {
  return (
    <div className={css.outerDiv}>
      <img className={css.heroImg} src={food2Img} alt="Hero" />
    </div>
  );
};

export default HeroComponent