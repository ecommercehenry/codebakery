import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeQuantity } from "../../../actions/cartActions";
import { useMutation } from "@apollo/client";
import DECREMENT_QUANTITY from '../../../Apollo/mutations/decrementQuantity'
import INCREMENT_QUANTITY from '../../../Apollo/mutations/incrementQuantity'
//style
import styled from "styled-components";

const StockCounter = ({
  id,
  newQuantity,
  setNewQuantity,
  stock,
  logged,
  orderId,
  productId,
  refetch
}) => {
  const [decrementQuantity] = useMutation(DECREMENT_QUANTITY);
  const [incrementQuantity] = useMutation(INCREMENT_QUANTITY);
  const dispatch = useDispatch();
  let {status} = useSelector((state)=>state.theme);

  const removeHandler = () => {
    if (newQuantity > 1) {
      setNewQuantity((newQuantity = newQuantity - 1));
      dispatch(changeQuantity(id, newQuantity));
        if (logged){
                decrementQuantity({
                    variables:{
                        orderId: orderId,
                        productId: productId,
                        quantity:1
                    }
                })
                refetch()
            } 
    }
  };

  const addHandler = () => {
    if (newQuantity < stock) {
      setNewQuantity((newQuantity = newQuantity + 1));
      dispatch(changeQuantity(id, newQuantity));
      if (logged){
        incrementQuantity({
            variables:{
                orderId: orderId,
                productId: productId,
                quantity:1
            }
        })
        refetch()
    } 
    }
  };

  return (
    <StyledCounter light={status}>
      <button className="leftB" onClick={removeHandler}>
        -
      </button>
      <div className="state">{newQuantity}</div>
      <button className="rightB" onClick={addHandler}>
        +
      </button>
    </StyledCounter>
  );
};

const StyledCounter = styled.div`
  
  display: flex;
  box-sizing: border-box;
  button,
  .state {
    width: 2rem;
    height: 3rem;
    border: 1px solid #e6e6e6;
    background: none;
    align-items: center;
    display: flex;
    justify-content: center;
    color:${({light})=>light ? 'black' : 'white'};
  }
  .leftB {
    border-right: none;
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
  }
  .rightB {
    border-left: none;
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }
  .state {
    width: 3rem;
    border-left: none;
    border-right: none;
  }

  @media (max-width: 768px) {
    .state{
      height: 2em
    }

    .leftB{
      height: 2em
    }

    .rightB {
      height: 2em
    }
  }

  @media(max-width: 350px){
    .state{
      width: 1.5rem;
    }
  }
`;

export default StockCounter;
