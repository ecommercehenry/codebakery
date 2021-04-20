import React, { useEffect } from "react";
import GuestCart from "../GuestCart";
import UserCart from "../UserCart";

const Cart = () => {
  let storage = window.localStorage;
  let logueado = storage.token ? true : false;

  return <div>{logueado ? <UserCart /> : <GuestCart />} </div>;
};

export default Cart;
