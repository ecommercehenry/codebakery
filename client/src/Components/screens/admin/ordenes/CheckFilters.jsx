import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkboxChange,
  clearCheckboxes,
} from "../../../../actions";
import styled from "styled-components";
import $ from 'jquery'

function CheckFilters({ displayFilter, setDisplayFilter }) {
  let { status } = useSelector((state) => state.theme);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    document.getElementById("ALL").checked = false;
    dispatch(checkboxChange(e.target.id));
    // despachar una accion de tipo cambio de checkbox
  };

  const handleAll = () => {
    document.getElementById("UNPAID").checked = false;
    document.getElementById("PAID").checked = false;
    document.getElementById("SENT").checked = false;
    document.getElementById("RECEIVED").checked = false;
    document.getElementById("CANCELLED").checked = false;
    dispatch(clearCheckboxes());
    // despachamos la accion para quitar los filtras de los checkbox
  };

  const handleAllChange = () => {
    document.getElementById("ALL").checked = true;
    handleAll()
  }

  useEffect(() => {
    document.getElementById("ALL").checked = true;
  }, [])

  $("#check-container").hover(
    function( e ){ 
      setDisplayFilter(true)
    },
    function(e){
      setDisplayFilter(false)
    }
  );

  return (
    // <StyledCheckFilters>
    <StyledCheckFilters id="check-container" className="wrap" light={status} show={displayFilter}>
      <div id="left-side">
        <p>Status</p>
        <form action="" className="formulario">
          <div className="checkbox-tab">
            <input id="ALL" type="checkbox" className="checkbox larger-check" onChange={() => handleAllChange()}/>
            <label htmlFor="ALL">All</label>
          </div>
          <div className="checkbox-tab">
            <input
              type="checkbox"
              className="checkbox larger-check"
              id="UNPAID"
              onChange={handleChange}
            />
            <label for="UNPAID">Unpaid</label>
          </div>

          <div className="checkbox-tab">
            <input
              type="checkbox"
              className="checkbox larger-check"
              id="PAID"
              onChange={handleChange}
            />
            <label for="PAID">Paid</label>
          </div>

          <div className="checkbox-tab">
            <input
              type="checkbox"
              className="checkbox larger-check"
              id="SENT"
              onChange={handleChange}
            />
            <label for="SENT">Sent</label>
          </div>

          <div className="checkbox-tab">
            <input
              type="checkbox"
              className="checkbox larger-check"
              id="RECEIVED"
              onChange={handleChange}
            />
            <label for="RECEIVED">Received</label>
          </div>

          <div className="checkbox-tab">
            <input
              type="checkbox"
              className="checkbox larger-check"
              id="CANCELLED"
              onChange={handleChange}
            />
            <label for="CANCELLED">Cancelled</label>
          </div>
        </form>
      </div>
      {/* <ButtonClear name="Clear all" /> */}
    </StyledCheckFilters>
  );
}
const StyledCheckFilters = styled.div`
  display: ${({ show }) => (show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: absolute;
  flex-direction: column;
  top: 5.5vh;
  width: 10rem;
  height: fit-content;
  justify-content: space-between;
  align-items: center;
  padding: 0.75em 0;
  background: ${({ light }) => (light ? "white" : "#222222")};
  border-radius: 10px;
  /* box-shadow: 0 15px 20px 0 rgb(0 0 0 / 8%), 0 1px 4px 0 rgb(0 0 0 / 8%); */
  border: 1px solid #D9D9D9;
  z-index: 1;

  &::before{
    content: "";
    position: absolute;
    top: -3em;
    height: 5rem;
    width: 10rem;
    background: transparent;
  }

  #left-side {
    display: block;
    align-items: center;
    width: 100%;

    p{
      font-weight: bold;
      color: #24282c;
      margin-bottom: .3em;
      padding: 0 1em;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 0;

      .checkbox-tab {
        display: flex;
        align-items: center;
        font-weight: bold;
        color: #4f5962;
        padding-top: 0.3em;
        width: 100%;
        padding: 0 1em;
        &:hover{
          background: #f5f5f5;
          cursor: pointer;
        }

        .larger-check {
          /* transform: scale(1.2); */
          margin-right: .6em;
          &:hover{
          cursor: pointer;
        }
        }

        label {
          display: flex;
          align-items: center;
          padding-top: 0.15rem;
          margin-bottom: 0;

          &:hover{
          cursor: pointer;
        }
        }
      }
    }
  }
`;

export default CheckFilters;
