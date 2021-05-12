import React from 'react'
import styled from 'styled-components';
import SortButton from "../home&sort/sortButton/SortButton";
import { useSelector } from "react-redux";
import PaginationGrid from '../grid/PaginationGrid';

const ProductBar = () => {
    let {status} = useSelector((state)=>state.theme);
    return (
        <StyledProductBar light={status}>
            <PaginationGrid />
            <SortButton/>
        </StyledProductBar>
    )
}

const StyledProductBar = styled.div`
    background:${({light})=>light ? 'transparent' : '#222222'};
    //color:${({light})=>light ? 'inherit' : 'white'};
    width:100%;
    height: fit-content;
    //background:blue;
    padding:2rem 5rem 0rem 5rem;
    display:flex;
    justify-content:flex-end;
    align-items:center;
`;

export default ProductBar
