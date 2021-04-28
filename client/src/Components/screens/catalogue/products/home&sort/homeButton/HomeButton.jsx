import React from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import homeIcon from '../../../../../../icons/home.svg';

const HomeButton = () => {
    let {status} = useSelector((state)=>state.theme);
    return (
        <Link to="/" className="text-decoration-none text-dark">
        <StyledHomeButton light={status}>
        
            <img src={homeIcon} alt=""/>
            <span>Home</span>
        </StyledHomeButton>
        </Link>
    )
}

const StyledHomeButton = styled.button`
    background:${({light})=>light 
    ? 'transparent' 
    : '#222222'};
    color:${({light})=>light 
    ? 'inherit' 
    : 'white'};
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

export default HomeButton
