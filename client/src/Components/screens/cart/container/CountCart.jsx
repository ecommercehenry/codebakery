import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { HiOutlineShoppingCart } from "react-icons/hi";

const Count = ({color}) => {
let storage = window.localStorage;

  let logeed = storage.token ? true : false; 
  
  const itemsFromCart = useSelector((state) => state.cart.itemsToCart); 
  const itemsFromCartBackend = useSelector((state) => state.counterReducer.ordersInBacked);  
  let sum = 0;

  if (itemsFromCart !== undefined) {
    itemsFromCart.forEach((elem) => {
      sum = sum + elem.quantity;
    });
  } 

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
