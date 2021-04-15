import React from "react";
import { Route, Link } from "react-router-dom";
import NavBar from "../../navBar/NavBar";
import Hero from "../hero/Hero";
import Products from "../products/container/Products";
import Detail from "../../detail/Detail.jsx";
import { useMutation, gql, useQuery } from "@apollo/client";

const Catalogue = () => {
  let storage = window.localStorage;
  let logged = storage.token ? true : false;
  let cartExistence = storage.cart ? true : false;

  if (logged) {
    let email = JSON.stringify(storage.email);
    const getUserByEmail = gql`
  {
  getUserByEmail(email: ${email}) {
    id
  }
}
  `;
    let { data ,loading} = useQuery(getUserByEmail);
    if (!loading){
      let userId = JSON.stringify(data.getUserByEmail.id)
      if (cartExistence) {
        let newCart = JSON.stringify(storage.cart)    
        
        
        
        const createOrder = gql`
      mutation{
  createOrder(idUser:1,
    dataProducts:
    [
    {id: ,quantity:100}
    ]
  ) {
    id
  }
}
      `
      useMutation(createOrder)
      }
    }
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
