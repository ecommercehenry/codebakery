import React from 'react'
import styled from 'styled-components';
import HomeButton from "../home&sort/homeButton/HomeButton";
import SortButton from "../home&sort/sortButton/SortButton";

const ProductBar = () => {
    return (
        <StyledProductBar>
            <HomeButton />
            <SortButton/>
        </StyledProductBar>
    )
}

const StyledProductBar = styled.div`
    width:100%;
    height: fit-content;
    //background:blue;
    padding:2rem 5rem 0rem 5rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

export default ProductBar
