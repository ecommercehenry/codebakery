import React from 'react'
import styled from 'styled-components';
import cartIcon from '../../../../../icons/cart.svg';
import {addProductToCart} from '../../../../../actions/cartActions';
import {useDispatch} from 'react-redux';

const ButtonAddCart = ({id}) => {

    const dispatch = useDispatch();

    const buttonHandler = (id) => {
        dispatch(addProductToCart(id));
    }

    return (
        <StyledButton onClick={()=>buttonHandler(id)}>
            <img src={cartIcon} alt="cat icon" style={{height:"1.1rem" ,width:"1.1rem"}}/>
            <span>Add to Shop Cart</span>
        </StyledButton>
    )
}

const StyledButton = styled.button`

    display:flex;
    flex-direction:row;
    justify-content:space-between;
    padding:0.7rem 1rem;
    border-radius:25px;
    border: 1px solid violet;
    align-items:center;
    z-index:11;
    span{
        margin-left:4px;
    }
`;

export default ButtonAddCart
