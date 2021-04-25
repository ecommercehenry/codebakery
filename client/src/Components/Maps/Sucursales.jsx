import React from "react";
import Maps from "./Maps";
import NavBar from "../screens/navBar/NavBar";

const Sucursales = () => {
  return (
    <div style={{backgroundColor: '#5e3f71'}} >
      <div id="navBackground">
        <NavBar color="white" />
      </div>
      <div style={{ width: "50%", heigh: "50%", display:'flex', msFlexDirection:'row', alignItems:'left', justifyContent:'left' }}>
      <Maps />
      </div>
    </div>
  );
};

export default Sucursales;
