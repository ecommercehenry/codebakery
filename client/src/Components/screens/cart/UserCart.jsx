import React, { useEffect } from "react";
import GET_ORDERS_BY_USER_ID_IN_CART from "../../../Apollo/queries/getOrdersByUserIdInCart";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import ProductOnCart from "./ProductOnCart";
import { useDispatch, useSelector } from "react-redux";
import TotalToOrder from "./TotalToOrder";
import { setQuantityOrdersCardBackend } from "../../../actions/setQuantityOrdersCardBackend";
import { Link } from "react-router-dom";


const UserCart = (cant) => {
  const dispatch = useDispatch()
  let storage = window.localStorage;
  let userId = parseInt(storage.id);
  const { data, loading, refetch } = useQuery(GET_ORDERS_BY_USER_ID_IN_CART, {
    variables: { idUser: userId },
    fetchPolicy: "no-cache",
  });
  useEffect(()=>{
    if(data){
      if(data.getOrdersByUserIdInCart.orders[0]){
      dispatch(setQuantityOrdersCardBackend(data.getOrdersByUserIdInCart.orders[0].lineal_order.length))
      }else{
        dispatch(setQuantityOrdersCardBackend(0))
      }
    }

  },[data])

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
            refetch={refetch}
          />
        ))
      ) : (
        <p></p>
      )}
      <Link className="text-decoration-none" to="/checkout">
        <div className="buttonContainer">
          {
            data && data.getOrdersByUserIdInCart.orders[0].lineal_order.length ? <button className="payMee">Checkout</button> : ""
          }
          
        </div>
      </Link>
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
  .buttonContainer {
    //background:violet;
    margin-top: 1rem;
    width: 87%;
    display: flex;
    justify-content: flex-end;
    .payMee {
      z-index: 1;
      display: flex;
      justify-content: center;
      padding: 1rem 3rem;
      background: #755588;
      color: white;
      border: none;
      border-radius: 20px;
      font-size: 1.2rem;
      font-weight: bold;
    }
  }
`;

export default UserCart;
