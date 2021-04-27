import React from "react";
import Maps from "./Maps";
import NavBar from "../screens/navBar/NavBar";
import SucursalCard from "./SucursalCard";

const Sucursales = () => {
  return (
    <div>
    <div style={{backgroundColor: '#5e3f71'}} >
      <div id="navBackground">
        <NavBar color="white" />
      </div>
    </div>
      <div className="maps" style={{ width: "50%", heigh: "50%", display:'flex', msFlexDirection:'row', alignItems:'left', justifyContent:'left' }}>
      <Maps />
      </div>
    <div style={{display: 'flex', flexDirection: 'column-reverse', justifyContent: 'left', alignItems:'flex-end'}}>
    <SucursalCard/>
  </div>
  </div>
  );
};

export default Sucursales;
