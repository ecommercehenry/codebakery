import React, { useEffect } from "react";
import { Route, Link } from "react-router-dom";
import NavBar from "../../navBar/NavBar";
import Hero from "../hero/Hero";
import Products from "../products/container/Products";
import Detail from "../../detail/Detail.jsx";
import { useMutation } from "@apollo/client";
import CREATE_ORDER from '../../../../Apollo/mutations/createOrder'

const Catalogue = () => {
  let storage = window.localStorage;
  let logged = storage.token ? true : false;
  let cartExistence = storage.cart ? true : false;

  // if (logged && cartExistence) {
      let userId = parseInt(storage.id)
        let cart = JSON.parse(storage.cart)
        const [createOrder, {data, loading}] =useMutation(CREATE_ORDER)
      useEffect(()=>{

        createOrder({variables:{
          idUser: userId,
          dataProducts: cart
        }})

      },[])
      // }

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
