import React from "react";
import getOrdersByUserIdInTicket from "../../../../Apollo/queries/getOrdersByUserIdInTicket"; 
import { useQuery } from "@apollo/client";
import styled from 'styled-components';
import OrderByUser from "./OrderByUser";

const TablaByUser = ({id}) => {
 
    const { data } = useQuery(getOrdersByUserIdInTicket, {
        variables: { idUser: id },
    });
    console.log(data)
    
    return (

        <StyledTabla>
            {data?.getOrdersByUserIdInTicket.orders ? (
        data.getOrdersByUserIdInTicket.orders.map((order) => (
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
        ))
      ) : (
        <p></p>
      )}
        </StyledTabla>
    )

}
export default TablaByUser;
//orderId={data.getOrdersByUserIdInCart.orders[0].id}

const StyledTabla = styled.div`


`;