import React from "react";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import "./UserAcount.css";
import styled from "styled-components";

import CREATE_USER from "../../Apollo/mutations/createUser";

// Login/ out
import Login from "./Login";
import Logout from "./Logout";

const UserAcount = () => {
  const [createUser, { data }] = useMutation(CREATE_USER);
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ username, password, email }) => {
    createUser({
      variables: { name: username, password, email },
    });
  };

  // Google login
  const handleLogin = async (data) => {
    // Aqui iria la mutation

    console.log(data);
  };

  return (
    <div className="wrapper fadeInDown">
      <div className="formContent">
        <Login />
        <StyledAcheDos> OR </StyledAcheDos>
        <hr />
        <form onSubmit={handleSubmit(handleLogin)}>
          <input
            type="text"
            className="fadeIn second"
            name="login"
            placeholder="Email o Username"
            {...register("login", { required: true })}
          />
          <input
            type="password"
            className="fadeIn third"
            name="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <input type="submit" className="fadeIn fourth" value="Log In" />
        </form>
        <p className="formFooter">
          ¿No tienes cuenta? <Link to="/create">Creala aqui</Link>
        </p>
      </div>
    </div>
  );
};

const StyledAcheDos = styled.h2`
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  display: inline-block;
  margin: 40px 8px 10px 8px;
  color: #cccccc;
`;

const StyledUserPanel = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
  .formContent {
    -webkit-border-radius: 10px 10px 10px 10px;
    border-radius: 10px 10px 10px 10px;
    background: #fff;
    padding: 30px;
    width: 90%;
    max-width: 450px;
    position: relative;
    padding: 0px;
    -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
    box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
    text-align: center;
    .formFooter {
      background-color: #f6f6f6;
      border-top: 1px solid #dce8f1;
      padding: 25px;
      text-align: center;
      -webkit-border-radius: 0 0 10px 10px;
      border-radius: 0 0 10px 10px;
    }
  }
`;

export default UserAcount;
