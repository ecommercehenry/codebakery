import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkboxChange,
  clearCheckboxes,
  clearFilter,
} from "../../../../actions";
import styled from "styled-components";
import ButtonClear from "./ButtonClear";

function CheckFilters() {
	let {status} = useSelector((state)=>state.theme);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    // console.log(e.target)
    dispatch(checkboxChange(e.target.id));
    // despachar una accion de tipo cambio de checkbox
  };
  const handleClick = (e) => {
    console.log(e.target.checked);
    e.target.checked = false;
  };
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
    // <StyledCheckFilters>
    <StyledCheckFilters className="wrap" light={status}>
      <div id="left-side">
        <button id="all-filter" onClick={handleAll}>
          ALL
        </button>
        <form action="" className="formulario">
          <div className="checkbox-tab">
            <input
              type="checkbox"
              className="checkbox"
              id="UNPAID"
              onChange={handleChange}
							className="larger-check"
            />
            <label for="UNPAID">UNPAID</label>
          </div>

          <div className="checkbox-tab">
            <input
              type="checkbox"
              className="checkbox"
              id="PAID"
              onChange={handleChange}
							className="larger-check"
            />
            <label for="PAID">PAID</label>
          </div>

          <div className="checkbox-tab">
            <input
              type="checkbox"
              className="checkbox"
              id="SENT"
              onChange={handleChange}
							className="larger-check"
            />
            <label for="SENT">SENT</label>
          </div>

          <div className="checkbox-tab">
            <input
              type="checkbox"
              className="checkbox"
              id="RECEIVED"
              onChange={handleChange}
							className="larger-check"
            />
            <label for="RECEIVED">RECEIVED</label>
          </div>

          <div className="checkbox-tab">
            <input
              type="checkbox"
              className="checkbox"
              id="CANCELLED"
              onChange={handleChange}
							className="larger-check"
            />
            <label for="CANCELLED">CANCELLED</label>
          </div>
        </form>
      </div>
      <ButtonClear name="Clear all" />
    </StyledCheckFilters>
  );
}
const StyledCheckFilters = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
	position:sticky ;
	top: 0;
  margin: 0 6rem 0 4rem;
  width: 77vw;
  height: 100%;
  border-bottom: 2px solid #5f3f71;
  justify-content: space-between;
  align-items: center;
	padding: 0.75em 0;
	background:${({light})=>light 
    ? 'white' 
    : '#222222'};

  #left-side {
    display: flex;
    align-items: center;

    #all-filter {
      height: fit-content;
			background: #5f3f71;
			border: none;
			border-radius: 40px;
			color: white;
			font-weight: bold;
			padding: 0 1em;
    }

    form {
      display: flex;
      align-items: center;
			margin-top: 0;

			.checkbox-tab{
				display: flex;
				align-items: center;
				margin-left: 1.5em;
				font-weight: bold;
				color: #5f3f71;

				.larger-check{
					transform: scale(1.2);
					margin-right: 0.3em;
				}

				label{
					display:flex;
					align-items: center;
					padding-top: 0.15rem;
				}
			}
    }
  }
`;

export default CheckFilters;
