import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../../../../actions/index";
import styled from "styled-components";
import { HiOutlineSearch} from "react-icons/hi";

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
      <HiOutlineSearch
        size="1.3em"
        color="#5E3F71"
        /* style={{ position: "absolute", left: "15px" }} */
      />
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
  background: white;
  display: flex;
  position: relative;
  z-index: 2;
  margin-left: 4rem;
  height: 2rem;
  width: 30rem;
  padding: 0 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1.3px solid #949494;
  border-radius: 20px;

  #search-form {
    /* display: flex; */
    width: 100%;
    /* align-items: center;
    justify-content: space-between; */

    input {
      width: 70%;
      height: 2rem;
      border: none;
      font-size: 1rem;
      background: none;
      text-align: left;
      outline: none;
      padding-left: 2%;
    }
  }
`;
