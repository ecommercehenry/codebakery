import React, { useState, useEffect } from "react";
import Orden from "./Orden";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import getAllOrders from "../../../../Apollo/queries/getAllOrders";
import { useDispatch, useSelector } from "react-redux";
import { saveOrders } from "../../../../actions";

// @-WenLi
//traerme todas las ordenes hechas.. estan en la BD--Uso query de Apollo
//guardo en el reducer ordersReducer las ordenes para aplicar busquedas y filtros uso dispatch
//mostrarlas haciendo un mapeo sobre la data, renderizando cada vez un componente Orden

export default function TablaOrdenes() {
  let { data } = useQuery(getAllOrders);
  console.log("ddddddddddddddddddddddddddd", data);

  //guarda las ordenes en el store redux...
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(saveOrders(data?.getAllOrders));
  }, [data]);

  //traigo info del reducer..
  let { orders, search, ordersFilter } = useSelector((state) => state.reducer);
  //Debe renderizar todas las ordenes si no hay una busqueda
  //Si hay busqueda, renderiza el filtrado de la busqueda

  /**
  let components;
  if (ordersFilter.length) {
    components = ordersFilter;
  } else {
    components = orders;
  }
   */

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
