import React, { useEffect } from "react";
import { Route, Link } from "react-router-dom";
import NavBar from "../../navBar/NavBar";
import Hero from "../hero/Hero";
import Products from "../products/container/Products";
import Detail from "../../detail/Detail.jsx";
import { useMutation, useQuery } from "@apollo/client";
import CREATE_ORDER from "../../../../Apollo/mutations/createOrder";
import ADD_PRODUCT_TO_ORDER from "../../../../Apollo/mutations/addProductToOrder";
import GET_ORDERS_BY_USER_ID_IN_CART from "../../../../Apollo/queries/getOrdersByUserIdInCart";
import { useDispatch, useSelector } from "react-redux";
import { setQuantityOrdersCardBackend } from "../../../../actions/setQuantityOrdersCardBackend";


const Catalogue = () => {
  let storage = window.localStorage;
  let logged = storage.token ? true : false;
  let userId = logged ? parseInt(storage.id) : null;
  let { itemsToCart } = useSelector((state) => state.cart);

  const queryData = useQuery(GET_ORDERS_BY_USER_ID_IN_CART, {
    variables: { idUser: userId },
  });
  const dispatch = useDispatch()
  const [addProductToOrder, addData] = useMutation(ADD_PRODUCT_TO_ORDER);
  const [createOrder, createData] = useMutation(CREATE_ORDER);
 
  useEffect(()=>{
    console.log(queryData)
    // if(queryData.data.getOrdersByUserIdInCart?.orders[0]){
    //   dispatch(setQuantityOrdersCardBackend(queryData.data.getOrdersByUserIdInCart.orders[0].lineal_order.length))
    // }else{
    //   dispatch(setQuantityOrdersCardBackend(0))
    // }
    if(queryData?.data && !queryData.loading){
      if(logged){
        if(queryData.data.getOrdersByUserIdInCart.orders){
          if(queryData.data.getOrdersByUserIdInCart.orders[0]){
            console.log("DESPACHANDO ALGO")
            queryData.refetch().then(()=>{
              dispatch(setQuantityOrdersCardBackend(queryData.data.getOrdersByUserIdInCart.orders[0].lineal_order.length))
            })
          }else{
            console.log("DESPACHANDO ALGO 0")
            dispatch(setQuantityOrdersCardBackend(0))
          }
        }
      }
    }

    if(logged && itemsToCart.length){
      if (!queryData.loading){
        if (queryData.data.getOrdersByUserIdInCart.orders.length != 0) {
          

          let orderId = queryData.data.getOrdersByUserIdInCart.orders[0].id;
          itemsToCart.map((elem) => {
              
            addProductToOrder({
              variables:{
                orderId: orderId,
                 productId: elem.id,
                 quantity: elem.quantity,
              }
            })
          })
        }else{
          createOrder({
            variables:{
              idUser:userId,
              dataProducts: itemsToCart.map((elem) => {
                return{
                  id:elem.id,
                  quantity: elem.quantity,
                }
              })
            }
          })
        }
      }
    }
  },[queryData, itemsToCart])
  return (
    <>
      <NavBar color="white" />
      <Hero />
      <Products />
      <Route path="/catalogue/detail/:id">
        <Detail></Detail>
      </Route>
    </>
  );
};
export default Catalogue;
