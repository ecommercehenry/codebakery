import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {motion} from 'framer-motion';
import {pageAnimation} from '../../PageAnimation'
import UserLeftPanel from "./UserLeftPanel";
import UserOrders from "./UserOrders";
import UserProduct from "./UserProduct";
import UserProfile from "./UserProfile";
import UserReview from "./UserReview";
import EnableTFA from "./EnableTFA";
import NavBarMobile from "../navBar/NavBarMobile";
import NavBar from "../navBar/NavBar";
import { Route } from "react-router";
//aqui voy a mostrar mi otros componente

const UserPanel = () => {
  let { status } = useSelector((state) => state.theme);
  
  return (
    <StyledUserPanel light={status} variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
      <NavBar color="white" />
      <NavBarMobile color="white" />
      <div className="left-side">
      <UserLeftPanel />
      </div>
      <div className="right-side">
      <Route path={`/user/:id/my-data`} component={UserProfile}/>
      <Route path={`/user/:id/for-review`} component={UserOrders}/>
      <Route path={`/user/:id/reviews`} component={UserReview}/>
      <Route path={`/user/:id/orders`} component={UserProduct}/>
      <Route path={`/user/:id/my-data/enableTFA`} component={EnableTFA}/>
      </div>
    </StyledUserPanel>
  );
};

const StyledUserPanel = styled(motion.div)`
  background: ${({ light }) => (light ? "#f1f1f1" : "#222222")};
  color: ${({ light }) => (light ? "inherit" : "white")};
  width: 100vw;
  height: 100vh;

  .right-side{
    padding-left: 11rem;
    height: calc(100vh - 4.5rem);
    overflow-y: auto;
  }

  @media (max-width: 850px) {
    .left-side{
    display: none;
    }
    .right-side{
    padding-left: 0;
    }
  }
`;

export default UserPanel;
