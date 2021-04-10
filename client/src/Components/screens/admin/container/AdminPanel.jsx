import React from 'react'

//styles
import styled from 'styled-components';

//components
import LeftPanel from '../LeftPanel';
import AdminNavBar from '../AdminNavBar';
import AddProductForm from '../../../AddProductForm';
import FormCRUD from '../../../FormCRUD'

const AdminPanel = () => {
    return (
        <StyledAdminPanel>
            <div className="left">
                <LeftPanel/>
            </div>
            <div className="right">
                <div className="top">
                <AdminNavBar/>
                </div>
                <div className="bottom">
                    <AddProductForm/>
                </div>
                
                {/* <FormCRUD /> */}
            </div>
            
        </StyledAdminPanel>
    )
}

const StyledAdminPanel = styled.div`
    min-height: 100vh;
    width: 100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    background: black;
    .left{
        width:13%;
        //background:green;
    }
    .right{
        width:87%;
        //background:yellow;
        display:flex;
        flex-direction:column;
        .top{
            height:15vh;
        }
        .bottom{
            height:85vh;
            display:flex;
            justify-content:center;
            align-items:center;
        }
    }
`;

export default AdminPanel
