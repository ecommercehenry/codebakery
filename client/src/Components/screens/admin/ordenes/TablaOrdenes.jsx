import React, { useState, useEffect } from "react";
import Orden from "./Orden";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import getAllOrders from "../../../../Apollo/queries/getAllOrders";
import { useDispatch, useSelector } from "react-redux";
import { saveOrders } from "../../../../actions";
import  OrderDetail  from "../ordenes/OrdenDetail"; 
import SortByPrice from "./SortByPrice";

// @-WenLi
//traerme todas las ordenes hechas.. estan en la BD--Uso query de Apollo
//guardo en el reducer ordersReducer las ordenes para aplicar busquedas y filtros uso dispatch
//mostrarlas haciendo un mapeo sobre la data, renderizando cada vez un componente Orden

export default function TablaOrdenes() {
  let { data } = useQuery(getAllOrders);
  let ordersQ = data?.getAllOrders.orders;

  //State local del state para poder mostrar los detalles
  const [detail, setDetail] = useState(false); 
  //guarda las ordenes en el store redux...
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(saveOrders(ordersQ));
  }, [data]);

  //traigo info del reducer..
  const { ordersRender, search, filterOrders, sortbyPrice, sort } = useSelector(
    (state) => state.ordersReducer
  );
  //let { orders, search, ordersFilter } = useSelector((state) => state.reducer);

  //Debe renderizar todas las ordenes si no hay una busqueda
  //Si hay busqueda, renderiza el filtrado de la busqueda
  let dataRENDER;
  if (search) {
    console.log("MUESTRA DATA RENDER POR..SEARCH");
    dataRENDER = filterOrders;
  } else if (sort) {
    console.log("MUESTRA DATA RENDER POR..SORT");
    dataRENDER = sortbyPrice;
    // console.log("SORT-BY-PRICE", sortbyPrice)
  } else if(detail){
    dataRENDER = ordersRender
  } else {
    console.log("MUESTRA DATA RENDER POR EL ELSE..ORDERS");
    dataRENDER = ordersRender;
  }

  return (
    <StyledTablaOrdenes>

      {
       detail === false ? (
        dataRENDER && dataRENDER.map((ord) => {
          return <Orden id={ord.id} key={ord.id} orden={ord} setDetail={setDetail} />;
        })
      ) : 
        <OrderDetail/>
      }
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
