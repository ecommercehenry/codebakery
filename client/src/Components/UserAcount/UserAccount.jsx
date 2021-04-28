import React, { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./UserAccount.css";
import styled from "styled-components";

import { Redirect } from "react-router-dom";

// Login/ out
import Login from "./Login";
import validateUser from "../../Apollo/queries/validateUser";
import VALIDATE_CREDENTIALS from "../../Apollo/queries/validateCredentials";
import { toast } from "react-toastify";
import '../../Assets/toast.css'; 

toast.configure() 

const UserAcount = () => {
  // valida que exista el usuario y lo devuelve con un token
  const [login, { loading, data }] = useLazyQuery(validateUser); 
  const [functionValidate, { data: dataValidate}] = useLazyQuery(VALIDATE_CREDENTIALS);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(()=>{
    if(localStorage.getItem('token')){
      
      functionValidate({ variables: { token: localStorage.getItem('token'), role: localStorage.getItem('role') } });
    }
    if(!loading && data){
      if(data.validateUser.token){
        // alert("logueado")
        localStorage.setItem('token', data.validateUser.token);
        localStorage.setItem('name', data.validateUser.name);
        localStorage.setItem('email', data.validateUser.email);
        localStorage.setItem('role', data.validateUser.role);
        localStorage.setItem('id', data.validateUser.id);
        // es necesario el reloaded para luego poder redirigir
        toast(`Welcome ${data.validateUser.name}`);
        window.location.reload();
      }else{
        toast(data.validateUser.detail)
      }
    
  }},[loading, data, dataValidate, functionValidate])
  let role = localStorage.getItem('role');
  let token = localStorage.getItem('token');
  if(role  && token){
    // la redireccion se debe cambiar seún el role del usuario
    if(role === 'admin' && dataValidate?.validateCredentials){
      // 
      return <Redirect to='/admin/orders' />;
    }
    else if(role === 'user' && dataValidate?.validateCredentials) {
      // 
      return <Redirect to='/catalogue' />;
    }
    // else {
    //   
    //   // localStorage.clear();
    //   return <Redirect to='/log-in' />;
    // };
  }
  const handleLogin = async (form) => {
    login({variables: {email:form.login,password:form.password}});
  };

  return (
    <div className="page" style={{height: "100vh", display: "flex", alignItems: "center"}}>
    <div className="wrapper fadeInDown" style={{marginBottom: "10vh"}}>
      <div className="formContent">
        <Login />
        <StyledAcheDos> OR </StyledAcheDos>
        <hr />
        <form onSubmit={handleSubmit(handleLogin)}>
          <input
            type="email"
            className="fadeIn second"
            name="login"
            placeholder="Email"
            aria-invalid={errors.name ? "true" : "false"}
            {...register("login", { required: true })}
          />
          {errors.name && errors.name.type === "required" && (
            <p className="error" role="alert">
              This is required
            </p>
          )}
          <input
            type="password"
            className="fadeIn third"
            name="password"
            placeholder="Contraseña"
            aria-invalid={errors.name ? "true" : "false"}
            {...register("password", { required: true })}
          />
          {errors.name && errors.name.type === "required" && (
            <p className="error" role="alert">
              This is required
            </p>
          )}
          <input type="submit" className="fadeIn fourth" value="Log In" />
        </form>
        <p className="formFooter">
          ¿No tienes cuenta? <Link to="/sign-up">Creala aqui</Link>
        </p>
        <p className="formFooter">
          <Link to="/reset-password">Reset password</Link>
        </p>
      </div>
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

export default UserAcount;
