import React, { useState} from 'react';
import { useSelector } from "react-redux";
import styled from 'styled-components';
import UserLeftPanel from './UserLeftPanel';
import UserOrders from './UserOrders';
import UserReview from "./UserReview"; 
//aqui voy a mostrar mi otros componente

const UserPanel = (props) => {
   
    let {status} = useSelector((state)=>state.theme)
    const [click, setClick] = useState(false)
    return (
        <StyledUserPanel light={status}>
            <UserLeftPanel click={click} setClick={setClick}/>
            {
                 props !== false ? (
                    <UserOrders />
                 ) : <UserReview />  

            }
                    {/* <div className="bottom">
        
        <Route path='/admin/products' component={ListCRUD}/>            
        <Route path='/admin/orders' component={TablaOrdenes}/>    
        <Route path="/admin/users" component={UserAdmin} />

     </div> */}
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
