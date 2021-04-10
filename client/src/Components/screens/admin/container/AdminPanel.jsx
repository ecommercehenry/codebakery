import React from 'react'

//styles
import styled from 'styled-components';

//components
import LeftPanel from '../LeftPanel';
import AdminNavBar from '../AdminNavBar';
import TextCRUD from '../TextCRUD'


const AdminPanel = () => {
    let flag = true
    function show(id){
        if(flag === true){
            flag = false
        }else{ flag = true}
        console.log("-----------------------sssss",flag)
    }
    return (
        <StyledAdminPanel>
            <LeftPanel/>
            <AdminNavBar/>
            <div >
                <TextCRUD show={show}/>
               
                
            </div>
        </StyledAdminPanel>
    )
}

const StyledAdminPanel = styled.div`
    min-height: 100vh;
    width: 100%;
    display:flex;

`;

export default AdminPanel
