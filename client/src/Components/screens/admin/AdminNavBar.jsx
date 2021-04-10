import React from 'react';
import {Link, Route} from 'react-router-dom'

//styles
import styled from 'styled-components';

//components
import SearchBar from './SearchBar';

const AdminNavBar = () => {
    return (
        <StyledNavBar>
            <div className="onLeft">   
                <div className="optionTab">PRODUCTS</div>
                <SearchBar/>
            </div>
            <Link to="/admin/add-product" className="addProduct purple-btn">
                + ADD PRODUCT
            </Link>

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
        width:43%;
        display: flex;
        justify-content: space-between;
        align-items: center;
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
`;

export default AdminNavBar
