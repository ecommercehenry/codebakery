import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Componente img
import ImgComp from "./ImgComp";

import i1 from "./i1.jpg";
import i2 from "./i2.jpg";
import i3 from "./i3.jpg";
import { useQuery } from "@apollo/client";

import GET_ALL_IMAGES from "../../../../Apollo/queries/getImageSlider";

const axios = require("axios");
const Slider = () => {
  let { data } = useQuery(GET_ALL_IMAGES);

  console.log("DATA: ", data);
  // Revisar esto
  let sliderArr = [
    <ImgComp src={i1} />,
    <ImgComp src={i2} />,
    <ImgComp src={i3} />,
  ];

  const [x, setX] = useState(0);

  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };

  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  setTimeout(() => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  }, 5000);

  return (
    <SliderAtr>
      {sliderArr.map((item, indx) => {
        return (
          <div
            className="slide"
            key={indx}
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        );
      })}
      <ButtonSlider style={{ left: "0" }} onClick={goLeft}>
        <IoIosArrowBack />
      </ButtonSlider>
      <ButtonSlider style={{ right: "0" }} onClick={goRight}>
        <IoIosArrowForward />
      </ButtonSlider>
    </SliderAtr>
  );
};

const ButtonSlider = styled.button`
  position: absolute;
  top: 10rem;
  transform: translateY(-50%);
  width: 8%;
  height: 20rem;
  background: none;
  border: none;
  background-color: hsla(0, 0%, 0%, 0.446);
  transition: 0.5s;
  font-size: 3rem;
  color: hsl(0, 100%, 100%);

  :hover {
    font-size: 4rem;
    color: hsl(0, 0%, 80%);
    background-color: hsla(0, 0%, 50.19607843137255%, 0.226);
  }
  :active {
    background-color: hsl(0, 0%, 80%);
    color: hsl(0, 100%, 100%);
  }
`;

const SliderAtr = styled.div`
  position: relative;
  background-color: #755588;
  z-index: 1;
  height: 20rem;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;

  .slide {
    min-width: 100%;
    height: 20rem;
    transition: 0.5s;
  }
  :hover {
    transform: translateX(0%);
  }
`;

export default Slider;
