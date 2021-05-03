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


function ListCRUD({setPromo}) {
  const { data, loading } = useQuery(allProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    setPromo(false)
    if (!loading) {
      dispatch(saveProducts(data.product));
    }
  }, [data]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = useState([0, rowsPerPage - 1])
  
  const totalPages = data?.product.length
  const handlePageChange = async (event, newPage) => {
    if(newPage === 0){
      await setRows([0, rowsPerPage])
    } else {
      let newFinalRow = newPage * rowsPerPage
      await setRows([newFinalRow, newFinalRow + (rowsPerPage)])
    }
  
    await setPage(newPage)
  }

  const handleChangeRowsPerPage = async (event) => {
    console.log(event.target.value)
    await setRowsPerPage(parseInt(event.target.value, 10));
  };

  useEffect(() => {
    (async() => await setRows([0, rowsPerPage - 1]))()
    setPage(0)
    console.log('after change',rows, page)
  }, [rowsPerPage])

  function isScrollable(element) {
    /* console.log(element.attributes) */
    const childNodes = element
    /* let heightSum = 0;
    for (let key in childNodes) {
      if(typeof childNodes[key]?.offsetHeight !== "undefined")
          heightSum += parseInt(childNodes[key]?.offsetHeight, 10)
      } */
    
    /* return element.scrollHeight > heightSum; */
    return childNodes
  };


  if(document.getElementById('table-body')){
    var myParent = document.getElementById('table-body').attributes
   /*  document.getElementById('table-body').style.display =  */ 
    console.log(isScrollable(myParent))
  }

  //
  return (
    <StyledListCRUD>
      <table border="0" cellPadding="0" cellSpacing="0" className="flexy">
          {/* <colgroup>
            <col span="1" style={{width: "2%"}}/>
            <col span="1" style={{width: "30%"}}/>
            <col span="1" style={{width: "25%"}}/>
            <col span="1" style={{width: "10%"}}/>
            <col span="1" style={{width: "10%"}}/>
            <col span="2" style={{width: "5%"}}/>
          </colgroup> */}
        <thead>
          <tr>
            <th width="10%" id="img-column">{/* Blank characters -->*/}⠀⠀⠀⠀⠀⠀</th> 
            <th width="30%" id="name-column">Name</th>
            <th width="30%">Categories</th>
            <th width="10%">Stock</th>
            <th width="10%" id="price-column">Price</th>
            <th width="10%">Action</th>
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
    },
}))(TablePagination);

const StyledListCRUD = styled.div`
  padding: 2rem;
  padding-top: 0;
  background: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  background: white;
  height: 83vh;
  margin-bottom: 2rem;
  box-shadow: 0px 5px 20px 0px rgba(0,0,0,0.07);
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
        background: white;
        border-bottom: 1px solid #ddd;
      }
    }

    tbody {
      display:block;
      overflow-y:auto;
      width: 100%;
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
        background: white;
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
