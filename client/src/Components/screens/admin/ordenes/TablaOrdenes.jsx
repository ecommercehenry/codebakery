import React, { useEffect } from "react";
import Orden from "./Orden";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import GET_All_ORDERS from "../../../../Apollo/queries/getAllOrders";
import { useDispatch, useSelector } from "react-redux";
import { saveOrders } from "../../../../actions";
import { toast } from "react-toastify";
import ButtonClear from "./ButtonClear";
import Pagination from "./Pagination";
//traerme todas las ordenes hechas.. estan en la BD--Uso query de Apollo
//guardo en el reducer ordersReducer las ordenes para aplicar busquedas y filtros uso dispatch
//mostrarlas haciendo un mapeo sobre la data, renderizando cada vez un componente Orden

export default function TablaOrdenes({setPromo}) {
  let theme = useSelector((state) => state.theme);
  const customId = "custom-id-yes";

  let { data } = useQuery(GET_All_ORDERS);
  let ordersQ = data?.getAllOrders.orders;


  //guarda las ordenes en el store redux...
  const dispatch = useDispatch();

  useEffect(() => {
    //setPromo(false)
    dispatch(saveOrders(ordersQ));
  }, [data, dispatch, ordersQ, setPromo]);

  //traigo info del reducer..
  const { search, filterOrders, idError, status, renderPage } = useSelector(
    (state) => state.ordersReducer
  );
  // console.log(renderPage, 'uuuuuuu')
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
    dataRENDER = renderPage;
  }

  return (
    <StyledTablaOrdenes light={theme.status}>
      <table border="0" cellPadding="0" cellSpacing="0">
      <thead>
          <tr>
            <th width="10%" id="img-column">Date</th> 
            <th width="10%" id="name-column">Order ID</th>
            <th width="10%">User ID</th>
            <th width="10%">User Name</th>
            <th width="10%">Status</th>
            {/* <th width="10%">Cancelled</th> */}
            <th width="10%" id="price-column">Total</th>
            <th width="10%">Action</th>
          </tr>
        </thead>
      <tbody>
      { dataRENDER?.length > 0 ? (
        dataRENDER.map((ord) => {
          return <Orden id={ord.id} key={ord.id} orden={ord} />; 
        })
      ) : dataRENDER?.length === 0 ? (<p>There are no matches for your search</p>):(
        <tr>
          <th>Loading...</th>
          </tr>
      )}
      </tbody>
      <tfoot>
          <tr>
            <td id="footer" colSpan="6">
                <Pagination />
            </td>
          </tr>
        </tfoot>
      </table>
    </StyledTablaOrdenes>
  );
}

const StyledTablaOrdenes = styled.div`
padding: 2rem;
padding-top: 0;
background: ${({ light }) => 
  (light ? 
  "white" : 
  "#292929")
};
border-radius: 20px;
display: flex;
flex-direction: column;
align-items: flex-start;
width: 100%;
height: 83vh;
margin-bottom: 2rem;
box-shadow: 0 1px 2px 0 rgb(0 0 0 / 30%);
clear: both;
overflow: hidden;


table {
  padding: 1rem 0;
  position: relative;
  width: 100%;
  overflow-y: auto;
  float: left;

  thead {
    display: table;
    overflow: scroll;
    width: 100%;

    th {
      position: sticky;
      top: 0;
      padding: 1rem 1em;
      background: ${({ light }) => 
        (light ? 
        "white" : 
        "#292929")
      };
      border-bottom: 1px solid #ddd;
    }
  }

  tbody {
    display:block;
    overflow-y:scroll;
    width: 101.3%;
    height: 66vh;

    td {
      height: 5rem;
      border-bottom: 1px solid #ddd;
      padding:0 1em;
    }
  }

  tfoot {

    td{
      position: sticky;
      top: 0;
      padding: 1rem 1em;
      background: ${({ light }) => 
        (light ? 
        "white" : 
        "#292929")
      };
    }

    #pagination-container{
      display: flex;
      justify-content: flex-end;
      align-items: center;
      
      #pg-btns{
        display: flex;

        button{
          color: #4e4e4e;
          background: none;
          border: none;
          margin: 0 1rem;

          &:hover{
            color: #2f2e2e
          }
        }
      }
    }

    td {
      padding-top: 1em;
      height: 100%;
      border-bottom: none;
    }
  }
}
`;