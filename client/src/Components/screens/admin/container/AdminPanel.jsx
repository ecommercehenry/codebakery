import React from 'react'

//styles
import styled from 'styled-components';

//components
import LeftPanel from '../LeftPanel';
import AdminNavBar from '../AdminNavBar';
// import TextCRUD from '../TextCRUD'
import ListCRUD from "../ListCRUD"


const AdminPanel = () => {
   
    return (
        <StyledAdminPanel>
            <LeftPanel/>
            {/* <TextCRUD/> */}
            <ListCRUD/>
            <AdminNavBar/>
        </StyledAdminPanel>
        
    )
}

const StyledAdminPanel = styled.div`
    min-height: 100vh;
    width: 100%;
    display:flex;
`;

export default AdminPanel
