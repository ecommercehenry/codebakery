import React, { useEffect, useState} from 'react';
import { useSelector } from "react-redux";
import styled from 'styled-components';
import UserLeftPanel from './UserLeftPanel';
import UserOrders from './UserOrders';
import UserProfile from './UserProfile';
import UserReview from "./UserReview"; 
//aqui voy a mostrar mi otros componente

const UserPanel = () => {
    let {status} = useSelector((state)=>state.theme)
    const [click, setClick] = useState(3)
    useEffect(() => {
    }, [click])
    console.log(click)
    return (
        <StyledUserPanel light={status}>
            <UserLeftPanel click={click} setClick={setClick}/>
            {
                 click === 1 ? 
                    <UserOrders /> : click === 2 ?
                     <UserReview /> : click === 3 ?
                     <UserProfile/> : <p>te fuise</p>
            }
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
