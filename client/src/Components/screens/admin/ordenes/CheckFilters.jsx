import React from "react";
import { useDispatch } from "react-redux";
import { checkboxChange, clearCheckboxes, clearFilter } from "../../../../actions";
import styled from "styled-components";

function CheckFilters(){
    const dispatch = useDispatch();
    const handleChange = (e) => {
        // console.log(e.target)
        dispatch(checkboxChange(e.target.id))
        // despachar una accion de tipo cambio de checkbox
    }
    const handleClick = (e) => {
        console.log(e.target.checked);
        e.target.checked = false;
    }
    const handleAll = (e) => {
        document.getElementById('UNPAID').checked = false;
        document.getElementById('PAID').checked = false;
        document.getElementById('SENT').checked = false;
        document.getElementById('RECEIVED').checked = false;
        document.getElementById('CANCELLED').checked = false;
        dispatch(clearCheckboxes());
        // despachamos la accion para quitar los filtras de los checkbox
    }
    return (
        // <StyledCheckFilters>
            <div className="wrap">
                <button onClick={handleAll}>ALL</button>
                <form action="" className="formulario">
                    <div class="checkbox">
                        <input type="checkbox" className="checkbox" id="UNPAID" onChange={handleChange}/>
                        <label for="UNPAID">UNPAID</label>
                
                        <input type="checkbox" className="checkbox" id="PAID" onChange={handleChange}/>
                        <label for="PAID">PAID</label>

                        <input type="checkbox" className="checkbox" id="SENT" onChange={handleChange}/>
                        <label for="SENT">SENT</label>
                
                        <input type="checkbox" className="checkbox" id="RECEIVED" onChange={handleChange}/>
                        <label for="RECEIVED">RECEIVED</label>

                        <input type="checkbox" className="checkbox" id="CANCELLED" onChange={handleChange}/>
                        <label for="CANCELLED">CANCELLED</label>
                    </div>
                </form>
            </div>
    );
}

// const StyledCheckFilters = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   alig-items: center;
//   float: right;
//   margin-right: 20px;
//   width: 60%;
//   margin-top: 0.5rem;
//   margin-left: 0;
//   height: 100%;
//   background-color: red;
// `;

export default CheckFilters;