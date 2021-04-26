import React from "react";
import TablePagination from '@material-ui/core/TablePagination';
import { useSelector, useDispatch } from "react-redux";
import { changePage } from "../../../../actions";
import styled from "styled-components";
import { withStyles } from "@material-ui/core";

export default function Pagination() {


    let {orders, filterOrders, search, filterStatus, statusOrders}= useSelector(state => state.ordersReducer);

    let {status} = useSelector((state)=>state.theme);

    let longitud;

    if (search && filterOrders.length > 0) {
      // console.log(filterStatus.length, 'aysyayysays', statusOrders.length)
      longitud= filterStatus.length > 0 ? statusOrders.length : filterOrders?.length;
    } else {
      console.log('no search')
      longitud= filterStatus.length > 0 ? statusOrders.length : orders?.length;
   
    };


    //console.log('estado redux', orders);
    const dispatch = useDispatch();

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    

    const handleChangePage = (event, newPage) => {
       
        //esta accion se va a enviar con un numero q significa el valor
        //inicial de las ordenes que se van a renderizar 
        //ejemplo: Si es 0, va a renderizar de 0 a 9, si es 1 renderiza de 10 a 19
        setPage(newPage);
        let num = newPage* 10;
        dispatch(changePage(num));

      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };
     
      //cuando se da click en el next o previous se debe despachar 
      //una acción de tipo NEXT O PREVIOUS
      
     // let cont= orders?.slice( page * rowsPerPage + rowsPerPage);

     // console.log('numero de paginas', cont);

     const StyledTablePagination = withStyles((theme) => ({
      root: {
        height: 60,
        },
    }))(TablePagination);

      return (

        <StyledPagination light={status}>
          <StyledTablePagination
            component="div"
            count={longitud}
            page={page}
            onChangePage={handleChangePage}
            rowsPerPage={rowsPerPage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />

        </StyledPagination>
      );

}


const StyledPagination = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  /* float: right; */
  width: 100%;
  color:${({light})=>light ? 'black' : 'white'};
  background: white;
  z-index: 3;
  bottom: 0;
`;