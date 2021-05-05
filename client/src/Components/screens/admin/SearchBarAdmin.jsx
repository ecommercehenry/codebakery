import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { HiOutlineSearch } from "react-icons/hi";

import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { filterName, filterOrders, filterUsers } from "../../../actions";
import { toast } from "react-toastify";

const SearchBarAdmin = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, setValue } = useForm();
  const stateSearch = useSelector(state=>state.ordersReducer.search)
  useEffect(()=>{
    if(stateSearch === false){
      setValue("id","")
    }
  },[stateSearch, setValue])

  const onSubmit = ({ id, type }) => {

    if (!id) return toast("Ingrese un ID");

    if (type === "user") {
      dispatch(filterUsers(id));
    }

    if (type === "order") {
      dispatch(filterOrders(id));
    }

    if (type === "name") {
      dispatch(filterName(id));
    }
    
  };
  return (
    <StyledSearchBar>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HiOutlineSearch
          onClick={handleSubmit(onSubmit)}
          size="1.3em"
          color="#5E3F71"
        />
        <input
          {...register("id")}
          className="input-vertical-c"
          type="text"
          placeholder="Search"
          // value={input}
          style={{ textAlign: "left" }}
        />
        <div className="vertical-line">‎‎‎‏‏‎ ‎</div>
        <select {...register("type")}>
          <option value="user">By User ID</option>
          <option value="order">By Order ID</option>
          <option value="name">By User Name</option>
        </select>
      </form>
    </StyledSearchBar>
  );
};

const StyledSearchBar = styled.div`
  background: white;
  height: 2rem;
  width: 30rem;
  padding: 0 0.5rem;
  display:flex;
  justify-content:space-between;
  align-items:center;
  border: 1.3px solid #949494;
  border-radius:20px;
  margin-left: 3vw;
  form{
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0;
    position: relative;
    height: 4.5vh;
  }
  input::placeholder {
    color: black;
    font-size: 1rem;
    opacity: 0.5;
  }
  input {
    color: black;
    width: 70%;
    height: 2rem;
    border: none;
    font-size: 1rem;
    background: none;
    text-align: left;
    padding-left: 2%;
  }
  select {
    display: inline-block;
    width: fit-content;
    height: 1.8rem;
    font-size: 1.1rem;
    border-radius: 40px;
    padding: 0 0.5rem;
    background: #ffffff;
    border: none;
    padding-right: 0;
    transition: transform 0.2s ease-in-out;
    font-weight: bold;

    &:focus{
      outline: none;
    }

    &:hover{
      cursor: pointer;
    }
  }
  .vertical-line{
    border-left: 1px solid grey;
    height: 1.5rem;
    margin-right: 2%;
}
`;

export default SearchBarAdmin;
