import React, { useEffect } from "react";
import GET_ORDERS_BY_USER_ID_IN_CART from "../../../Apollo/queries/getOrdersByUserIdInCart";
import { useQuery } from "@apollo/client";

import styled from "styled-components";
import ProductOnCart from "./ProductOnCart";



const UserCart = () => {
  let storage = window.localStorage;
  let userId = parseInt(storage.id);
  const {data, loading} = useQuery(GET_ORDERS_BY_USER_ID_IN_CART, {variables:{userId: userId} });

console.log(data)
  return <StyledCart>
  {data ? (
    data.getOrdersByUserIdInCart[0].lineal_order.map((elem) => (
      <ProductOnCart
        id={elem.id}
        name={elem.lineal_order[0].product[0].name}
        price={elem.lineal_order[0].product[0].price}
        stock={elem.lineal_order[0].product[0].stock}
        image={elem.lineal_order[0].product[0].image}
        quantity={elem.lineal_order[0].quantity}
      />
    ))
  ) : (
    <p>vacio</p>
  )}
</StyledCart>
};
const StyledCart = styled.div`
  //background: black;
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default UserCart;
