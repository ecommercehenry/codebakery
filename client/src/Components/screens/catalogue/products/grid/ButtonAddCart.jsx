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

const media = {
    tablet: '@media(min-width:768px)',
    laptop: '@media(min-width:992px)',
    desktop: '@media(min-width:1200px)',
}

const StyledButton = styled.button`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    //padding:0.7rem 1rem;
    padding:0.5rem 0.8rem;
    font-size: calc(0.7rem + 6 * ((100vw - 320px) / 680));
    color:#755588;
    border-radius:25px;
    border: 1px solid #755588;
    align-items:center;
    z-index:11;
    span{
        margin-left:4px;
    }
    ${media.tablet}{
        font-size: calc(0.5rem + 6 * ((100vw - 320px) / 680));
    }
    ${media.laptop}{
        font-size: calc(0.2rem + 6 * ((100vw - 320px) / 680));
    }
`;

export default ButtonAddCart
