import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
//NECESITA TRAERSE UNA ORDEN POR ID DE ORDEN...
//Faltaria recibir el id correcto 
// Y realizar los Detalles de css 
const OrderDetail = ({ id }) => {
let { orders } = useSelector((state) => state.ordersReducer);

  return (
    <StyledOrder>
      {orders[0].id === id ? (
        orders[0].lineal_order.map((order) => (
          <span>
            <span className='order'>Order: {order.id}</span>
            <h3 className='namee'>Name: {order.name}</h3>
            <img className='image' src={order.image} alt=''/>Product
            <h3 className='cant'>Cant: {order.quantity}</h3>
            <p className='pricee'>Price: {order.price}</p>
          </span>
        ))
      ) : ''
      }
    </StyledOrder>
  );
};

const StyledOrder = styled.div`

  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    width: 40rem;
    //background:blue;
    height: 40%;
    overflow: hidden;
    img {

  .namee {
    width: 40%;
    height: 100%;
    //background:red;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .quantityy {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 18%;
    height: 90%;
    //background:violet;
  }
  .pricee {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 18%;
    height: 89%;
    //padding:0.rem 0;
    //background:green;
    box-sizing: border-box;
    .subtotal {
      //height:80%;
      padding-top: 0.5rem;
      font-size: 1.5rem;
      //background:red;
      /* display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center; */
      //box-sizing:border-box;
    }
  }
`;

export default OrderDetail;
