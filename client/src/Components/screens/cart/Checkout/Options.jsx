import React, { useState } from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import PayButton from "../PayButton";
import GET_ORDERS_BY_USER_ID_IN_CART from "../../../../Apollo/queries/getOrdersByUserIdInCart";
import Stripe from "./Stripe";

const Options = () => {
  let userId = parseInt(localStorage.id);
  const { data } = useQuery(GET_ORDERS_BY_USER_ID_IN_CART, {
    variables: { idUser: userId },
    fetchPolicy: "no-cache",
  });
  const [mp, setMp] = useState(false);
  const [stripe, setStripe] = useState(false);

  const mpHandler = () => {
    setMp(true);
  };

  const stripeHandler = () => {
    setStripe(true);
  };
  if (mp) {
    let stripe = document.getElementsByClassName("stripe");
    stripe[0].style = "display: none";
  }
  if(stripe){
    let mercadopago = document.getElementsByClassName("mp");
    mercadopago[0].style = "display: none";
  }
  return (
    <StyledOptions>
      <div className="options">
        <div className="mp" onClick={mpHandler}>
          <img
            src="https://res.cloudinary.com/ggonzalescbs/image/upload/v1620857137/code_bakery/p6shcnd7k58gugfzuvhb.jpg"
            alt="mercadopago"
          />
        </div>
        <div className="stripe" onClick={stripeHandler}>
          <img
            src="https://res.cloudinary.com/ggonzalescbs/image/upload/v1618977971/code_bakery/stripe_ioxcsn.png"
            alt="stripe"
          />
        </div>
      {mp ? (
        <PayButton productos={data?.getOrdersByUserIdInCart?.orders[0]} />
      ) : (
        ""
      )}
      {stripe ? <Stripe /> : ""}
      </div>
    </StyledOptions>
  );
};

const StyledOptions = styled.div`
  width: 100%;
  height: 55vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  //background:red;
  .options {
    width: 55%;
    height: 100%;
    //padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    //background:blue;
    .mp,
    .stripe {
      width: 100%;
      height: 30vh;
      padding: 1rem;
      border-radius: 7px;
      object-fit: contain;
      cursor: pointer;
      overflow: hidden;
      img {
        width: 100%;
        height:auto;
        min-width: 50%;
        
      }
    }
  }
`;

export default Options;
