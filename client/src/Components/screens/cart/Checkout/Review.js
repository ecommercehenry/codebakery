import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { useQuery } from "@apollo/client";
import GET_ORDERS_BY_USER_ID_IN_CART from "../../../../Apollo/queries/getOrdersByUserIdInCart";
import getUserById from "../../../../Apollo/queries/getUserById";

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  //variables 
  let total = 0;
  let shipping = document.getElementById("shipping")
  //styles
  const classes = useStyles();

  //queries
  const orderData = useQuery(GET_ORDERS_BY_USER_ID_IN_CART, {
    variables: { idUser: parseInt(localStorage.id) },
    fetchPolicy: "no-cache",
  });
  const userData = useQuery(getUserById, {
    variables: { id: parseInt(localStorage.id) },
    fetchPolicy: "no-cache",
  });
  console.log(orderData)
  if(shipping && orderData.data){
    if(orderData.data.getOrdersByUserIdInCart != undefined){
      if(orderData.data.getOrdersByUserIdInCart.orders[0].storeId === null){
        console.log("es null")
      }else{
        shipping.style = "display: none"
      }
    }
  }
  if (!orderData.loading) {
    if (orderData.data.getOrdersByUserIdInCart.orders.length != 0) {
      orderData.data.getOrdersByUserIdInCart.orders[0].lineal_order.map(
        (elem) => (total = total + elem.price * elem.quantity)
      );
    }
  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Ticket
      </Typography>
      <List disablePadding>
        {orderData?.data?.getOrdersByUserIdInCart?.orders[0]?.lineal_order?.map(
          (product) => (
            <ListItem className={classes.listItem} key={product.name}>
              <ListItemText
                primary={product.name}
                secondary={`cantidad ${product.quantity}`}
              />
              <Typography variant="body2">{`$${product.price}`}</Typography>
            </ListItem>
          )
        )}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            ${total}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2} id="shipping">
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>
            User: {userData?.data?.getUserById?.name}
          </Typography>
          <Typography gutterBottom>
            DNI: {userData?.data?.getUserById?.dni}
          </Typography>
          <Typography gutterBottom>
            Address : {userData?.data?.getUserById?.address}
          </Typography>
          <Typography gutterBottom>
            Telephone: {userData?.data?.getUserById?.phoneNumber}
          </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          {/* en caso de incluirse descuentos deberian ponerse aca */}
        </Grid>
      </Grid>
      <Grid container spacing={2} id="pickup">
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Store pickup
          </Typography>
          <Typography gutterBottom>
            User: {userData?.data?.getUserById?.name}
          </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          {/* en caso de incluirse descuentos deberian ponerse aca */}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
