import React from "react";
import GET_ALL_ORDERS from "../../../../Apollo/queries/getAllOrders";
import { useQuery } from "@apollo/client";  
import { useSelector } from "react-redux";

//NECESITA TRAERSE UNA ORDEN POR ID DE ORDEN...
const OrderDetail = ({id}) => {

let { orders } = useSelector((state) => state.ordersReducer);
const { data } = useQuery(GET_ALL_ORDERS); 
console.log(data, 'esta es mi query')
console.log(orders[0].id, 'mi su id ')
let arr = []
if(orders !== undefined){
    arr = orders.filter((element) => 
      element.id === id)
  }
  return (
    <div>
    {
       arr.length > 0 ? arr.order?.map((element) => 
        <div key={element.id}>
        <h1>{element.name}</h1> 
        <p>{element.image}</p> 
        <p>{element.price}</p>
        </div>
    ): "Cargando" 
    }
    </div>
  );
};

export default OrderDetail;
