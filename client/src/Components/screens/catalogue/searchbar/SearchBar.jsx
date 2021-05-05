import React, { useState, useEffect } from "react";
import { fetchByName } from '../../../../actions';
import { useDispatch} from "react-redux";
import styled from 'styled-components';
import { HiSearch } from "react-icons/hi";

const SearchBar = () => {

const dispatch = useDispatch()
const [input, setInput] = useState([]) 

const handlerChange = (e) => {
  setInput(e.target.value); 
}
const submitHandler = (event) => {
  event.preventDefault();
} 
useEffect(() => {
  // dispatch(setSearch(true));
  dispatch(fetchByName(input));
}, [input, dispatch])


  return (
    // <div style={{width:100+"vw", display:"flex", justifyContent:"center"}}>
    <StyledSearchBar>
      <HiSearch size="1.5em" color="gray" style={{left: "15px"}}/>
      <form id="search-form">
        <input
          type="text"
          placeholder="Find your favorite dessert"
          value={input}
          onChange={handlerChange}
        />        
      </form>
    </StyledSearchBar>
    // </div>
  )
};

const StyledSearchBar = styled.div`
  background: #e9e8e8;
  display: flex;
  align-items: center;
  position:relative;
  z-index:2;
  transform:translateY(-50%);
  margin:auto;
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
  select{
      width:fit-content;
      height:2rem;
      font-size:1.1rem;
      border-radius:13px;
      padding: 0 0.5rem;
      background:#cfcfcf;
      border:none;
  }
  #search-form{
    margin-top: 0;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    input{
      width:70%;
      height:2rem;
      border:none;
      font-size:1.3rem;
      background: none;
      text-align: left;
  }

  }
`;

export default SearchBar;


