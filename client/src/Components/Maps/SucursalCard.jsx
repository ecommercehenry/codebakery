import React from "react";
import { CardContent } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import GET_ALL_STORES from "../../Apollo/queries/getAllStores";
import { useQuery } from "@apollo/client";
import styled from "styled-components";

const useStyles = makeStyles({
  root: {
    margin: "10px",
    width: "100%",
    backgroundColor: "#9675A9",
    height: "7rem",
    padding: 0
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const SucursalCard = () => {
  const { data } = useQuery(GET_ALL_STORES);
  const classes = useStyles();
  return (
    <StyledCardMove>
      {data?.getAllStores?.map((elemento) => (
        <Card className={`${classes.root} card`} key={elemento.id}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {elemento.name}
            </Typography>
            <Typography className={classes.title}>
              {elemento.address}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {elemento.phoneNumber}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </StyledCardMove>
  );
};

const StyledCardMove = styled.div`
width: 100%;
display:flex;
flex-direction: column;

@media (min-width: 1024px){
  padding-right: 2em;
}

@media (max-width: 1024px){
  padding-right: 2em;

  .card{
    height: 9rem;
  }
}

@media (max-width: 768px){
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding-right: 1em;

  .card{
    width: 14rem!important;
    height: 8rem;
  }
}

@media (max-width: 520px) {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  .card{
    width: 90vw!important;
    height: 8rem;
  }
}
`

export default SucursalCard;
