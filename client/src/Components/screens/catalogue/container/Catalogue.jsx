import React from "react";
import { Route, Link } from "react-router-dom";
import NavBar from "../../navBar/NavBar";
import Hero from "../hero/Hero";
import Products from "../products/container/Products";
import Detail from "../../detail/Detail.jsx";
import { useMutation, gql } from "@apollo/client";

const Catalogue = () => {
  let storage = window.localStorage;
  let logged = storage.token ? true : false;
  let cart = storage.cart ? true : false;

  if (logged && cart){
      const createOrder = gql`
      mutation{
  createOrder(idUser:1,
    dataProducts:
    [
    {id:1,quantity:100},
    {id:5,quantity:10},
    {id:4,quantity:11}
    ]
  ){
    id
    status
    lineal_order{
      userId
      price
      quantity
      product{
        id
        name
        description
        price
        stock
        image
        categories{
          id
          name
        }
      }
    }
  }
}`
  }
  return (
    <>
      <NavBar color="white" />
      <Hero />
      <Products />
      <Link to="/catalogue/detail/1">Producto</Link>
      <Route path="/catalogue/detail/:id">
        <Detail></Detail>
      </Route>
    </>
  );
};

export default Catalogue;
