import React from "react";
import Maps from "./Maps";
import NavBar from "../screens/navBar/NavBar";
import SucursalCard from "./SucursalCard";
import styled from "styled-components";
import {motion} from 'framer-motion';
import {pageAnimation} from '../PageAnimation'
import NavBarMobile from "../screens/navBar/NavBarMobile";

const Sucursales = () => {
  

  return (
    <StyledStoresContainer variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
      <div id="navBackground">
        <NavBar color="white" />
        <NavBarMobile color="white"/>
      </div>
      <div className="both-container" style={{ display: "flex" }}>
        <div className="map-container">
          <Maps />
        </div>
        <div className="card-container">
          <SucursalCard />
        </div>
      </div>
    </StyledStoresContainer>
  );
};

const StyledStoresContainer = styled(motion.div)`

  .both-container {
    display: flex;
  }

  .map-container {
    display: flex;
    width: 80vw;
    flex-direction: row;
    align-items: left;
    justify-content: left;
  }

  .card-container {
    display: flex;
    width: 23vw;
    height: 80vh;
    overflow-y: scroll;
    flex-direction: column-reverse;
    justify-content: left;
    align-items: flex-end;
    justify-content: flex-end;
  }

  @media (max-width: 1200px) {
    .map-container {
      width: 75vw;
    }

    .card-container {
      width: 29vw;
    }
  }

  @media (max-width: 1024px) {
    .map-container {
      width: 73vw;
    }

    .card-container {
      width: 35vw;
    }
  }

  @media (max-width: 768px) {
    .both-container {
      flex-direction: column;
    }

    .map-container {
      width: 100vw;
      height: 60vh;
    }

    .card-container {
      width: 100vw;
      height: fit-content;
      padding: 0 0.5em;
    }
  }

  @media (max-width: 503px) {
    .both-container {
      flex-direction: column;
    }

    .map-container {
      width: 100vw;
      height: 60vh;
    }

    .card-container {
      width: 100vw;
      height: fit-content;
      padding: 0 0.5em;
    }
  }
`;

export default Sucursales;
