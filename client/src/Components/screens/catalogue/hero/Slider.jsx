import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Componente img
import ImgComp from "./ImgComp";
import banner3Low from "./banner3Low.png";

import { useQuery } from "@apollo/client";

import GET_ALL_IMAGES from "../../../../Apollo/queries/getImageSlider";
import Cardhero from "./Cardhero";

const Slider = () => {
  // Revisar esto
  // Data deberia traer un array de objetos con los siguientes campos:
  // __typename, id, name, date
  let { data } = useQuery(GET_ALL_IMAGES);

  console.log("D: ", data);

  let imageSlider;
  /* if (data) {
    imageSlider = data?.splice(data.length - 3).map((img) => {
      //return <ImgComp src={img} />;
    });
  } */

  const [x, setX] = useState(0);

  const goLeft = () => {
    x === 0 ? setX(-100 * (imageSlider.length - 1)) : setX(x + 100);
  };

  const goRight = () => {
    x === -100 * (imageSlider.length - 1) ? setX(0) : setX(x - 100);
  };

  if (imageSlider) {
    setTimeout(() => {
      x === -100 * (imageSlider.length - 1) ? setX(0) : setX(x - 100);
    }, 5000);
  }

  return !imageSlider ? (
    <Cardhero />
  ) : (
    <SliderAtr>
      {imageSlider.map((item, indx) => {
        return (
          <div
            className="slide"
            key={indx}
            style={{ transform: `translateX(${x}%)` }}
          >
            {/**Revisar que es item. Deberia ser item.name */}
            {item}
          </div>
        );
      })}
      <ButtonSlider style={{ left: "0" }} onClick={goLeft}>
        <IoIosArrowBack />
      </ButtonSlider>
      <ButtonSlider style={{ right: "20px" }} onClick={goRight}>
        <IoIosArrowForward />
      </ButtonSlider>
    </SliderAtr>
  );
};

/**
 *
 */

const ButtonSlider = styled.button`
  position: absolute;
  top: 10rem;
  transform: translateY(-50%);
  width: 5%;
  height: 20rem;
  background: none;
  border: none;
  background-color: hsla(0, 0%, 0%, 0.446);
  transition: 0.5s;
  font-size: 3rem;
  color: hsl(0, 100%, 100%);
  z-index: 9999;

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
