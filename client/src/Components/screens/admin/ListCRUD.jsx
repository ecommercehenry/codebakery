import React from "react";
import TextCRUD from "./TextCRUD";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import allProducts from "../../../Apollo/queries/allProducts";
import { useDispatch } from "react-redux";
import { saveProducts } from "../../../actions/saveProductsAction";
import styled from "styled-components";
import TablePagination from '@material-ui/core/TablePagination';
import { withStyles } from "@material-ui/core";
import { useSelector } from "react-redux";

function ListCRUD({setPromo}) {
let { status } = useSelector((state) => state.theme);
  const { data, loading, refetch } = useQuery(allProducts,{
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (!loading) {
      dispatch(saveProducts(data.product));
      refetch()
    }
  }, [data, dispatch, setPromo, loading, refetch]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = useState([0, rowsPerPage - 1])
  
  const totalPages = data?.product.length
  const handlePageChange = async ( newPage) => {
    if(newPage === 0){
      setRows([0, rowsPerPage])
    } else {
      let newFinalRow = newPage * rowsPerPage
      setRows([newFinalRow, newFinalRow + (rowsPerPage)])
    }
  
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
     setRowsPerPage(parseInt(event.target.value, 10));
  };

  useEffect(() => {
    (() => setRows([0, rowsPerPage - 1]))()
    setPage(0)
  }, [rowsPerPage])

  return (
    <StyledListCRUD light={status}>
      <table border="0" cellPadding="0" cellSpacing="0" className="flexy">
        <thead>
          <tr>
            <th width="10%" id="img-column">{/* Blank characters -->*/}⠀⠀⠀⠀⠀⠀</th> 
            <th width="30%" id="name-column">Name</th>
            <th width="30%">Categories</th>
            <th width="10%">Stock</th>
            <th width="10%" id="price-column">Price</th>
            <th width="10%" style={{textAlign:"center"}}>Action</th>
          </tr>
        </thead>
        <tbody id="table-body">
          {data ? (
            data.product.slice(rows[0], rows[1]).map((item) => {
              return <TextCRUD id={item.id} key={item.id} />;
            })
          ) : (
            <tr>
              <th>Loading...</th>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td id="footer" colSpan="6">
                <StyledTablePagination component="div"
                    count={totalPages}
                    page={page}
                    onChangePage={handlePageChange}
                    rowsPerPage={rowsPerPage}
                    onChangeRowsPerPage={handleChangeRowsPerPage} 
                />
            </td>
          </tr>
        </tfoot>
      </table>
    </StyledListCRUD>
  );
}
export default ListCRUD;

const StyledTablePagination = withStyles((theme) => ({
  root: {
    height: 60,
    color:"#9a48cc"
    },
}))(TablePagination);

const StyledListCRUD = styled.div`
  padding: 2rem;
  padding-top: 0;
  //background: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  background: ${({ light }) => 
    (light ? 
    "white" : 
    "#292929")
  };
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
	    overflow: auto;
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
      display:flex;
      flex-flow: column nowrap;
      overflow-y:scroll;
      height: 66vh;
      justify-content:flex-start;


      td {
        justify-content:center;
        text-align: center;
        height: 5rem;
        border-bottom: 1px solid #ddd;
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
