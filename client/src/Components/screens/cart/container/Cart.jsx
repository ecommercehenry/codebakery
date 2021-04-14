import React, { useState, useEffect } from "react";
import getProductByArray from "../../../../Apollo/queries/getProductByArray";
import { useQuery } from "@apollo/client";
import { gql } from "graphql-tag";

const Cart = () => {
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
  // var cart = localStorage.getItem('cart');
  let [items, setItems] = useState([]);
  const { data } = useQuery(query);

  useEffect(() => {
    data?.getProductByArray.forEach( product =>
      setItems(product, ...items)
    );
  }, [data]);

  console.log(data, items);
  return <div> carrito </div>;
};

export default Cart;
