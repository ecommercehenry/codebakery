import React, { useEffect } from 'react'
import { useState } from 'react';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const UserNavBar = () => {
    const [tab, setTab] = useState()

    const path = window.location.pathname;

    useEffect(() => {
        if(path.includes("my-data")) setTab("My Data");
        if(path.includes("for-review")) setTab("For Review");
        if(path.includes("reviews")) setTab("Reviews");
        if(path.includes("orders")) setTab("Orders");
    }, [path])

    return (
        <StyledUserNavBar>
            <Link to="/user-menu" className="back-arrow">
            <HiOutlineArrowNarrowLeft size="1.7em" color="white"/>
            </Link>
            <span className="title">{tab}</span>
        </StyledUserNavBar>
    )
}

const StyledUserNavBar = styled.div`
@media(min-width: 850px){
    display: none;
}

display: flex;
background: #5F3F71;
width: 99%;
align-items: center;
justify-content: center;
position: fixed;
height: 3.5rem;
z-index: 99;
padding-right: 1.2em;
left: 1em;

.back-arrow{
    position: absolute;
    left: 1em;
}

.title{
    font-size: 1.5rem;
    color: white;
}
`

export default UserNavBar
