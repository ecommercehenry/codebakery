import styled from "styled-components";
import React from "react";
import { useDispatch } from "react-redux";
import { clearCheckboxes, clearFilter } from "../../../../actions";

const ButtonClear = ({ name }) => {
  
  const dispatch = useDispatch();

  const handlerClear = () => {
    dispatch(clearFilter());
  };
  const handleClick = () => {
    handlerClear()
    handleAll()
  }
  const handleAll = (e) => {
    document.getElementById("UNPAID").checked = false;
    document.getElementById("PAID").checked = false;
    document.getElementById("SENT").checked = false;
    document.getElementById("RECEIVED").checked = false;
    document.getElementById("CANCELLED").checked = false;
    dispatch(clearCheckboxes());
    // despachamos la accion para quitar los filtras de los checkbox
  };
  return (
    <>
      <div>
        <StyledButton onClick={handleClick}>{name}</StyledButton>
      </div>
    </>
  );
};

const StyledButton = styled.button`
background: none;
font-weight: bold;
color:#5f3f71;
border: none;
margin-top: .3em;
`

export default ButtonClear;
