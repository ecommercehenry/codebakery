import React, { useEffect } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./UserAccount.css";
import styled from "styled-components";
import CREATE_USER from "../../Apollo/mutations/createUser";

import { Redirect } from "react-router-dom";

// Login/ out
import Login from "./Login";
import Logout from "./Logout";
import { useDispatch } from "react-redux";
import validateUser from "../../Apollo/queries/validateUser"
const UserAcount = () => {
  // const [createUser, { data }] = useMutation(CREATE_USER);
  const { register, handleSubmit } = useForm();
  const [login, { loading, data }] = useLazyQuery(validateUser);

  // Google login
  const dispatch = useDispatch()

  useEffect(()=>{
    if(!loading && data){
      if(data.validateUser.token){
        // alert("logueado")
        localStorage.setItem('token', data.validateUser.token);
        localStorage.setItem('name', data.validateUser.name);
        localStorage.setItem('email', data.validateUser.email);
        localStorage.setItem('role', data.validateUser.role);
        // es necesario el reloaded para luego poder redirigir
        alert(`Bienvenido ${data.validateUser.name}`)

        window.location.reload();
      }else{
        alert(data.validateUser.detail)
      }
    console.log(data)
  }})
  let role = localStorage.getItem('role');
  let token = localStorage.getItem('token');
  if(role  && token){
    // la redireccion se debe cambiar seún el role del usuario
    if(role === 'admin') return <Redirect to='/admin' />;
    else return <Redirect to='/catalogue' />;
  }
  const handleLogin = async (form) => {
    login({variables: {name:form.login,password:form.password}})    

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
            placeholder="Entra tu email o usuario"
            {...register("login", { required: true })}
          />
          <input
            type="password"
            className="fadeIn third"
            name="password"
            placeholder="Contraseña"
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
