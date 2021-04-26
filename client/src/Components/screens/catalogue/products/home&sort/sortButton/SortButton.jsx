import React from 'react'
import { useSelector } from "react-redux";
import styled from 'styled-components';

const SortButton = () => {
    let {status} = useSelector((state)=>state.theme);
    return (
        <StyledSortButton light={status}>
            <span>Order by: Price</span>
        </StyledSortButton>
    )
}

const StyledSortButton = styled.button`
    background:${({light})=>light ? 'transparent' : '#222222'};
    color:${({light})=>light ? 'inherit' : 'white'};
    display:flex;
    justify-content:center;
    align-items:center;
    background:none;
    padding: 1rem 1rem;
    border: 1px solid #d4d4d4;
    border-radius: 13px;
    width:9rem;
    img{
        width:1rem;
        height:1rem;
        margin-right:0.3rem;
        //background:yellow;
    }
    span{
        //background:red;
        //width:1.1rem;
        height:1.1rem;
        display:flex;
        align-items:center;
        
    }
`;

export default SortButton
