import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useQuery, gql } from "@apollo/client";

//styles
import styled from "styled-components";

//components
import ProductOnCart from "./ProductOnCart";

const GuestCart = () => {
  let storage = window.localStorage;
  let { itemsToCart } = useSelector((state) => state.reducer);
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
    if (itemsToCart.length) {
      localStorage.setItem(`cart`, JSON.stringify(itemsToCart));
    }
    console.log("nuevo", itemsToCart, storage);
  }
  let cart = localStorage.getItem("cart");
  // storage.clear() // para vaciar el storage
  return (
    <StyledCart>
      <button onClick={() => storage.clear()}>vaciar carrito</button>
      {cart ? (
        JSON.parse(storage.cart).map((elem) => (
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
        <p>vacio</p>
      )}
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

export default GuestCart;
