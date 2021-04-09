import React from 'react'

//styles
import styled from 'styled-components';

//components
import LeftPanel from '../LeftPanel';
import AdminNavBar from '../AdminNavBar';
import FormCRUD from '../../../FormCRUD'

const AdminPanel = () => {
    return (
        <StyledAdminPanel>
            <LeftPanel/>
            <AdminNavBar/>
            {/* <FormCRUD /> */}
        </StyledAdminPanel>
    )
}

const StyledAdminPanel = styled.div`
    min-height: 100vh;
    width: 100%;
    display:flex;

`;

export default AdminPanel
