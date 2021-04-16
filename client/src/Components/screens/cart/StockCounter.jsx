import React,{useState} from 'react'
import {useDispatch} from 'react-redux';
import {changeQuantity} from '../../../actions/cartActions'
//style
import styled from 'styled-components';

const StockCounter = ({id,newQuantity,setNewQuantity,stock}) => {
    
    const dispatch = useDispatch()
    const removeHandler = () => {
        if(newQuantity>1){
            setNewQuantity(newQuantity=newQuantity-1);
            dispatch(changeQuantity(id,newQuantity))
        }
    }

    const addHandler = () => {
        if(newQuantity<stock){
            setNewQuantity(newQuantity=newQuantity+1);
            dispatch(changeQuantity(id,newQuantity))
        }
        
    }

    return (
        <StyledCounter>
            <button className="leftB" onClick={removeHandler}>-</button>
            <div className="state">{newQuantity}</div>
            <button className="rightB"  onClick={addHandler}>+</button>
        </StyledCounter>
    )
}

const StyledCounter = styled.div`
    display:flex;
    box-sizing:border-box;
    button,.state{
        width:2rem;
        height:3rem;
        border:1px solid #6b6b6b;
        background:none;
        align-items:center;
        display:flex;
        justify-content: center;
    }
    .leftB{
        border-right:none;
        border-top-left-radius:7px;
        border-bottom-left-radius:7px;
    }
    .rightB{
        border-left:none;
        border-top-right-radius:7px;
        border-bottom-right-radius:7px;
    }
    .state{
        width:3rem;
        border-left:none;
        border-right:none;
    }
`;

export default StockCounter
