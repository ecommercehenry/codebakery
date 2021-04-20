import React, { useEffect, useState } from "react";
import GET_ORDERS_BY_USER_ID_IN_CART from "../../../Apollo/queries/getOrdersByUserIdInCart";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import ProductOnCart from "./ProductOnCart";
import PayButton from "./PayButton";

const UserCart = () => {
  let storage = window.localStorage;
  let userId = parseInt(storage.id);
  const { data,loading } = useQuery(GET_ORDERS_BY_USER_ID_IN_CART, {
    variables: { idUser: userId },
    fetchPolicy: "no-cache",
  });
  let total =0
  
  if(!loading && data){
    data.getOrdersByUserIdInCart.orders[0].lineal_order.map((order) =>{
      total = total + (order.price * order.quantity)})
  }
  return (
    <StyledCart>
      {data?.getOrdersByUserIdInCart.orders[0] ? (
        data.getOrdersByUserIdInCart.orders[0].lineal_order.map((order) => (
          <ProductOnCart
            id={order.id}
            name={order.name}
            price={order.price}
            stock={order.stock}
            image={order.image}
            quantity={order.quantity}
            orderId={data.getOrdersByUserIdInCart.orders[0].id}
          />
        ))
      ) : (
        <p>vacio</p>
      )}
      <div className="total-container">
        <h1>el total es = {total}</h1>
        <PayButton total={JSON.stringify(total)}/>
      </div>
    </StyledCart>
  );
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
