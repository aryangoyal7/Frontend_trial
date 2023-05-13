import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Tryst from '/images/Food/Tryst.png';
import toyroom1 from '/images/Food/toyroom1.jpg';
import toyroom2 from '/images/Food/toyroom2.jpg';
import toyroom3 from '/images/Food/toyroom3.jpg';
import toyroom4 from '/images/Food/toyroom4.jpg';
import trystt from '/images/Food/trystt.png';
import slide1 from '/images/Food/slide1.png';
import slide2 from '/images/Food/slide2.jpeg';
import slide3 from '/images/Food/slide3.jpeg';
import slide4 from '/images/Food/slide4.jpeg';
import slide5 from '/images/Food/slide5.jpeg';



const Img = styled.img`
  cursor: pointer;
  display: block;
  width: 250px;
  height: 250px;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
    backface-visibility: visible;
  }
`;

const Wrapper = styled.header`
  max-width: 120%;
  min-width: 100%;
  position: relative;
  margin: auto;
  margin-top: 60px;
  padding: 20px 0;
  background: #fff;
`;

const settings = {
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
};

function Promotions() {
  return (
    <Wrapper>
      <div style={{ background: "#171a29", padding: "30px 20px" }}>
        <div className="container my-3">
          <Slider {...settings}>
            <div className="col">
              <Img
                src= {slide1}
                alt="promotion img"
              />
            </div>
            <div className="col">
              <Img
               src= {slide4}
                alt="promotion img"
              />
            </div>
            <div className="col">
              <Img
                src={slide3}
                alt="promotion img"
              />
            </div>
            <div className="col">
              <Img
                src= {slide5}
                alt="promotion img"
              />
            </div>
            <div className="col">
              <Img
               src= {slide1}
                alt="promotion img"
              />
            </div>
            <div className="col">
              <Img
                src= {slide4}
                alt="promotion img"
              />
            </div>
            <div className="col">
              <Img
                src= {slide3}
                alt="promotion img"
              />
            </div>
            <div className="col">
              <Img
                src= {slide2}
                alt="promotion img"
              />
            </div>
            <div className="col">
              <Img
                src= {slide3}
                alt="promotion img"
              />
            </div>
            <div className="col">
              <Img
                src= {slide1}
                alt="promotion img"
              />
            </div>
            <div className="col">
              <Img
                src= {slide4}
                alt="promotion img"
              />
            </div>
            <div className="col">
              <Img
                src= {slide2}


               
                alt="promotion img"
              />
            </div>
          </Slider>
        </div>
      </div>
    </Wrapper>
  );
}

export default Promotions;
