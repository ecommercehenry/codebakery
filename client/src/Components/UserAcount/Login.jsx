import { useLazyQuery, useMutation } from "@apollo/client";
import React, { useEffect } from "react";
import { useGoogleLogin } from "react-google-login";
import validateUser from "../../Apollo/queries/validateUser"
import { FcGoogle } from "react-icons/fc";
import styled from "styled-components";
import CREATE_USER from "../../Apollo/mutations/createUser";

const clientId = "896421264771-puonusmobbd2vfeo6b03itcpknghfte7.apps.googleusercontent.com"; 

function Login() {
  // necesitamos crear el usuario
  const [createUser, { loading: loagingUser, data: dataUser }] = useMutation(CREATE_USER);
  const [login, { loading, data }] = useLazyQuery(validateUser); 
  // const [login, { loading, data }] = useLazyQuery(validateUser); 
  // validar el usuario!!??
  // 
  const onSuccess = (res) => {
    console.log(res);
    console.log("Login Success: currentUser:", res.profileObj);
    createUser({
      variables: {
        name: res.profileObj.name,
        password: '12345',
        email: res.profileObj.email,
        role: "user",
        google: true
      },
    });
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    //refreshTokenSetup(res);
    // console.log('usuario creado', dataUser)
  };
  useEffect(()=>{
    if(!loagingUser){
      console.log('usuario creado', dataUser)
    }
  },[loagingUser, dataUser])
  // console.log('despues de on success', dataUser)

  const onFailure = (res) => {
    console.log("Login failed: res:", dataUser);
    
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    //isSignedIn: true,
    accessType: "offline",
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <StyledGoogleSignUp onClick={signIn} className="wrapper fadeInDown">
      <FcGoogle />
      <span className="fadeIn first"> Sign in with Google</span>
    </StyledGoogleSignUp>
  );
}

const StyledGoogleSignUp = styled.button`
  display: block;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 15px;
  background-color: #e8daef;
  color: #402e57;
  border: 1px solid #402e57;
`;

export default Login;
