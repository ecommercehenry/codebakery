import React, { useEffect } from "react";
import GET_ORDERS_BY_USER_ID_IN_CART from "../../../Apollo/queries/getOrdersByUserIdInCart";
import { useQuery } from "@apollo/client";

import styled from "styled-components";
import ProductOnCart from "./ProductOnCart";



const UserCart = () => {
  let storage = window.localStorage;
  let userId = parseInt(storage.id);
  const {data, loading} = useQuery(GET_ORDERS_BY_USER_ID_IN_CART, {variables:{idUser: userId} });
  // useEffect(() => {
  //   if(!loading){
  //    var renderCart = data.getOrdersByUserIdInCart.orders[0].lineal_order
  //   }
  //  },[loading])
  console.log(data)
  return   <StyledCart>
  {data?.getOrdersByUserIdInCart? (
    data.getOrdersByUserIdInCart.orders[0].lineal_order.map((order) => (
        <ProductOnCart
          id={order.id}
          name={order.name}
          price={order.price}
          stock={order.stock}
          image={order.image}
          quantity={order.quantity}
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
