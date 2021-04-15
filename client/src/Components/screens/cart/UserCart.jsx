import React, { useEffect } from "react";
import getOrdersByUserIdInCart from '../../../Apollo/queries/getOrdersByUserIdInCart'
import {useQuery} from '@apollo/client'


const UserCart = () => {
   let storage = window.localStorage;
  let logueado = storage.token? true: false;
  let userId = parseInt(localStorage.id)
  const [getOrdersByUserIdInCart, {data, loading}] = useQuery(getOrdersByUserIdInCart)

  getOrdersByUserIdInCart({variables:{
      userId: userId,
  }})
  console.log(data)

  return <div> 
       </div>;
};

export default UserCart;