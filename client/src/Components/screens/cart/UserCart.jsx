import React, { useEffect } from "react";
import GET_ORDERS_BY_USER_ID_IN_CART from "../../../Apollo/queries/getOrdersByUserIdInCart";
import { useQuery } from "@apollo/client";

import styled from "styled-components";
import ProductOnCart from "./ProductOnCart";



const UserCart = () => {
  let storage = window.localStorage;
  let userId = parseInt(storage.id);
  const {data, loading} = useQuery(GET_ORDERS_BY_USER_ID_IN_CART, {variables:{idUser: userId} });

console.log(data)
  return   <StyledCart>
  {data?.getOrdersByUserIdInCart? (
    data.getOrdersByUserIdInCart.orders.map((order) => (
        <ProductOnCart
          id={5}
          name={'queso crema'}
          price={3}
          stock={15}
          image={'lol'}
          quantity={10}
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
