import React from "react";
import { useDispatch } from "react-redux";
import { clearFilter } from "../../../../actions";

const ButtonClear = ({ name }) => {
  const dispatch = useDispatch();

  const handlerClear = () => {
    dispatch(clearFilter());
  };
  return (
    <>
      <div>
        <button onClick={handlerClear}>{name}</button>
      </div>
    </>
  );
};

export default ButtonClear;
