import React from "react";
import { CardContent } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const sucursales = [
  {
    name: "Code Bakery Sucursal Unicenter",
    direccion: "Unicenter planta baja",
    telefono: "4721-6058",
  },
  {
    name: "Code Bakery Sucursal Norcenter",
    direccion: "Norcenter primer piso",
    telefono: "4721-3094",
  },
  {
    name: "Code Bakery Sucursal Hypolito Yrigoyen",
    direccion: "Hypolito yrigoyen 5555",
    telefono: "4723-6582",
  },
];
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
  const classes = useStyles();
  return (
    <div>
      {sucursales.map((elemento) => (
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {elemento.name}
            </Typography>
            <Typography className={classes.title}>
              {elemento.direccion}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {elemento.telefono}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SucursalCard;
