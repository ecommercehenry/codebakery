import React from "react";
import { CardContent } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import GET_ALL_STORES from "../../Apollo/queries/getAllStores"
import {useQuery} from "@apollo/client"



const useStyles = makeStyles({
  root: {
    margin: "10px",
    minWidth: 275,
    backgroundColor: "#9675A9",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const SucursalCard = () => {
  const {data, loading} = useQuery(GET_ALL_STORES)
  const classes = useStyles();
  return (
    <div>
      {data?.getAllStores?.map((elemento) => (
        <Card className={classes.root} key={elemento.id}>
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
    </div>
  );
};

export default SucursalCard;
