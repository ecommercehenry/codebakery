import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { gql } from "graphql-tag";
import {useSelector} from 'react-redux';


const Cart = () => {
  let {itemsToCart} = useSelector((state)=>state.reducer);
  let dataDePrueba = JSON.stringify([2, 1, 5, 3]);
  let storage = window.localStorage;
  let query = gql`
    {
  getProductByArray(array: ${dataDePrueba} ){
    name
  }
}
  `;
  // localStorage.setItem("cart", aca va la otra cosa);
  var cart = localStorage.getItem('cart');
  const { data } = useQuery(query);
  console.log(data); 

  useEffect(() => {
    if (data){
      localStorage.setItem("cart", JSON.stringify(data.getProductByArray))
    } 
  }, [data]);

  console.log( storage, itemsToCart);

  return <div> {JSON.parse(cart).map(producto => <li>{producto.name}</li>)} </div>;
};

export default Cart;
