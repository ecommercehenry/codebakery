import React from "react";
import styled from "styled-components";
import GET_ALL_ORDERS_USER from "../../../Apollo/queries/getAllOrdersUser";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    minWidth: "100%",
  },
  bullet: {
    display: "inline-block",
    margin: "0 1px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  boton: {
    margin: "2em 0",
    background: "#5e3f71",
  },
});

const Prueba = ({ setClick, index }) => {
  let { id } = useParams();
  const { data } = useQuery(GET_ALL_ORDERS_USER, {
    variables: {
      userId: parseInt(id),
      fetchPolicy: "no-cache",
    },
  });
  let result;
  if (data) {
    if (data.getAllOrdersUser) {
      result = data.getAllOrdersUser.orders.filter((e) => e.id === index);
    }
  }

  const classes = useStyles();
  console.log(result)

  return (
    <StyledDetail>
      {result[0] &&
        result[0].lineal_order?.map((sectionId) => (
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.pos}
                color="textSecondary"
                gutterBottom
              >
                Product
                <br /> {sectionId.name}
              </Typography>
              <Typography className={classes.title} color="textSecondary">
                Price
                <br /> {sectionId.price}
              </Typography>
              <Typography className={classes.title} color="textSecondary">
                Quantity
                <br /> {sectionId.quantity}
              </Typography>
              <Typography variant="body2" component="p">
                Total Price
                <br /> $ {sectionId.quantity * sectionId.price}
                <br />
                {'"Code Backery"'}
              </Typography>
              <CardActions></CardActions>
            </CardContent>
          </Card>
        ))}
      <Button
        className={classes.boton}
        onClick={() => setClick(1)}
        size="small"
      >
        Exit
      </Button>
    </StyledDetail>
  );
};

export default Prueba;
const StyledDetail = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  white-space: normal;
  width: 60%;
  overflow-x: overlay;
  position: relative;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media(max-width: 850px){
    width: 90%!important
  }

  @media(max-width: 500px){
    width: 95%!important
  }
`;
