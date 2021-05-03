import React from 'react';
import { HiOutlineSearch } from 'react-icons/hi';

//styles
import styled from 'styled-components';

const SearchBar = () => {
    return (
        <StyledSearchBar>
            <HiOutlineSearch size="1.5rem" color="#5E3F71"/>
            <input type="text" placeholder="Search"/>
            <div className="vertical-line"></div>
                <select name="" id="">
                    <option value="">All</option>
                </select>
        </StyledSearchBar>
    )
}

const StyledSearchBar = styled.div`
    background: white;
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
        margin-right: 2%;
    }
    select{
        width:fit-content;
        height:90%;
        font-size:1.1rem;
        border-radius:40px;
        padding: 0 0.5rem;
        background: #c4c4c485;
        border: none;
        font-weight: bold;
    }
    select:focus {
        outline: none;
      }
      select:before {
        color: red;
        outline: none;
      }
`;

export default SearchBar
