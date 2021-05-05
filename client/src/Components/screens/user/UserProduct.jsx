import React from "react";
import GET_ALL_ORDERS_USER from "../../../Apollo/queries/getAllOrdersUser";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
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
  titlee: {
    position: "absolute",
    left: "7em",
    bottom:"13em"
  },
  table: {
    margin: "3rem",
    //background:"red",
  },
  container: {
    width: "70rem",
    display: "flex",
    //background:"blue",
    marginTop: "6em",
    marginLeft: "13em",
  },
});
const UserProduct = () => {
  const classes = useStyles();

  let { id } = useParams();
  const { data } = useQuery(GET_ALL_ORDERS_USER, {
    variables: {
      userId: parseInt(id),
      fetchPolicy: "no-cache",
    },
  });

  return (
    <div>
      <h1 className={classes.titlee} >Order history</h1>
      <TableContainer component={Paper} className={classes.container}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell> ID</StyledTableCell>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Price</StyledTableCell>
              <StyledTableCell align="left">Quantity</StyledTableCell>
              <StyledTableCell align="left">Total</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.getAllOrdersUser?.orders[0]?.lineal_order.map((e, i) => (
              <StyledTableRow key={e.id}>
                <StyledTableCell align="left">{e.id}</StyledTableCell>
                <StyledTableCell component="th" e="row">
                  {e.name}
                </StyledTableCell>
                <StyledTableCell align="left">$ {e.price}</StyledTableCell>
                <StyledTableCell align="left">{e.quantity}</StyledTableCell>
                <StyledTableCell align="left">
                  $ {e.quantity * e.price}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserProduct;
