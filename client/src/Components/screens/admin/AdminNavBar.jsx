import React from 'react';
import {Link, Route} from 'react-router-dom'

//styles
import styled from 'styled-components';

//components
import SearchBar from './SearchBar';

const AdminNavBar = ({setAddProduct}) => {

    const buttonHandler = () => {
        setAddProduct(true)
    }

    return (
        <StyledNavBar>
            <div className="onLeft">   
                <div className="optionTab">PRODUCTS</div>
                <SearchBar/>
            </div>
            {/* <Link to="/admin/add-product" className="addProduct purple-btn">
                + ADD PRODUCT
            </Link> */}
            <button className="addProduct" onClick={buttonHandler}>
                + ADD PRODUCT
            </button>

        </StyledNavBar>
    )
}

const StyledNavBar = styled.div`
<<<<<<< HEAD
    width: 77vw;
    max-width: 100%;
    height: 15vh;
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 6rem 0 4rem;
=======
    width: 87%;
    height: 13vh;
    display:flex;
    align-items: center;
    justify-content: space-between;
    position:fixed;
    top: 0;
    padding: 0 6rem 0 4rem;
    background:white;
>>>>>>> a37a81dd751b47c75658864dc5cffaba3dd87328
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
<<<<<<< HEAD
    }
    .purple-btn:hover{
        background-color: #734191
=======
        border-radius:20px;
        padding: 0 2.3rem;
        border:none;
>>>>>>> a37a81dd751b47c75658864dc5cffaba3dd87328
    }
`;

export default AdminNavBar
