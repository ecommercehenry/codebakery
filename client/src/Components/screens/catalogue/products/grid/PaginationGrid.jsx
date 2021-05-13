import React from "react";
import TablePagination from '@material-ui/core/TablePagination';
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { withStyles } from "@material-ui/core";
import { changeGridPage } from "../../../../../actions";


export default function PaginationGrid() {

    let { allProduct } = useSelector(
        (state) => state.reducer
      );
    let {status} = useSelector((state)=>state.theme);
    let longitud = allProduct?.length || 0;


    const dispatch = useDispatch();

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    

    const handleChangePage = (event, newPage) => {
       
        //esta accion se va a enviar con un numero q significa el valor
        //inicial de las ordenes que se van a renderizar 
        //ejemplo: Si es 0, va a renderizar de 0 a 9, si es 1 renderiza de 10 a 19
        setPage(newPage);
        // console.log('hola', newPage)
        let num = newPage* 10;
        dispatch(changeGridPage(num));

    };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };
     
      //cuando se da click en el next o previous se debe despachar 
      //una acción de tipo NEXT O PREVIOUS
      
     // let cont= orders?.slice( page * rowsPerPage + rowsPerPage);


     const StyledTablePagination = withStyles((theme) => ({
      root: {
        height: 60,
        color:"#333",
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
  justify-content: center;
`;