import React from 'react';
import { useSelector } from "react-redux";
import styled from 'styled-components';
import UserLeftPanel from './UserLeftPanel';
import UserReview from "./UserReview"; 

const UserPanel = () => {
    let {status} = useSelector((state)=>state.theme);
    return (
        <StyledUserPanel light={status}>
            <UserLeftPanel/>
        </StyledUserPanel>
    )
}

const StyledUserPanel =styled.div`
    background:${({light})=>light 
    ? 'transparent' 
    : '#222222'};
    color:${({light})=>light 
    ? 'inherit' 
    : 'white'};
    width:100vw;
    height:100vh;
`;

export default UserPanel
