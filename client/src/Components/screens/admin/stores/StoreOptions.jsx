import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {StyledTabs} from "../../cart/CartTabs"
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
    color: "#5E3F71",
    justifyContent: "center"
  },
}));
const StoreOptions = ({ setStores }) => {
  const classes = useStyles();
  const clickHandler = (e) => {
    e.preventDefault();
    setStores(e.currentTarget.value);
  };
  let {status} = useSelector((state)=>state.theme);

  const path = window.location.pathname;
  const activeTab = {
    see: path.includes("stores") && !path.includes("new") && !path.includes("modify") ? "selected" : "inactive",
    new: path.includes("new") ? "selected" : "inactive",
    modify: path.includes("modify") ? "selected" : "inactive",
  };

  return (
    <div style={{display: "flex", width: "90%", justifyContent:"center", top:"1em", padding: "2em 0", paddingBottom: "1em"}}>
    <StyledTabs light={status} style={{width: "100%"}}>
      <ul>
        <li className={activeTab.see}><Link to="/admin/stores" className="text-decoration-none linked tabLink">See stores</Link></li>
        <li className={activeTab.new}><Link to="/admin/stores/new" className="text-decoration-none linked tabLink">Add a Store</Link></li>
        <li className={activeTab.modify}><Link to="/admin/stores/modify" className="text-decoration-none linked tabLink">Modify a Store</Link></li>
      </ul>
    </StyledTabs>
    </div>
  );
};

export default StoreOptions;
