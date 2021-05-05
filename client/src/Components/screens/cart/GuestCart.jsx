import React from "react";
import { useSelector } from "react-redux";
import { useQuery, gql } from "@apollo/client";
//styles
import styled from "styled-components";
import {motion} from 'framer-motion';
import {pageAnimation} from '../../PageAnimation'
//components
import ProductOnCart from "./ProductOnCart";
import EmptyAlert from "./EmptyAlert"
import TotalToOrder from "./TotalToOrder"

const GuestCart = () => {
  let { itemsToCart } = useSelector((state) => state.cart);
  let productsArray = itemsToCart.map((elem) => elem.id);
  productsArray = JSON.stringify(productsArray);


  const getProductByArray = gql`
    {
        getProductByArray(array:${productsArray}) {
            id
            image
            name
            price
            stock
            discount
        }
    }
    `;
  let { data } = useQuery(getProductByArray);
 
  if (data !== undefined) {
    itemsToCart.forEach((item) => {
      data["getProductByArray"].forEach((elem) => {
        if (item.id === elem.id) {
          item.name = elem.name;
          item.price = elem.price;
          item.stock = elem.stock;
          item.image = elem.image;
          item.discount = elem.discount;
        }
      });
    });
    localStorage.setItem(`cart`, JSON.stringify(itemsToCart));
  }
  return (
    <StyledCart variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
        {data && itemsToCart.length !==0 ? (
          itemsToCart.map((elem) => (
            <ProductOnCart
              id={elem.id}
              name={elem.name}
              price={elem.price}
              stock={elem.stock}
              image={elem.image}
              quantity={elem.quantity}
              discount={elem.discount}
            />
          ))
        ) : (
          <EmptyAlert/>
        )}
        <TotalToOrder/> 
    </StyledCart>
  );
};

const StyledCart = styled(motion.div)`
  //background: red;
  height: fit-content;
  width: 100%;
  display: flex;
  flex-wrap:wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index:2;
  button{
    z-index:1;
  }
  
`;

export default GuestCart;
