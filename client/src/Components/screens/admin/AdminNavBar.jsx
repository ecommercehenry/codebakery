import React, { useState } from 'react';
import {Link, Route} from 'react-router-dom'

//styles
import styled from 'styled-components';
import FormCreateCategory from '../../FormCreateCategory/FormCreateCategory';
import SortByPrice from './ordenes/SortByPrice';

//components
import SearchBar from './SearchBar';
import SearchBarAdmin from './SearchBarAdmin';


const AdminNavBar = ({setAddProduct}) => {

    const buttonHandler = () => {
        setAddProduct(true)
    }

    const [add, setAdd] = useState(false)

    return (
        <StyledNavBar>
            <div className="onLeft">
                <Route path='/admin/products'> 
                <>
                <div className="optionTab">PRODUCTS</div>
                <SearchBar/> 
                </>
                </Route>
                <Route path='/admin/orders'> 
                <div className="optionTab">ORDERS</div>
                </Route>
            </div>
                <Route path='/admin/orders'> 
                    <div className="onRight">
                        <SearchBarAdmin/>
                        <SortByPrice/>
                    </div>
                </Route>
            <Route path='/admin/products' >
             <>   
                 
            {add ? <div className="add-category" onClick={() => setAdd(!add)}>
                "+ ADD CATEGORY"</div> : 
                <div className="add-category"> <FormCreateCategory setAdd={setAdd}/></div>}

            <Link to="/admin/add-product" className="addProduct purple-btn" onClick={buttonHandler}>
                + ADD PRODUCT
            </Link>

           </>
                
            </Route> 
           

        </StyledNavBar>
    )
}

const StyledNavBar = styled.div`
    width: 77vw;
    max-width: 100%;
    height: 15vh;
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 6rem 0 4rem;
    .onLeft{
        .optionTab{
            color:#513066;
            height:4.5vh;
            font-size: 2em;
            display:flex;
            align-items: center;
        }
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .onRight{
        display: flex;
        width: 100%;
        align-items: center;
        margin-left: 5vw;
        justify-content: space-between
    }
    .addProduct{
        background:#5E3F71;
        color:white;
        display:flex;
        align-items: center;
        justify-content:center;
    }
    .purple-btn:hover{
        background-color: #734191
    }
    .add-category{
        background:#5E3F7100;
        display:flex;
        align-items: center;
        justify-content:center;
        color: rgba(0, 0, 0, 0.726)
    }
    .add-category:hover{
        color: black;
        cursor: pointer;
    }
`;

export default AdminNavBar
