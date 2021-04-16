import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import styled from "styled-components";

const SearchBarAdmin = ({ setSearch }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div
      style={{
        width: 100 + "vw",
        display: "flex",
        justifyContent: "center",
        marginTop: 100 + "px",
      }}
    >
      <StyledSearchBar>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Encuentra tu dulce favorito"
            {...register("search", { required: true })}
          />
          <ButtonSearch type="submit">Busqueda</ButtonSearch>
        </form>
      </StyledSearchBar>
    </div>
  );
};

const ButtonSearch = styled.button`
  background-color: #8a6db1;
  border: none;
  color: #dce8f1;
  padding: 15px 80px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
  -webkit-box-shadow: 0 10px 30px 0 rgba(231, 239, 243, 0.4);
  box-shadow: 0 10px 10px 0 rgba(209, 191, 209, 0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  margin: 5px 20px 40px 20px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
`;

const StyledSearchBar = styled.div`
  background: #e9e8e8;
  position: absolute;
  z-index: 2;
  transform: translateY(-50%);
  margin: auto;
  height: 3rem;
  width: 50%;
  padding: 0 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1.3px solid #949494;
  border-radius: 20px;
  input {
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
    background: #cfcfcf;
    border: none;
  }
`;

export default SearchBarAdmin;
