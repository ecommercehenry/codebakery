import React,{useState} from 'react'

//styles
import styled from 'styled-components';

//components
import LeftPanel from '../LeftPanel';
import AdminNavBar from '../AdminNavBar';
// import TextCRUD from '../TextCRUD'
import ListCRUD from "../ListCRUD"
import AddProductForm from '../../../AddProductForm';

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
                <div className="bottom">
                    {addProduct === false ? <ListCRUD/> : <AddProductForm setAddProduct={setAddProduct}/>}
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
    //background: black;
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
            height:auto;
            display:flex;
            justify-content:center;
            align-items:center;
        }
    }
`;

export default AdminPanel
