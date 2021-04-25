import React from "react";
import NavBar from "../../navBar/NavBar";
import GuestCart from "../GuestCart";
import UserCart from "../UserCart";
import styled from 'styled-components'
import CartTabs from "../CartTabs.jsx";

const Cart = () => {
  let storage = window.localStorage;
  let logueado = storage.token ? true : false;

  return <StyledCart>
    <div id="navBackground">
    <NavBar color="white"/>
    </div>
    <div id="cartBackground">
      <div id="cartContainer">
      <CartTabs />
    {logueado ? <UserCart /> : <GuestCart />}
      </div>
    </div>
    </StyledCart>;
};

const StyledCart = styled.div`
display:flex;
min-height: 100vh;
flex-direction: column;

#cartBackground{
  width: 100vw;
  display: flex;
  justify-content: center;
  background: #EFEDED;
  flex-grow: 1;

  #cartContainer{
    padding: 4rem 0;
    max-width: 1200px;
    width: 90vw;
    background: white;
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
