import React,{ useState,useEffect } from 'react';
import Orden from "./Orden"
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import getAllOrders from '../../../../Apollo/queries/getAllOrders';
import { useDispatch, useSelector } from 'react-redux';
import { saveOrders } from "../../../../actions"
import SortByPrice from './SortByPrice';



// @-WenLi
//traerme todas las ordenes hechas.. estan en la BD--Uso query de Apollo
//guardo en el reducer ordersReducer las ordenes para aplicar busquedas y filtros uso dispatch
//mostrarlas haciendo un mapeo sobre la data, renderizando cada vez un componente Orden

export default function TablaOrdenes() {
  let { data } = useQuery(getAllOrders);
  console.log("ddddddddddddddddddddddddddd", data);

export default function TablaOrdenes(){
        
   let { data } = useQuery(getAllOrders)    
      
   console.log(data);
   //guarda las ordenes en el store redux...
   const dispatch = useDispatch()
   useEffect(() => {
    dispatch(saveOrders(data?.getAllOrders));
  }, [data]);
  
  
  //traigo info del reducer..
  const {search, filterOrders } = useSelector((state) => state.reducer);
  //let { orders, search, ordersFilter } = useSelector((state) => state.reducer);
  
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
      
    )

  return (
    <StyledTablaOrdenes>
      ESTE ES EL COMPONENTE TABLA ORDENES
      {data ? (
        data.getAllOrders.map((ord) => {
          return <Orden id={ord.id} key={ord.id} orden={ord} />;
        })
      ) : (
        <p>loading...</p>
      )}
    </StyledTablaOrdenes>
  );
}

const StyledTablaOrdenes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80vw;
  margin: 2rem;
  margin-top: 0.5rem;
  height: 100%;
`;
