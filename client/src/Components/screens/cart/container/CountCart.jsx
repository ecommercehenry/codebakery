import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import cartIcon from "../../../../../src/icons/cartNav.svg";
import styled from "styled-components";


const Count = () => {
  const itemsFromCart = useSelector((state) => state.cart.itemsToCart); 

  let sum = 0;
  console.log(localStorage,  '%%%%')
  console.log(itemsFromCart,  '%%%%')
  if (itemsFromCart !== undefined) {
    itemsFromCart.map((elem) => {
      sum = sum + elem.quantity;
    });
  }

  return (
    <StyledCount>
      <div>
        <img
          src={cartIcon}
          alt="cat icon"
          style={{ height: "2.1rem", width: "2.1rem", padding: "2px" }}
        />
        <span className="count">{sum}</span>
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
        border-radius: 99px; 
        color: #F8F0F0 ; 
    }
    `; 
