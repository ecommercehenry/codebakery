import styled from "styled-components";
import React from "react";
import { useDispatch } from "react-redux";
import { clearFilter } from "../../../../actions";

const ButtonClear = ({ name }) => {
  
  const dispatch = useDispatch();

  const handlerClear = () => {
    // console.log('clear');
    dispatch(clearFilter());
  };
  return (
    <>
      <div>
        <StyledButton onClick={handlerClear}>{name}</StyledButton>
      </div>
    </>
  );
};

const StyledButton = styled.button`
background: none;
font-weight: bold;
color:#5f3f71;
border: none;
`

export default ButtonClear;
