import React from "react";
import bread from "./bigBreads.png";
import styled from "styled-components";
import vertical from "./vertical.png";
import horizontal from "./horizontal.png";

const Cardhero = () => {
  return (
    <>
      <StyledHero className="hero d-flex justify-content-center align-items-center">
        <span id="hero-title">Sale!</span>
        <img id="vertical" src={vertical} alt="" />
        <img id="horizontal" src={horizontal} alt="" />
      </StyledHero>
    </>
  );
};

const StyledHero = styled.div`
  background-image: url(${bread});
  position: relative;

  width: 100%;
  background-color: #5F3F71;
  /*  border-radius: 0px 0px 50px 50px; */
  z-index: 1;
  background-size: 30rem;
  background-position: 80% 10%;
  background-repeat: no-repeat;
  /* El hero ocupa todo el viewport */
  height: 20rem;

  #hero-title {
    position: absolute;
    left: 5%;

    color: white;
    font-size: 7rem;
    font-weight: bold;
    font-style: italic;
    margin-top: -4rem;
  }

  #vertical {
    position: absolute;
    right: 10rem;
    bottom: 2rem;
  }

  #horizontal {
    position: absolute;
    left: 55%;
    top: 60%;
  }

  @media(max-width: 1300px){
    #vertical{
      display: none;
    }
    #horizontal {
      display: none;
  }
    background-position-x: 100%;
  }
  @media(max-width: 800px){
    background-position-x: 120%;
  }
  @media(max-width: 650px){
    background-position-x: 140%;
    }
    @media(max-width: 650px){
    background-image: none;
    background-position-x: none;
    #hero-title {
    position: relative;
    color: white;
    font-size: 7rem;
    margin-left: -4rem;
    font-weight: bold;
    font-style: italic;
  }
    }
`;

export default Cardhero;
