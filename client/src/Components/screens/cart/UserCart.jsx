import React, { useEffect } from "react";
import GET_ORDERS_BY_USER_ID_IN_CART from "../../../Apollo/queries/getOrdersByUserIdInCart";
import { useQuery } from "@apollo/client";
import PayButton from './PayButton'

import styled from "styled-components";
import ProductOnCart from "./ProductOnCart";
import { useSelector } from "react-redux";


const UserCart = () => {
  let storage = window.localStorage;
  let userId = parseInt(storage.id);
  const { data, previousData } = useQuery(GET_ORDERS_BY_USER_ID_IN_CART, {
    variables: { idUser: userId },
    fetchPolicy: "no-cache"
  });
  let { itemsToCart } = useSelector((state) => state.cart);
  useEffect(() => {}, [itemsToCart])
  console.log(data, previousData)
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
      <PayButton/>
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
