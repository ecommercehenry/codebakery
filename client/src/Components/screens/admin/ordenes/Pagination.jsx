import React, { useEffect, useState } from "react";
import TablePagination from '@material-ui/core/TablePagination';
import { useSelector, useDispatch } from "react-redux";
import { changePage } from "../../../../actions";

export default function Pagination() {

    let {orders}= useSelector(state => state.ordersReducer);

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

      return (
        <TablePagination
          component="div"
          count={orders?.length}
          page={page}
          onChangePage={handleChangePage}
          rowsPerPage={rowsPerPage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      );

}