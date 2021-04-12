import React from 'react'

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
            <div className="addProduct">
                + ADD PRODUCT
            </div>

        </StyledNavBar>
    )
}

const StyledNavBar = styled.div`
    width: 87%;
    height: 100%;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 6rem 0 4rem;
    .onLeft{
        .optionTab{
            color:#513066;
            height:3rem;
            font-size:3rem;
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
        width: 23%;
        height:3rem;
        font-size:1.5rem;
        display:flex;
        align-items: center;
        justify-content:center;
        border-radius:20px;
        padding: 0 2.3rem;
    }
`;

export default AdminNavBar
