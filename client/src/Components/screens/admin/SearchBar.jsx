import React from 'react'

//styles
import styled from 'styled-components';

const SearchBar = () => {
    return (
        <StyledSearchBar>
            <button>L</button>
            <input type="text" placeholder="Search"/>
            <div className="vertical-line"></div>
            <div className="custom-select">
                <select name="" id="">
                    <option value="">All</option>
                </select>
            </div>
        </StyledSearchBar>
    )
}

const StyledSearchBar = styled.div`
    background: #e9e8e8;
    height: 4.6vh;
    width: fit-content;
    padding: 0 0.5rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    border: 1.3px solid #949494;
    border-radius:20px;
    margin-left: 3vw;
    button{
        width:10%;
        height:2rem;
        border:none;
        background: none;
        margin-left: -1%
    }
    input{
        width:15vw;
        height:4.5vh;
        border:none;
        font-size:1rem;
        background: none;
        padding-left: 0.5%;
    }
    input:focus{
        outline: none;
    }
    .vertical-line{
        border-left: 1px solid grey;
        height: 60%;
    }
    select{
        width:fit-content;
        height:80%;
        font-size:1.1rem;
        border-radius:13px;
        padding: 0 0.5rem;
        background:#cfcfcf00;
        border:none;
    }
`;

export default SearchBar
