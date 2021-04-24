import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { useQuery } from "@apollo/client";
import GET_ORDERS_BY_USER_ID_IN_CART from '../../../../Apollo/queries/getOrdersByUserIdInCart'
import getUserById from '../../../../Apollo/queries/getUserById'


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
  const classes = useStyles();
  const orderData = useQuery(GET_ORDERS_BY_USER_ID_IN_CART, {
    variables: { idUser: parseInt(localStorage.id) },
  });
  const userData = useQuery(getUserById, {
    variables: { id: parseInt(localStorage.id) },
    fetchPolicy: 'no-cache'
  });
  let total =0
  if(!orderData.loading){
    if(orderData.data.getOrdersByUserIdInCart.orders.length != 0){
    orderData.data.getOrdersByUserIdInCart.orders[0].lineal_order.map((elem) =>  total = total + (elem.price)*(elem.quantity))
    }
  }
  //console.log(userData.data)
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Ticket 
      </Typography>
      <List disablePadding>
        { orderData?.data?.getOrdersByUserIdInCart?.orders[0]?.lineal_order?.map((product) => (
          
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={`cantidad ${product.quantity}`} />
            <Typography variant="body2">{`$${product.price}`}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            ${total}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>Comprador: {userData?.data?.getUserById?.name}</Typography>
          <Typography gutterBottom>DNI: {userData?.data?.getUserById?.dni}</Typography>
          <Typography gutterBottom>Direccion : {userData?.data?.getUserById?.address}</Typography>
          <Typography gutterBottom>Tel: {userData?.data?.getUserById?.phoneNumber}</Typography>

        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}