import React, {useState} from 'react';
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
   const [addProduct,setAddProduct] =  useState(false);
    return (
        <StyledAdminPanel>
            <div className="left">
                <LeftPanel/>
            </div>
            <div className="right">
                <div className="top">
                <AdminNavBar setAddProduct={setAddProduct}/>
                </div>
                <Route path="/admin/add-product">
                <div className="bottom">
                    {addProduct === false ? <ListCRUD/> : <AddProductForm setAddProduct={setAddProduct}/>}
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
    height: fit-content;
    width: 100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
<<<<<<< HEAD
=======
    //background: black;
>>>>>>> a37a81dd751b47c75658864dc5cffaba3dd87328
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
<<<<<<< HEAD
            position: absolute
            background: black;
            height:100vh;
            width: 100vw;
=======
            height:auto;
>>>>>>> a37a81dd751b47c75658864dc5cffaba3dd87328
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
