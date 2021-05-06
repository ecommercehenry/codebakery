import React, { useEffect } from "react";
import GET_ORDERS_BY_USER_ID_IN_CART from "../../../Apollo/queries/getOrdersByUserIdInCart";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation } from "../../PageAnimation";
import ProductOnCart from "./ProductOnCart";
import EmptyAlert from "./EmptyAlert"
import { useDispatch } from "react-redux";
import { setQuantityOrdersCardBackend } from "../../../actions/setQuantityOrdersCardBackend";
import { Link } from "react-router-dom";

const UserCart = () => {
  const dispatch = useDispatch();
  let storage = window.localStorage;
  let userId = parseInt(storage.id);
  const { data, refetch } = useQuery(GET_ORDERS_BY_USER_ID_IN_CART, {
    variables: { idUser: userId },
    fetchPolicy: "no-cache",
  });
  useEffect(() => {
    if (data) {
      if (data.getOrdersByUserIdInCart.orders[0]) {
        dispatch(
          setQuantityOrdersCardBackend(
            data.getOrdersByUserIdInCart.orders[0].lineal_order.length
          )
        );
      } else {
        dispatch(setQuantityOrdersCardBackend(0));
      }
    }
  }, [data, dispatch]);
  return (
    <StyledCart
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="products">
      {data?.getOrdersByUserIdInCart.orders[0] ? (
        data.getOrdersByUserIdInCart.orders[0].lineal_order.map((order) => (
          <ProductOnCart
            key={order.id}
            id={order.id}
            name={order.name}
            price={order.price}
            discount={order.discount}
            stock={order.stock}
            image={order.image}
            quantity={order.quantity}
            orderId={data.getOrdersByUserIdInCart.orders[0].id}
            refetch={refetch}
          />
        ))
      ) : (
        <EmptyAlert/>
      )}
      </div>
      <div className="buttonContainer">
        <Link className="text-decoration-none btn-a" to="/checkout">
          {data &&
          data?.getOrdersByUserIdInCart?.orders[0]?.lineal_order.length ? (
            <button className="payMee">Checkout</button>
          ) : (
            ""
          )}
        </Link>
      </div>
    </StyledCart>
  );
};
const StyledCart = styled(motion.div)`
  //background: black;
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .products{
    height: fit-content;
    width: 100%;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .buttonContainer {
    //background:violet;
    margin-top: 2rem;
    width: 80%;
    display: flex;
    justify-content: flex-end;
    .payMee {
      z-index: 1;
      display: flex;
      justify-content: center;
      padding: 1rem 3rem;
      background: #755588;
      color: white;
      border: none;
      border-radius: 20px;
      font-size: 1.2rem;
      font-weight: bold;
    }
  }

  @media (max-width: 1024px) {
    .buttonContainer {
      width: 90% !important;
    }
  }

  @media (max-width: 768px) {

    .products{
      margin-bottom: 6rem;
    }
    
    .buttonContainer{
      width: 100% !important;
      background: white;
      padding: 1em;
      position: fixed;
      bottom: 0;
    }
  }

  @media(max-width: 480px){
    .buttonContainer {
      width: 100% !important;

      .btn-a{
        width: 100%;
      }

      .payMee{
        width: 100%;
        button{
        width: 100%;
      }
      }
    }
  }
`;

export default UserCart;
