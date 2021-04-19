import { useLazyQuery } from "@apollo/client";
import React from "react";
import { Children } from "react";
import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import styled from "styled-components";
import { changedStatus, filterOrders } from "../../../actions";

import getOrdersByUserIdInTicket from "../../../Apollo/queries/getOrdersByUserIdInTicket";

const SearchBarAdmin = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  let [ordersUsers, { data }] = useLazyQuery(getOrdersByUserIdInTicket);

  // console.log(data);

  const onSubmit = ({ id, type }) => {
    if (!id) return alert("Ingrese un ID");
    const idUser = Number(id);
    if (type === "user") {
      dispatch(changedStatus());
      ordersUsers({ variables: { idUser } });
    }
    if (type === "order") {
      dispatch(filterOrders(id));
    }
  };

  return (
    <StyledSearchBar>
      <input
        {...register("id")}
        className="input-vertical-c"
        type="text"
        placeholder="Search"
      />
      <div className="vertical-line"></div>
      <div className="custom-select">
        <select {...register("type")}>
          <option value="user">Filter users by id</option>
          <option value="order">Filter orders by id</option>
        </select>
      </div>
      <ButtonSearch onClick={handleSubmit(onSubmit)}>Search</ButtonSearch>
    </StyledSearchBar>
  );
};

const ButtonSearch = styled.button`
  background-color: #8a6db1;
  border: none;
  color: #dce8f1;
  padding: 10px 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 25px;
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
  background: #8a6db1;
  position: absolute;
  z-index: 2;
  transform: translateY(-50%);
  margin: 50px auto;

  width: 50%;
  padding: 0 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.3px solid #949494;
  border-radius: 20px;
  input::placeholder {
    color: white;
    font-size: 20px;
    opacity: 0.5;
  }
  input {
    color: white;
    width: 70%;
    height: 2rem;
    border: none;
    font-size: 1.3rem;
    background: none;
  }
  select {
    width: fit-content;
    height: 2rem;
    font-size: 1.1rem;
    border-radius: 13px;
    padding: 0 0.5rem;
    background: #f6f6f6;
    border: 1px solid black;
  }
  select:focus {
    outline: none;
  }
  select:before {
    color: red
    outline: none;
  }
`;

export default SearchBarAdmin;
