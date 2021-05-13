import React from "react";
import getOrdersByUserIdInTicket from "../../../../Apollo/queries/getOrdersByUserIdInTicket";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import OrderByUser from "./OrderByUser";

const TablaByUser = ({ id }) => {
  const { data } = useQuery(getOrdersByUserIdInTicket, {
    variables: { idUser: id },
    fetchPolicy: "no-cache",
  });

  return (

    <StyledTablaa>
       <div className='container-profile'>
            <h1>For Review</h1>
      </div>
      {data?.getOrdersByUserIdInTicket.orders ? (
        data.getOrdersByUserIdInTicket.orders.map((order) =>
          order.lineal_order.map((order) => (
            <OrderByUser
              key={order.id}
              id={order.id}
              name={order.name}
              price={order.price}
              image={order.image}
              quantity={order.quantity}
              orderId={data.getOrdersByUserIdInTicket.orders.id}
            />
          ))
        )
      ) : (
        <p>You have no current Orders</p>
      )}
    </StyledTablaa>

  );
};
export default TablaByUser;
//orderId={data.getOrdersByUserIdInCart.orders[0].id}

const StyledTablaa = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: #f1f1f1;
  margin-top: 1rem;
  .container-profile{
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    // margin-bottom: 40rem;
    width: 100%;
    height: 3.3rem;
    background-color: #f1f1f1;
    z-index: 1;
    font-weight: bold!important;
  }
  h1{
    font-weight: 700;
    color: #5e3f71;
    margin-bottom: 0;
  }

  @media (max-width: 850px) {
    .container-profile{
      display:none;
    }
  }
`;
