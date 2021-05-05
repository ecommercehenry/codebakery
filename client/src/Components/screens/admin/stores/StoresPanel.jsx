import React,{useEffect} from "react";
import { useQuery } from "@apollo/client";
import GET_ALL_STORES from "../../../../Apollo/queries/getAllStores";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import StoreOptions from "./StoreOptions";
import styled from "styled-components";
import ManageStores from "./ManageStores";
import { Route } from "react-router";
import ModifyStore from "./ModifyStore";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "white",
    color: "#000000",
    fontWeight: "bold",
  },
  body: {
    fontSize: 14
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const useStyles = makeStyles({
  table: {
    margin: "auto",
    width: "90%",
    marginTop: "2rem",
    borderRadius: "20px"
  }
});

const StoresPanel = ({setPromo, setStores}) => {
  const classes = useStyles();
  const { data } = useQuery(GET_ALL_STORES, {
    fetchPolicy: "no-cache",
  });
  useEffect(() => {
    setPromo(false)
  },[setPromo])
  return (
      <StyledTableContainer>
      <StoreOptions setStores={setStores}/>
      <Route exact path="/admin/stores">
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Store ID</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Address</StyledTableCell>
            <StyledTableCell align="left">Phone</StyledTableCell>
            <StyledTableCell align="left">Lat</StyledTableCell>
            <StyledTableCell align="left">long</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.getAllStores?.map((store) => (
            <StyledTableRow key={store.id}>
              <StyledTableCell align="left">{store.id}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {store.name}
              </StyledTableCell>
              <StyledTableCell align="left">{store.address}</StyledTableCell>
              <StyledTableCell align="left">
                {store.phoneNumber}
              </StyledTableCell>
              <StyledTableCell align="left">{store.lat}</StyledTableCell>
              <StyledTableCell align="left">{store.long}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      </Route>

      <Route path="/admin/stores/new">
            <ManageStores />
      </Route>

      <Route path="/admin/stores/modify">
            <ModifyStore />
      </Route>
      </StyledTableContainer>
  );
};

const StyledTableContainer = styled.div`
display: flex;
position: relative;
background: white;
flex-direction: column;
justify-content: space-between;
align-items: center;
height: 83vh;
width: 100%;
padding: 2rem;
padding-top: 0;
border-radius: 20px;
box-shadow: 0 1px 2px 0 rgb(0 0 0 / 30%);
`

export default StoresPanel;
