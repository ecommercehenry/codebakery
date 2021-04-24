import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import cartIcon from "../../../../../src/icons/cartNav.svg";
import GET_ORDERS_BY_USER_ID_IN_CART from "../../../../../src/Apollo/queries/getOrdersByUserIdInCart"; 
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import { HiOutlineShoppingCart } from "react-icons/hi";

const Count = ({color}) => {
let storage = window.localStorage;
let userId = parseInt(storage.id);
  let logeed = storage.token ? true : false; 
  
  const itemsFromCart = useSelector((state) => state.cart.itemsToCart); 
  const itemsFromCartBackend = useSelector((state) => state.counterReducer.ordersInBacked); 
  // let valor = 0; 
  let sum = 0;

  if (itemsFromCart !== undefined) {
    itemsFromCart.map((elem) => {
      sum = sum + elem.quantity;
    });
  }
  // if(data !== undefined){
  //   if (data.getOrdersByUserIdInCart.orders.length != 0 ){
  //     data.getOrdersByUserIdInCart.orders[0].lineal_order.map((element) =>{
  //       valor = valor + element.quantity
  //     }); 
  //   }
  // } 

  return (
    <StyledCount>
      <div>
        <HiOutlineShoppingCart size="2.1rem" color={color} className="cart-icon"/>
        <span className="count" style={{color:color, fontWeight:"bold"}}>
        {
          logeed ? itemsFromCartBackend : sum
        }
        </span>
      </div>
    </StyledCount>
  );
};

export default Count;

const StyledCount = styled.div`
    height: 3.1 rem;
    width: 3.1 rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .count{
        background: #E44949;
        padding: 2px;
        border-radius: 99px; 
        color: #F8F0F0 ; 
    }
    .cart-icon{
      height: "2.1rem";
      width: "2.1rem";
      padding: "2px"
    }
    `; 
