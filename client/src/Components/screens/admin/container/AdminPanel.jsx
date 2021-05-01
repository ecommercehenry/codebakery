import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import {Route} from 'react-router-dom'

//styles
import styled from 'styled-components';

//components
import LeftPanel from '../LeftPanel';
import AdminNavBar from '../AdminNavBar'
// import TextCRUD from '../TextCRUD'
import ListCRUD from "../ListCRUD"
import AddProductForm from '../../../AddProductForm';
import TablaOrdenes from '../../admin/ordenes/TablaOrdenes';
import UserAdmin from '../ordenes/UserAdmin';
import Pagination from '../ordenes/Pagination';
import CheckFilters from '../ordenes/CheckFilters';
import NewsletterAdmin from '../newsletter/NewsletterAdmin';




const AdminPanel = () => {
  const [addProduct, setAddProduct] = useState(false);
  let {status} = useSelector((state)=>state.theme);
  return (
    <StyledAdminPanel light={status}>
      <div className="left">
        <LeftPanel />
      </div>
      <div className="right">

        <div className="top">
          <AdminNavBar setAddProduct={setAddProduct} />
          <Route path="/admin/orders" component={CheckFilters}/>
        </div>         

        <div className="bottom">
                   
           <Route path='/admin/products' component={ListCRUD}/>            
           <Route path='/admin/orders' component={TablaOrdenes}/>    
           <Route path="/admin/users" component={UserAdmin} />
          
           <Route path="/admin/newsletter" component={NewsletterAdmin} />
           
        </div>

        <Route path="/admin/orders">
              <Pagination/>
          </Route>
        
        <Route path="/admin/add-product">
          <AddProductForm />
        </Route>
      </div>
    </StyledAdminPanel>
  );
};

const StyledAdminPanel = styled.div`
    height: fit-content;
    width: 100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    background:${({light})=>light 
    ? 'white' 
    : '#222222'};
    color:${({light})=>light 
    ? 'inherit' 
    : 'white'};
    .left{
        width:13%;
        z-index: 10;
    }
    .right{
        width:87%;
        display:flex;
        flex-direction:column;
        height: fit-content;
        .top{
            position: fixed;
            z-index: 2;
            //background: #ffffff;
            
        }
        .bottom{
            margin-top: 5em;
            position: relative;
            //background: black;
            height:fit-content;
            width: 77vw;
            display:flex;
            flex-direction: column;
            justify-content:center;
            align-items:center;
            z-index: 1;
            margin-left: 4rem
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
