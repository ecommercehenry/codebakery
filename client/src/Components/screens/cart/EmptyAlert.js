import React,{useState} from 'react'
import {Redirect} from 'react-router-dom'
import styled from 'styled-components';

const EmptyAlert = () => {

    const [shame,setShame] = useState(false);
    const shameHandler = () => {
        setShame(true)
    }

    return (
        <StyledLevelUp>
            <StyledAlert>
                <span>Your cart is empty</span> 
                <button onClick={shameHandler}>Go shopping!</button>
                { shame ? <Redirect to='/catalogue'/> : ""}
            </StyledAlert>
        </StyledLevelUp>
    )
}

const StyledAlert = styled.div`
    background:white;
    border: 1px solid violet;
    border-radius: 13px;
    padding: 4rem 8rem;
    text-align:center;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    button{
        margin-top:2rem;
        border: 1px solid violet;
        border-radius: 20px;
        padding: 0.5rem 2rem;
    }
`;

const StyledLevelUp = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    background: rgba(0, 0, 0, 0.664);
    z-index: 5;
    height: 100vh; 
    width: 100vw;
    position:fixed;
    top:0;
    left:0;
`;

export default EmptyAlert
