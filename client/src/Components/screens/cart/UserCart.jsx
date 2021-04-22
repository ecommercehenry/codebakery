import React from "react";
import GET_ORDERS_BY_USER_ID_IN_CART from "../../../Apollo/queries/getOrdersByUserIdInCart";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import ProductOnCart from "./ProductOnCart";
import PayButton from "./PayButton";

const UserCart = () => {
  let storage = window.localStorage;
  let userId = parseInt(storage.id);
  const { data,loading, refetch } = useQuery(GET_ORDERS_BY_USER_ID_IN_CART, {
    variables: { idUser: userId },
    fetchPolicy: "no-cache",
  });

  return (
    <StyledCart>
      {data?.getOrdersByUserIdInCart.orders[0] ? (
        data.getOrdersByUserIdInCart.orders[0].lineal_order.map((order) => (
          <ProductOnCart
          key={order.id}
            id={order.id}
            name={order.name}
            price={order.price}
            stock={order.stock}
            image={order.image}
            quantity={order.quantity}
            orderId={data.getOrdersByUserIdInCart.orders[0].id}
            refetch = {refetch}
          />
        ))
      ) : (
        <p>vacio</p>
      )}
      <div className="total-container">
        {
          data?.getOrdersByUserIdInCart?.orders.length ? <PayButton productos={data.getOrdersByUserIdInCart.orders[0]}/> : <p>cargando</p> 
        }
        
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
