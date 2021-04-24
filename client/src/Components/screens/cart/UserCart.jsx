import React, { useEffect } from "react";
import GET_ORDERS_BY_USER_ID_IN_CART from "../../../Apollo/queries/getOrdersByUserIdInCart";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import ProductOnCart from "./ProductOnCart";
import { useDispatch, useSelector } from "react-redux";
import TotalToOrder from "./TotalToOrder";
import { setQuantityOrdersCardBackend } from "../../../actions/setQuantityOrdersCardBackend";


const UserCart = (cant) => {
  const dispatch = useDispatch()
  let storage = window.localStorage;
  let userId = parseInt(storage.id);
  const { data,loading, refetch } = useQuery(GET_ORDERS_BY_USER_ID_IN_CART, {
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
            refetch = {refetch}
          />
        ))
      ) : (
        <p>vacio</p>
      )}
      {data?.getOrdersByUserIdInCart?.orders.length ? <TotalToOrder productos={data.getOrdersByUserIdInCart.orders[0]}/> : <p>cargando</p>} 
      {/* <div className="total-container">
        {
          data?.getOrdersByUserIdInCart?.orders.length ? <PayButton productos={data.getOrdersByUserIdInCart.orders[0]}/> : <p>cargando</p> 
        }
        
      </div> */}
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
