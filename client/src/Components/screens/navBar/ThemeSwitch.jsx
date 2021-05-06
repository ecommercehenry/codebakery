import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {changeTheme} from '../../../actions/themeActions';
import {useLocation} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import styled from 'styled-components'

const ThemeSwitch = () => {
    let {status} = useSelector((state)=>state.theme);
    const [ home , setHome ] = useState(false)
    const location = useLocation();
    const dispatch = useDispatch();
    const themeHandler = () => {
        dispatch(changeTheme())
    }
    useEffect(()=>{
        if(location.pathname==='/'){
            setHome(true)
        }
    },[location.pathname])
    
    return (
        <StyledContainer home={home}>
            <span>
                <FontAwesomeIcon icon={faSun} />
            </span>
            <StyledSwitch className="switch" home={home}>
                <input type="checkbox" onClick={themeHandler}/>
                <motion.span className="slider" 
                    animate={status ? { x: 0 } : { x: 11 }}>
                </motion.span>
            </StyledSwitch>
            <span>
                <FontAwesomeIcon icon={faMoon} />
            </span>
        </StyledContainer>
        
    )
}

const StyledSwitch = styled.label`
    width: 1.5rem;
    height: 0.8rem;
    border: ${({home})=>home 
    ? '1px solid #363636' 
    : '1px solid  #d6d6d6'};
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 1px;
    position: relative;
    cursor: pointer;
    margin: 0 0.2rem;
    input {
        opacity: 0;
        width: 0;
        height: 0;
        cursor: pointer;
    }

    .slider{
    background: ${({home})=>home 
    ? '#363636' 
    : '#d6d6d6'};;
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 100%;
    position: absolute;
    }
`;
const StyledContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    span{
        color: ${({home})=>home 
        ? '#363636' 
        : '#d6d6d6'};;
        font-size: 0.6rem;
    }
`;

export default ThemeSwitch
