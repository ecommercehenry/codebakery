import React from 'react';
import {Route} from 'react-router-dom'

//styles
import styled from 'styled-components';

//components
import LeftPanel from '../LeftPanel';
import AdminNavBar from '../AdminNavBar'
// import TextCRUD from '../TextCRUD'
import ListCRUD from "../ListCRUD"
import AddProductForm from '../../../AddProductForm';
import FormCategories from '../../../CategoryCard/FormCategories';

const AdminPanel = () => {
   
    return (
        <StyledAdminPanel>
            <div className="left">
                <LeftPanel/>
            </div>
            <div className="right">
                <div className="top">
                    <AdminNavBar />
                    
                </div>
                <Route path="/admin/add-product">
                <div className="bottom">
                    <AddProductForm/>
                </div>
                </Route>
                <div className="edit-grid">
                    <ListCRUD/>
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
    .left{
        width:13%;
        z-index: 5;
    }
    .right{
        width:87%;
        display:flex;
        flex-direction:column;
        .top{
            height:15vh;
        }
        .bottom{
            position: absolute
            background: black;
            height:100vh;
            width: 100vw;
            display:flex;
            justify-content:center;
            align-items:center;
            z-index: 4;
        }
        .edit-grid{
            position: absolute;
            z-index: 3;
            background: #eeeeee00;
            top: 12vh;
            width: 85vw;
        }
    }
`;

export default AdminPanel
