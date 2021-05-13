import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// Componente img
import ImgComp from "./ImgComp";
import { useLazyQuery } from "@apollo/client";

import GET_ALL_IMAGES from "../../../../Apollo/queries/getImageSlider";
import Cardhero from "./Cardhero";

const Slider = () => {
  const [getImage, { data }] = useLazyQuery(GET_ALL_IMAGES);

  useEffect(() => {
    getImage();
  }, [data,getImage]);

  console.log("DR: ", data?.getImageSlider);

  let imageSlider;
  if (data?.getImageSlider) {
    //splice(data.length - 3)
    imageSlider = data?.getImageSlider.map((img) => {
      return <ImgComp src={img.name} />;
    });
  }
  console.log(imageSlider);
  const [x, setX] = useState(0);

  const goLeft = () => {
    x === 0 ? setX(-100 * (imageSlider.length - 1)) : setX(x + 100);
  };

  const goRight = () => {
    x === -100 * (imageSlider.length - 1) ? setX(0) : setX(x - 100);
  };

  /* if (imageSlider?.length) {
    console.log("entro al setTimeOut");
    setTimeout(() => {
      x === -100 * (imageSlider.length - 1) ? setX(0) : setX(x - 100);
    }, 5000);
  } */

  return !imageSlider?.length ? (
    <Cardhero />
  ) : (
    <SliderAtr>
      {imageSlider?.map((item, indx) => {
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
      <ButtonSlider style={{ right: "10px" }} onClick={goRight}>
        <IoIosArrowForward />
      </ButtonSlider>
    </SliderAtr>
  );
};

const ButtonSlider = styled.button`
  position: absolute;
  top: 10rem;
  transform: translateY(-50%);
  width: 5%;
  height: 100%;
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
  background-color: #5F3F71!important;
  z-index: 1;
  height: fit-content;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;

  .slide {
    min-width: 100%;
    height: fit-content;
    max-height: 20rem;
    transition: 0.5s;
  }
`;

export default Slider;
