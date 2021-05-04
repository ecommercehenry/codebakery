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

    // useEffect(() => {
    //   // console.log(localStorage.getItem('id'), 'ayaysysa', id)
    //   if(!dataGenerate && !loadingGenerate) generateOTP({ variables: 
    //       { userId: parseInt(localStorage.getItem('id')) || id } 
    //     })
    //     console.log(dataGenerate?.generateTokenOTP, loadingGenerate)
    // }, [dataGenerate, loadingGenerate])

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
        <StyledUserPanel className="page" style={{ height: "100vh", display: "flex", alignItems: "center" }}>
            <div className="wrapper fadeInDown" style={{ marginBottom: "10vh" }}>
                <div className="formContent">
                    {/* <Login /> */}
                    <StyledAcheDos> Google Authenticator Code </StyledAcheDos>
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
        </StyledUserPanel>
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
  /* BASIC */

body {
  font-family: "Montserrat", sans-serif;
  height: 100vh;
}

/* STRUCTURE */

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
}

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
}

.formFooter {
  background-color: #f6f6f6;
  border-top: 1px solid #dce8f1;
  padding: 25px;
  text-align: center;
  -webkit-border-radius: 0 0 10px 10px;
  border-radius: 0 0 10px 10px;
}

/* FORM TYPOGRAPHY*/

input[type="submit"],
button[type="submit"] {
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
}

input[type="submit"]:hover,
button[type="submit"] {
  background-color: #7d62a0;
}

input[type="submit"]:active,
button[type="submit"] {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}

input[type="text"],
input[type="password"],
input[type="email"] {
  background-color: #f6f6f6;

  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;

  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;

  background-color: #fff;
  border: none;
  border-bottom: 2px solid #402e57;
}

input[type="text"]:focus,
input[type="password"]:focus,
input[type="email"]:focus {
  outline: none;
}

input[type="text"]:placeholder,
input[type="password"]:placeholder {
  color: #402e57;
}

/* ANIMATIONS */

/* Simple CSS3 Fade-in-down Animation */
.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

/* Simple CSS3 Fade-in Animation */
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-moz-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fadeIn {
  opacity: 0;
  -webkit-animation: fadeIn ease-in 1;
  -moz-animation: fadeIn ease-in 1;
  animation: fadeIn ease-in 1;

  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  animation-fill-mode: forwards;

  -webkit-animation-duration: 1s;
  -moz-animation-duration: 1s;
  animation-duration: 1s;
}

.fadeIn.first {
  -webkit-animation-delay: 0.4s;
  -moz-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

.fadeIn.second {
  -webkit-animation-delay: 0.6s;
  -moz-animation-delay: 0.6s;
  animation-delay: 0.6s;
}

.fadeIn.third {
  -webkit-animation-delay: 0.8s;
  -moz-animation-delay: 0.8s;
  animation-delay: 0.8s;
}

.fadeIn.fourth {
  -webkit-animation-delay: 1s;
  -moz-animation-delay: 1s;
  animation-delay: 1s;
}

/* ---------------------- */
/* Create */
/* ---------------------- */

.container-two {
  width: 100vw;
  height: 100vh;
  background: url("./image.png");
}

.onboard-card {
  border: none;
  display: flex;
  padding: 0;
  width: 70%;
  position: relative;
  left: 15%;
  top: 15%;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.09);
  background: rgba(253, 251, 251, 0.7);
  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;
}

.container-two .onboard-card .onboard-img {
  background: url("./4391857.jpg");
  display: block;
  flex-basis: 40%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  border-top-left-radius: 25px;
}

.container-two .onboard-card .onboard-form {
  min-height: 600px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  text-align: center;
  flex-basis: 100%;
}

.container-two .info {
  margin: 2 10px;
}

.step-title {
  display: block;
  color: #0d0d0d;
  font-size: 2rem;
  font-weight: 900;
  letter-spacing: -0.05rem;
}

.parrafo {
  font-size: 1.2rem;
  color: #0d0d0d;
  line-height: 1.8rem;
}

form {
  display: block;
  margin-top: 2em;
}

.responsive {
  flex-direction: column;
}

.responsive div {
  width: 100%;
  margin: 0 5px;
}

.responsive input {
  color: #0d0d0d;
  font-size: 1rem;
  line-height: 1.2rem;
}

.image-card {
  padding: 15px 0;
}

.submit-button button {
  color: #dce8f1;
  padding: 20px 30px;
  font-size: 1rem;
  font-weight: 700;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: 30%;
}

`;
export default TwoFA;