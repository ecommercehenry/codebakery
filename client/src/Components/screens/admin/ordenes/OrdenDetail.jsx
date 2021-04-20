import React from "react"; 
import { useSelector } from "react-redux";

//NECESITA TRAERSE UNA ORDEN POR ID DE ORDEN...
const OrderDetail = () => {

let { orders } = useSelector((state) => state.ordersReducer);
console.log(orders, 'mis ordenes'); 
    
    return(
        <div>
            HOLA
        </div>
    )
}

export default OrderDetail

