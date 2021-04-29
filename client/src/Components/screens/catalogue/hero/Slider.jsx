import React, { useState } from "react";
import styled from "styled-components";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Componente img
import ImgComp from "./ImgComp";

import i1 from "./i1.jpg";
import i2 from "./i2.jpg";
import i3 from "./i3.jpg";

const Slider = () => {
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
      <GoLeft onClick={goLeft}>
        <IoIosArrowBack />
      </GoLeft>
      <GoRight onClick={goRight}>
        <IoIosArrowForward />
      </GoRight>
    </SliderAtr>
  );
};

//IoIosArrowBack
//IoIosArrowForward

const GoLeft = styled.button`
  position: absolute;
  top: 10rem;
  left: 0;
  transform: translateY(-50%);
  width: 8%;
  height: 20rem;
  background: none;
  border: none;
  background-color: hsla(0, 0%, 0%, 0.999);
  opacity: 0.4;
  transition: 0.5s;

  :hover {
    font-size: 3rem;
    color: hsl(0, 100%, 100%);
    background-color: hsla(0, 0%, 50.19607843137255%, 0.446);
  }
`;

const GoRight = styled.button`
  position: absolute;
  top: 10rem;
  right: 0;
  transform: translateY(-50%);
  width: 8%;
  height: 20rem;
  background: none;
  border: none;
  background-color: hsla(0, 0%, 0%, 0.999);
  opacity: 0.4;
  transition: 0.5s;

  :hover {
    font-size: 3rem;
    color: hsl(0, 100%, 100%);
    background-color: hsla(0, 0%, 50.19607843137255%, 0.446);
  }
`;

const SliderAtr = styled.div`
  position: relative;
  background-color: #755588;
  /*  border-radius: 0px 0px 50px 50px; */
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
`;

export default Slider;
