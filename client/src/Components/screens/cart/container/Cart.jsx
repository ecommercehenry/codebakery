import React, {useState, useEffect} from "react";
import productById from '../../../../Apollo/queries/productById'
import {useQuery} from '@apollo/client'

const Cart = (dataDePrueba = [1,2,5,3,8]) => {
    let storage = window.localStorage;
    // localStorage.setItem('cart',  );
    // var cart = localStorage.getItem('cart');
    let [items, setItems] = useState([]);

    console.log(items, storage)
  return <div> carrito </div>;
};

export default Cart;
