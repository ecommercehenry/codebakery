import React, { useEffect } from "react";
import Orden from "./Orden";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import getAllOrders from "../../../../Apollo/queries/getAllOrders";
import { useDispatch, useSelector } from "react-redux";
import { saveOrders } from "../../../../actions";
import { toast } from "react-toastify";
import ButtonClear from "./ButtonClear";
import CheckFilters from "./CheckFilters";

//traerme todas las ordenes hechas.. estan en la BD--Uso query de Apollo
//guardo en el reducer ordersReducer las ordenes para aplicar busquedas y filtros uso dispatch
//mostrarlas haciendo un mapeo sobre la data, renderizando cada vez un componente Orden

export default function TablaOrdenes() {
  const customId = "custom-id-yes";
  let { data } = useQuery(getAllOrders);

  let ordersQ = data?.getAllOrders.orders;
 
  
  //guarda las ordenes en el store redux...
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(saveOrders(ordersQ));
  }, [data]);

  //traigo info del reducer..
  const { orders, search, filterOrders, idError, status, renderPage } = useSelector(
    (state) => state.ordersReducer
  );

  let dataRENDER;
  if (search && !filterOrders.length) {
    toast(`Search Not Found: "${idError}".`, {
      toastId: customId,
    });
    return <ButtonClear name="Volver al principio" />;
  } else if (search) {
    dataRENDER = renderPage; 
  } else if (status) {
    toast(`Search Not Found: "${idError}".`, {
      toastId: customId,
    });
    return <ButtonClear name="Volver al principio" />;
  } else {
    //console.log("MUESTRA DATA RENDER POR EL ELSE..ORDERS");
    dataRENDER = renderPage;
  }

console.log('render', dataRENDER)
  return (
    <StyledTablaOrdenes>
      <ButtonClear name="Clear" />
      <CheckFilters />
      {/* Checkbox filters */}
      { dataRENDER?.length > 0 ? (
        dataRENDER.map((ord) => {
          return <Orden id={ord.id} key={ord.id} orden={ord} />;
        })
      ) : dataRENDER?.length === 0 ? (<p>There are no matches for your search</p>):(
        <p>Loading...</p>
      )}
    </StyledTablaOrdenes>
  );
}

const StyledTablaOrdenes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 0.5rem;
  margin-left: 0;
  height: 100%;
`;
