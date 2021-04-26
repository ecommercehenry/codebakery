import React from "react";
import { useSelector } from "react-redux";
import NavBar from "../../navBar/NavBar";
import GuestCart from "../GuestCart";
import UserCart from "../UserCart";
import styled from 'styled-components'
import CartTabs from "../CartTabs.jsx";

const Cart = () => {
  let storage = window.localStorage;
  let logueado = storage.token ? true : false;
  let {status} = useSelector((state)=>state.theme);

  return (
    <StyledCart light={status}>
      <div id="navBackground">
        <NavBar color="white"/>
      </div>
      <div id="cartBackground" light={status}>
        <div id="cartContainer" light={status}>
          <CartTabs />
          {logueado ? <UserCart /> : <GuestCart />}
        </div>
      </div>
    </StyledCart>
  )  
};

const StyledCart = styled.div`
  color:${({light})=>light 
  ? 'inherit' 
  : 'white'};
  display:flex;
  min-height: 100vh;
  flex-direction: column;

  #cartBackground{
    background:${({light})=>light 
    ? '#EFEDEE' 
    : '#555555'};
    color:${({light})=>light 
    ? 'inherit' 
    : 'white'};
    width: 100vw;
    display: flex;
    justify-content: center;
    flex-grow: 1;

    #cartContainer{
      background:${({light})=>light 
      ? 'white' 
      : '#222222'};
      color:${({light})=>light 
      ? 'inherit' 
      : 'white'};
      padding: 4rem 0;
      max-width: 1200px;
      width: 90vw;
      margin: 2rem 0;
      border-radius: 20px;
      display:flex;
      flex-direction: column;
      align-items: center;
    }
  }

  #navBackground{
    height: fit-content;
    width: 100vw;
    background-color: #5e3f71;
  }
`

export default Cart;
