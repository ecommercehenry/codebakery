import React, { useState, useEffect } from "react";
import { fetchByName } from '../../../../actions';
import { useDispatch} from "react-redux";
import styled from 'styled-components';

const SearchBar = ({setSearch}) => {

  const dispatch = useDispatch()
  const [input, setInput] = useState([])

  const submitHandler = async (e) => {
      e.preventDefault();
      dispatch(fetchByName(input))
      setInput('');
    };
  
    return (
      <StyledSearchBar>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Busqueda..."
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
           <button type='submit'>Busqueda</button> 
        </form>
      </StyledSearchBar>
    )
};

const StyledSearchBar = styled.div`
    background: #e9e8e8;
    height: 3rem;
    width: 50%;
    padding: 0 0.5rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    border: 1.3px solid #949494;
    border-radius:20px;
    button{
        width:10%;
        height:2rem;
        border:none;
        background: none;
    }
    input{
        width:70%;
        height:2rem;
        border:none;
        font-size:1.3rem;
        background: none;
    }
    select{
        width:fit-content;
        height:2rem;
        font-size:1.1rem;
        border-radius:13px;
        padding: 0 0.5rem;
        background:#cfcfcf;
        border:none;
    }
`;

export default SearchBar;


