import React, { useEffect } from "react";
import GuestCart from '../GuestCart'


const Cart = () => {
 
  let storage = window.localStorage;

  let logueado = storage.token? true: false;
  let cart = localStorage.getItem('cart')
  return <div> 
      {
          logueado ? <p>cart</p> : <GuestCart/>
      } </div>;
};

export default Cart;
