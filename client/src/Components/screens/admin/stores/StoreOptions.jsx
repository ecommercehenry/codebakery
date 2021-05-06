import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#F1F1F1",
    position: "absolute",
    top: "2rem",
    bottom: "10rem",
    left: "3px",
    width: "95%",
    padding: "0 0 0 4rem",
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
  let { status } = useSelector((state) => state.theme);
  useEffect(() => {
    let barBackground = document.getElementById("bar");
    status
      ? (barBackground.style = "")
      : (barBackground.style = "background:#222222");
    console.log(barBackground);
  }, [status]);
  const classes = useStyles();
  const clickHandler = (e) => {
    e.preventDefault();
    setStores(e.currentTarget.value);
  };

  return (
    <div className={classes.container} id="bar">
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
