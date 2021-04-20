import { useLazyQuery } from "@apollo/client";
import React from "react";
import { Children } from "react";
import { useForm } from "react-hook-form";
import { HiOutlineSearch } from "react-icons/hi";

import { useDispatch } from "react-redux";
import styled from "styled-components";
import { changedStatus, filterOrders, filterUsers } from "../../../actions";

import getOrdersByUserIdInTicket from "../../../Apollo/queries/getOrdersByUserIdInTicket";

const SearchBarAdmin = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ id, type }) => {
    if (!id) return alert("Ingrese un ID");
    const idUser = Number(id);
    if (type === "user") {
      dispatch(changedStatus());
      dispatch(filterUsers(id));
    }
    if (type === "order") {
      dispatch(filterOrders(id));
    }
  };

  return (
    <StyledSearchBar>
        <form onSubmit={handleSubmit(onSubmit)}>
        <HiOutlineSearch size="1.5rem" color="#5E3F71"/>
        <input
          {...register("id")}
          className="input-vertical-c"
          type="text"
          placeholder="Search"
          style={{ textAlign: "left" }}
        />
        <div className="vertical-line">‎‎‎‏‏‎ ‎</div>
          <select {...register("type")}>
            <option value="user">User ID</option>
            <option value="order">Order ID</option>
          </select>
        </form>
    </StyledSearchBar>
  );
};

const ButtonSearch = styled.button`
  background-color: #8a6db1;
  position: relative;
  height: 80%;
  border: none;
  color: #dce8f1;
  padding: 0px 10px;
  margin-left: 2vw;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 0.875rem;
  -webkit-border-radius: 5px 5px 5px 5px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  :hover {
    opacity: 0.7;
  }
`;

const StyledSearchBar = styled.div`
  background: #e9e8e8;
  height: 4.6vh;
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
    font-size: 20px;
    opacity: 0.5;
  }
  input {
    color: black;
    width: 70%;
    height: 2rem;
    border: none;
    font-size: 1.3rem;
    background: none;
    text-align: left;
    padding-left: 2%;
  }
  select {
    display: inline-block;
    width: fit-content;
    height: 80%;
    font-size: 1.1rem;
    border-radius: 40px;
    padding: 0 0.5rem;
    background: #c4c4c485;
    border: none;
    font-weight: bold;
  }
  select:focus {
    outline: none;
  }
  select:before {
    color: red
    outline: none;
  }
  .vertical-line{
    border-left: 1px solid grey;
    height: 60%;
    margin-right: 2%;
}
`;

export default SearchBarAdmin;
