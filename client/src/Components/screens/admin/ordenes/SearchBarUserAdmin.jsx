import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchByName } from "../../../../actions/index";
import styled from 'styled-components';
import { HiSearch } from "react-icons/hi";

const SearchBarUserAdmin = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  function handleChange(e) {
    // e.preventDefault();
    setInput(e.target.value);
    if (e.target.value !== "") {
      dispatch(searchByName(e.target.value));
    } else if (e.target.value === "") {
      dispatch(searchByName("all"));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(searchByName(input));
    setInput("");
  }

  return (
    // <div
    //   style={{ width: 100 + "vw", display: "flex", justifyContent: "center", marginTop: "2rem", marginRight: "8rem" }}
    // >
      <StyledSearchBar>
      <HiSearch size="1.5em" color="gray" style={{position: "absolute", left: "15px"}}/>
        <form id="search-form" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Search by name"
            value={input}
            onChange={(e) => handleChange(e)}
            required
          />
          {/* <input type="submit" value="SEARCH" /> */}
        </form>
      </StyledSearchBar>
    // </div>
  );
};

export default SearchBarUserAdmin;

const StyledSearchBar = styled.div`
  background: #e9e8e8;
  display: flex;
  position: relative;
  z-index: 2;
  margin-left: 4rem;
  height: 3rem;
  width: 30rem;
  padding: 0 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1.3px solid #949494;
  border-radius: 20px;
  /* button {
    width: 10%;
    height: 2rem;
    border: none;
    background: none;
  } */
  /* select {
    width: fit-content;
    height: 2rem;
    font-size: 1.1rem;
    border-radius: 13px;
    padding: 0 0.5rem;
    background: #cfcfcf;
    border: none;
  } */
  #search-form {
    /* display: flex; */
    width: 100%;
    /* align-items: center;
    justify-content: space-between; */

    input {
      width: 70%;
      height: 2rem;
      border: none;
      font-size: 1.3rem;
      background: none;
      text-align: left;
      outline: none;
      margin-left: 2.1rem;
    }
  }
`;
