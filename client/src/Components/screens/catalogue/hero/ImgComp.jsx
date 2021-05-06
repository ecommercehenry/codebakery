import React from "react";

const ImgComp = ({ src }) => {
  let imgStyles = {
    width: 100 + "%",
    height: "auto",
  };
  return <img src={src} style={imgStyles} alt="slide-img"></img>;
};

export default ImgComp;
