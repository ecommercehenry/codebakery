import React from "react";
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

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#5E3F71",
    color: "#000000",
  },
  body: {
    fontSize: 14,
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
    margin: "3rem",
  },
  container: {
    width: "70rem",
    display: "flex",
  },
});

const StoresPanel = () => {
  const classes = useStyles();
  const { data } = useQuery(GET_ALL_STORES, {
    fetchPolicy: "no-cache",
  });
  return (
    <TableContainer component={Paper} className={classes.container}>
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
    </TableContainer>
  );
};

export default StoresPanel;
