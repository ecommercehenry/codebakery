import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#FFFFFF",
    position: "absolute",
    bottom: "0px",
    left: "3px",
    width: "95%",
  },
  title: {
    color: "#5E3F71",
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
    left: "20rem",
    color: "#5E3F71",
  },
}));
const StoreOptions = ({ setStores }) => {
  const classes = useStyles();
  const clickHandler = (e) => {
    e.preventDefault();
    setStores(e.currentTarget.value);
  };
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1>Stores</h1>
      </div>
      <ButtonGroup
        size="large"
        aria-label="large outlined primary button group"
        className={classes.buttonGroup}
      >
        <Button value="seeStores" onClick={clickHandler}>
          See Stores
        </Button>
        <Button value="addStore" onClick={clickHandler}>
          Add a Store
        </Button>
        <Button value="modifyStore" onClick={clickHandler}>
          Modify a Store
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default StoreOptions;
