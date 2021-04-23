import React  from "react";
import  GET_All_ORDERS from "../../../../Apollo/queries/getAllOrders";
import  { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

// Y realizar los Detalles de css 
const OrderDetail = () => {
let { id } = useParams();
let { data } = useQuery(GET_All_ORDERS)
let result; 
result = data?.getAllOrders?.orders.filter((element) => element.id == id)

  return (
    <div>
      {result[0]?.lineal_order?.map((element) => (
          <span>
            <span className='order'>Ordertttt: {element.id}</span>
            <h3 className='namee'>Name: {element.name}</h3>
            Product: <img className='image' src={element.image} alt=''/>
            <h3 className='cant'>Cant: {element.quantity}</h3>
            <h3 className='pricee'>Price: {element.price}</h3>
            <h3 className='subTotal'>Sub Total: {element.price * element.quantity}</h3>
          </span>
      ))
      }
    </div>
  );
};


export default OrderDetail;
