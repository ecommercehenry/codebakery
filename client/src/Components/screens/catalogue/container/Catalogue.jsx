import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import NavBar from "../../navBar/NavBar";
import Hero from "../hero/Hero";
import Products from "../products/container/Products";
import Detail from "../../detail/Detail.jsx";
import { useQuery } from "@apollo/client";
import GET_ORDERS_BY_USER_ID_IN_CART from "../../../../Apollo/queries/getOrdersByUserIdInCart";
import { useDispatch, useSelector } from "react-redux";
import { setQuantityOrdersCardBackend } from "../../../../actions/setQuantityOrdersCardBackend";
import styled from "styled-components";
const Catalogue = () => {
  let storage = window.localStorage;
  let logged = storage.token ? true : false;
  let userId = logged ? parseInt(storage.id) : null;
  let { itemsToCart } = useSelector((state) => state.cart);

  const queryData = useQuery(GET_ORDERS_BY_USER_ID_IN_CART, {
    variables: { idUser: userId },
    fetchPolicy: "no-cache",
  });
  const dispatch = useDispatch();
  let orderId = queryData?.data?.getOrdersByUserIdInCart?.orders[0]?.id;
  useEffect(() => {
    orderId = queryData?.data?.getOrdersByUserIdInCart?.orders[0]?.id;
  }, [queryData]);
  useEffect(() => {
    if (queryData?.data && !queryData.loading) {
      if (logged) {
        if (queryData.data.getOrdersByUserIdInCart.orders) {
          if (queryData.data.getOrdersByUserIdInCart.orders[0]) {
            queryData.refetch().then(() => {
              dispatch(
                setQuantityOrdersCardBackend(
                  queryData.data.getOrdersByUserIdInCart.orders[0].lineal_order
                    .length
                )
              );
            });
          } else {
            dispatch(setQuantityOrdersCardBackend(0));
          }
        }
      }
    }
  }, [queryData, itemsToCart]);
  return (
    <StyledCatalogue>
      <NavBar color="white" />
      <Hero />
      <Products orderId={orderId} refetchCatalogue={queryData.refetch} />
      <Route path="/catalogue/detail/:id">
        <Detail refetchCatalogue={queryData.refetch}></Detail>
      </Route>
    </StyledCatalogue>
  );
};

const StyledCatalogue = styled.div`
  width: 100vw;
  box-sizing: border-box;
`;

export default Catalogue;
