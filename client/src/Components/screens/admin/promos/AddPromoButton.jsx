import React from 'react'
import styled from 'styled-components'
const AddPromoButton = ({ promo, setPromo }) => {

    const buttonHandler = () => {
        setPromo(true);
    }

    return (
        <StyledPromoButton onClick={buttonHandler}>
            Add Promo
        </StyledPromoButton>
    )
}

const StyledPromoButton =  styled.button`
    width:8rem;
    height:2.5rem;
    border-radius:13px;
    background:#5E3F71;
    border:none;
    color:white;
`;

export default AddPromoButton
