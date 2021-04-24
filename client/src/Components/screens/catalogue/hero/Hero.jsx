import React from "react";
import bread from "./bigBreads.png";
import styled from "styled-components";
import vertical from "./vertical.png";
import horizontal from "./horizontal.png";

const Hero = () => {
  return (
    <>
      <StyledHero className="hero d-flex justify-content-center align-items-center">
            <span id="hero-title">Sale!</span>
            <img id="vertical" src={vertical} />
            <img id="horizontal" src={horizontal} />
      </StyledHero>
    </>
  );
};

const StyledHero = styled.div`
  background-image: url(${bread});
  position: relative;
  height: 30rem;
  margin-top: -100px;
  width: 100%;
  background-color: #755588;
  border-radius: 0px 0px 50px 50px;
  z-index: 1;
  background-size: 50rem;
  background-position: 80% -5%;
  background-repeat: no-repeat;

  #hero-title {
    position: absolute;
    left: 10%;
    color: white;
    font-size: 7rem;
    font-weight: bold;
    font-style: italic;
  }

  #vertical {
    position: absolute;
    right: 5rem;
    bottom: 2rem;
  }

  #horizontal {
    position: absolute;
    left: 40%;
  }
`;

export default Hero;
