import React from "react";
import GET_ORDERS_BY_USER_ID_IN_CART from "../../../../Apollo/queries/getOrdersByUserIdInCart";
import { useQuery } from "@apollo/client";
import styled from 'styled-components';
import OrderByUser from "./OrderByUser";

const TablaByUser = ({id}) => {
 
    const { data } = useQuery(GET_ORDERS_BY_USER_ID_IN_CART, {
        variables: { idUser: id },
    });
    
    return (

        <StyledTabla>
            {data?.getOrdersByUserIdInCart.orders[0] ? (
        data.getOrdersByUserIdInCart.orders[0].lineal_order.map((order) => (
          <OrderByUser
            key={order.id}
            id={order.id}
            name={order.name}
            price={order.price}
            image={order.image}
            quantity={order.quantity}
            orderId={data.getOrdersByUserIdInCart.orders[0].id}
           
          />
        ))
      ) : (
        <p></p>
      )}
        </StyledTabla>
    )

}
export default TablaByUser;

const StyledTabla = styled.div`


`;