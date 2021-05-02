import React from "react";
import Upload from "../upload/Upload";
import TableSlider from "./TableSlider";

const SliderCard = () => {
  return (
    <div>
      <Upload />
      <TableSlider />
    </div>
  );
};

// AdminPanel creo la ruta hacia este component "admin/upload"
// LefPanel la linkeo

export default SliderCard;
