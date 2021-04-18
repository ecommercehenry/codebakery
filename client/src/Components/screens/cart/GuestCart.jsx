import React,{useEffect} from "react";
import { useSelector } from "react-redux";
import { useQuery, gql } from "@apollo/client";
import {useDispatch} from 'react-redux';
import {removeAll} from '../../../actions/cartActions';
//styles
import styled from "styled-components";
//components
import ProductOnCart from "./ProductOnCart";
import EmptyAlert from "./EmptyAlert"
import TotalToOrder from "./TotalToOrder"

const GuestCart = () => {
  const dispatch = useDispatch()
  let storage = window.localStorage;
  let { itemsToCart } = useSelector((state) => state.cart);
  let productsArray = itemsToCart.map((elem) => elem.id);
  productsArray = JSON.stringify(productsArray);

  const resetCartHandler = () => {
    dispatch(removeAll())
  }

  const getProductByArray = gql`
    {
        getProductByArray(array:${productsArray}) {
            id
            image
            name
            price
            stock
        }
    }
    `;
  let { data } = useQuery(getProductByArray);
  //falta boton comprar y que redirija a login si usuario es invitado
  //cuando usario tenga id (este logueado o registrado) guardar datos en tabla order
  //??????? existe tabla order??? => SI EXISTE
  ///si existe tabla order -> faltaria mutation --->> condicional para saber si esta logueado o not//
  //si esta logueado se dispara mutation que guarda los productos en tabla order con status: carrito
  //meter info cartItems a local storage
  //cliente no logueado => entra a este carrito y puede ver productos
  //img | nombre | cant | precio
  //(si catidad >stock =?se muestra una alerta de falta de stock)
  //la info de produc esta en local storage!
  //si usuario se loguea => local storage pasa a tabla orden con status = carrito

  //modelo de carrito guest price INT! quantity INT! en cuanto se loguea y se convierte en orden
  //se lo relaciona con una orden y con los productos

  
  if (data !== undefined) {
    itemsToCart.forEach((item) => {
      data["getProductByArray"].forEach((elem) => {
        if (item.id === elem.id) {
          item.name = elem.name;
          item.price = elem.price;
          item.stock = elem.stock;
          item.image = elem.image;
        }
      });
    });
    localStorage.setItem(`cart`, JSON.stringify(itemsToCart));
  }
  //let cart = localStorage.getItem("cart");
  // storage.clear() // para vaciar el storage
  return (
    <StyledCart>
      
        <button onClick={resetCartHandler}>vaciar carrito</button>
        {data && itemsToCart.length !==0 ? (
          itemsToCart.map((elem) => (
            <ProductOnCart
              id={elem.id}
              name={elem.name}
              price={elem.price}
              stock={elem.stock}
              image={elem.image}
              quantity={elem.quantity}
            />
          ))
        ) : (
          <EmptyAlert/>
        )}
        <TotalToOrder/> 
      
      
      {/* <TotalToOrder/> */}
    </StyledCart>
  );
};

const StyledCart = styled.div`
  margin-top:10rem;
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
