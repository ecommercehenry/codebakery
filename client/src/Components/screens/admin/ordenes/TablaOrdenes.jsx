import React,{ useState,useEffect } from 'react';
import Orden from "./Orden"
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import getAllOrders from '../../../../Apollo/queries/getAllOrders';
import { useDispatch, useSelector } from 'react-redux';
import { saveOrders } from "../../../../actions"
<<<<<<< HEAD
=======
import SortByPrice from './SortByPrice';


>>>>>>> origin/SE

// @-WenLi
//traerme todas las ordenes hechas.. estan en la BD--Uso query de Apollo
//guardo en el reducer ordersReducer las ordenes para aplicar busquedas y filtros uso dispatch
//mostrarlas haciendo un mapeo sobre la data, renderizando cada vez un componente Orden


<<<<<<< HEAD
  //guarda las ordenes en el store redux...
  const dispatch = useDispatch();
  useEffect(() => {
=======

export default function TablaOrdenes(){
        
   let { data } = useQuery(getAllOrders)    
      
   console.log(data);
   //guarda las ordenes en el store redux...
   const dispatch = useDispatch()
   useEffect(() => {
>>>>>>> origin/SE
    dispatch(saveOrders(data?.getAllOrders));
  }, [data]);
  
  
  //traigo info del reducer..
<<<<<<< HEAD
  const {search, filterOrders } = useSelector((state) => state.reducer);
=======
  const {search, filterOrders, sortbyPrice,sort} = useSelector((state) => state.ordersReducer);
  //let { orders, search, ordersFilter } = useSelector((state) => state.reducer);
>>>>>>> origin/SE
  

  //Debe renderizar todas las ordenes si no hay una busqueda 
  //Si hay busqueda, renderiza el filtrado de la busqueda
  let dataRENDER;  
  if(search){
    dataRENDER = filterOrders
  }else{
    dataRENDER = data?.getAllOrders;
  }

//   dataRENDER?.orders.map(o => {
//     let filter = {
//       id: o.id,
//       userId: o.userId,
//       date:o.creation,
//       price:o.lineal_order.map(u=> u).map(g => g.price),
//       cancelled: o.cancelled
//     }
//   console.log('filter', filter);
// })
  
    return (
        <StyledTablaOrdenes>
             {dataRENDER ? (
            dataRENDER.orders.map((ord) => {
              return <Orden
                  id ={ord.id}
                  key = {ord.id}
                  orden = {ord}
              />                    
           })
          ) : (
            <p>loading...</p>
          )}
        </StyledTablaOrdenes>
<<<<<<< HEAD
    )  
=======
      
    )

  
>>>>>>> origin/SE
}

const StyledTablaOrdenes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80vw;
  margin: 2rem;
  margin-top: 0.5rem;
  height: 100%;
`
