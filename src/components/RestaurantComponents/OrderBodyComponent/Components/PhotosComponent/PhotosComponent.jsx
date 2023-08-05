import {useState} from 'react'

import RedButton from '../../../../../utils/Buttons/RedButton/RedButton'
import WhiteButton from '../../../../../utils/Buttons/WhiteButton/WhiteButton'

import GalleryImgCard from '../../../../../utils/Cards/RestaurantHeroCards/GalleryImgCard/GalleryImgCard'

import biryaniImg from '/images/fortheloveofbiryani.jpg'

import css from './PhotosComponent.module.css'

const PhotosComponent = () => {

  const allPhotosData = [
    {
      imgSrc: biryaniImg
    },
    {
      imgSrc: biryaniImg
    },
    {
      imgSrc: biryaniImg
    },
    {
      imgSrc: biryaniImg
    },
    {
      imgSrc: biryaniImg
    },
    {
      imgSrc: biryaniImg
    },
    {
      imgSrc: biryaniImg
    },
    {
      imgSrc: biryaniImg
    },
  ]

  const foodPhotosData = [
    {
      imgSrc: biryaniImg
    },
    {
      imgSrc: biryaniImg
    },
    {
      imgSrc: biryaniImg
    }
  ]

  const ambeiencePhotosData = [
    {
      imgSrc: biryaniImg
    },
    {
      imgSrc: biryaniImg
    },
    {
      imgSrc: biryaniImg
    },
    {
      imgSrc: biryaniImg
    },
    {
      imgSrc: biryaniImg
    }
  ]

  const [state, setState] = useState(allPhotosData)

  return <div className={css.outerDiv}>
  </div>
}

export default PhotosComponent