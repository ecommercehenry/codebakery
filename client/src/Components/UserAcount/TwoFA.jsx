import React, { useEffect } from "react";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GENERATE_OTP from "../../Apollo/mutations/generateOtp";
import VALIDATE_TOTP from "../../Apollo/queries/validateTokenTOTP";

import { Redirect } from "react-router-dom";

// Login/ out
import Login from "./Login";
import Logout from "./Logout";
import { useDispatch, useSelector } from "react-redux";
import validateUser from "../../Apollo/queries/validateUser";
import VALIDATE_CREDENTIALS from "../../Apollo/queries/validateCredentials";
import { toast } from "react-toastify";
import { clearDataUserProfile } from "../../actions/dataProfileActions";

toast.configure();

function TwoFA(){
    const [generateOTP, {data: dataGenerate, loading: loadingGenerate}] = useMutation(GENERATE_OTP);
    const [validateTotp, {data: dataValidate, loading: loadingValidate}] = useLazyQuery(VALIDATE_TOTP);
    const [
      functionValidate,
      { loading: loadingCredentials, data: dataCredentials },
    ] = useLazyQuery(VALIDATE_CREDENTIALS);
    const {id, token, name, email, role} = useSelector(state => state.dataProfileReducer);
    const dispatch = useDispatch();

    useEffect(() => {
      if (localStorage.getItem("token")) {
        functionValidate({
          variables: {
            token: localStorage.getItem("token"),
            role: localStorage.getItem("role"),
          },
        });
      }
    },[loadingCredentials, dataCredentials, localStorage.getItem("token")]);

    useEffect(() => {
      // console.log(localStorage.getItem('id'), 'ayaysysa', id)
      if(!dataGenerate && !loadingGenerate) generateOTP({ variables: 
          { userId: parseInt(localStorage.getItem('id')) || id } 
        })
        console.log(dataGenerate?.generateTokenOTP, loadingGenerate)
    }, [dataGenerate, loadingGenerate])

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    useEffect(() => {
      // colocar info del user en el LS y enviar accion de borrar el stados redux
      if(dataValidate?.validateTOTP.boolean){
        localStorage.setItem('token', token);
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('role', role);
        localStorage.setItem('id', id);
        dispatch(clearDataUserProfile())
        toast.dismiss();
        toast(`Welcome ${localStorage.getItem('name')}`, {toastId: 1});
        // window.location.reload();
      }
      else if(dataValidate?.validateTOTP.__typename === 'error'){
        toast(`Error`);
      }
      
    }, [dataValidate])

    let roleUser = localStorage.getItem('role') ;
    let tokenUser = localStorage.getItem('token');
    // console.log(roleUser, tokenUser, 'iasiiaisias')
    // console.log(dataCredentials, 'aaaaaaaaaaaaaaaaaaa')
    if(roleUser  && tokenUser && dataCredentials){
      if(roleUser === 'admin'){
        return <Redirect to='/admin/orders' />;
      }
      else if( roleUser === 'user' ) {
        return <Redirect to='/catalogue' />;
      }
    }
    const handleValidate = async (form) => {
        console.log(form.code, 'atstats', parseInt(form.password), Number(form.password));
        validateTotp({
            variables: {
                userId: parseInt(id)
                , code: parseInt(form.password)
            }
        });
        // login({variables: {email:form.login,password:form.password}});
    }
    return (
      // <div>Ghola</div>
        <div className="page" style={{ height: "100vh", display: "flex", alignItems: "center" }}>
            <div className="wrapper fadeInDown" style={{ marginBottom: "10vh" }}>
                <div className="formContent">
                    {/* <Login /> */}
                    <StyledAcheDos> QR </StyledAcheDos>
                    <hr />
                    {/* <img src={dataGenerate?.generateTokenOTP.image}></img> */}
                    {/* <img>ffff</img> */}
                    <form onSubmit={handleSubmit(handleValidate)}>
                        <input
                            type="password"
                            className="fadeIn third"
                            name="pasword"
                            placeholder="Enter your googleAuth code"
                            aria-invalid={errors.name ? "true" : "false"}
                            {...register("password", { required: true })}
                        />
                        {errors.name && errors.name.type === "required" && (
                            <p className="error" role="alert">
                                This is required
                            </p>
                        )}
                        <input type="submit" className="fadeIn fourth" value="Validate" />
                    </form>
                    {/* <button className="fadeIn fourth">Log In</button> */}
                    {/* <p className="formFooter">
          ¿No tienes cuenta? <Link to="/sign-up">Creala aqui</Link>
        </p>
        <p className="formFooter">
          <Link to="/reset-password">Reset password</Link>
        </p> */}
                </div>
            </div>
        </div>
    );
}
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
export default TwoFA;