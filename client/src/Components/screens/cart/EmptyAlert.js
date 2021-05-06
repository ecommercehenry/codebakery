import React,{useState} from 'react'
import { useSelector } from "react-redux";
import {Redirect} from 'react-router-dom'
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadTear } from "@fortawesome/free-solid-svg-icons";

const EmptyAlert = () => {
    let { status } = useSelector((state) => state.theme);
    const [empty,setEmpty] = useState(false);
    const emptyHandler = () => {
        setEmpty(true)
    }

    return (
        <StyledLevelUp>
            <StyledAlert light={status}>
                <span>Your cart is empty <FontAwesomeIcon icon={faSadTear} /></span> 
                <button className="purple-btn" onClick={emptyHandler}>Go shopping!</button>
                { empty ? <Redirect to='/catalogue'/> : ""}
            </StyledAlert>
        </StyledLevelUp>
    )
}

const StyledAlert = styled.div`
    background: ${({ light }) => 
        (light ? 
        "white" : 
        "#222222")
    };
    color: ${({ light }) => 
        (light ? 
        "inherit" : 
        "white")
    };
    border: 2px solid #5e3f71;
    border-radius: 13px;
    padding: 4rem 8rem;
    text-align:center;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    .purple-btn {
    display: block;
    height: 4.5vh;
    width: fit-content !important;
    border-radius: 40px;
    border: none;
    background-color: #5e3f71;
    text-decoration: none !important;
    color: white;
    font-weight: bold;
    font-size: 1em;
    padding-bottom: 0.5%;
    padding: 0 1.5vw 0 1.5vw;
    transition: background-color 0.2s ease;
    margin-top: 2.5rem;
  }

  .purple-btn:hover {
    background-color: #532c6b;
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
