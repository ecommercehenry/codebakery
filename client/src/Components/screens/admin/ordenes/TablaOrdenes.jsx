import React,{ useState,useEffect } from 'react';
import Orden from "./Orden"
import styled from 'styled-components';

//traerme todas las ordenes hechas.. estan en la BD
//mostrarlas haciendo un mapeo sobre la data, renderizando cada vez un componente Orden


export default function TablaOrdenes(){

    

    //a eliminar cuando  pueda traer los datos
    const ordenes = [
    {
        date: "02-04-2021",
        orderId: "02A24cd11",
        userId: 344,
        status: 1,
        cancelled: false,
        total: 98.50,
    },
    {
        date: "02-04-2021",
        orderId: "02A24cd11",
        userId: 304,
        status: 2,
        cancelled: false,
        total: 98.50,
    },
    {
        date: "02-04-2021",
        orderId: "02A24cd11",
        userId: 444,
        status: 3,
        cancelled: false,
        total: 98.50,
    },
    {
        date: "02-04-2021",
        orderId: "02A24cd11",
        status: {
            paid: true,
            sent: false,
            recived: false,
        },
        cancelled: false,
        total: 98.50,
    },
    {
        date: "02-04-2021",
        orderId: "02A24cd11",
        status: {
            paid: true,
            sent: false,
            recived: false,
        },
        cancelled: false,
        total: 98.50,
    },
   
]
// date: "02-04-2021",
// orderId: "02A24cd11",
// userId: "344"
// status: 1,
// cancelled: false,
// total: 98.50,
    return (
        <StyledTablaOrdenes>ESTE ES EL COMPONENTE TABLA ORDENES
             {ordenes ? (
            ordenes.map((ord) => {
              return <Orden
                  id ={ord.orderId}
                  key = {ord.orderId}
                  orden = {ord}
              />                    
           })
          ) : (
            <p>loading...</p>
          )}
        </StyledTablaOrdenes>
    )

}

const StyledTablaOrdenes =styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
width:80vw;
margin: 2rem;
margin-top: 0.5rem;
height: 100%;

`;