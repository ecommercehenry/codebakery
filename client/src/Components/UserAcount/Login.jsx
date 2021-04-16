import React from "react";
import { useGoogleLogin } from "react-google-login";

import { FcGoogle } from "react-icons/fc";
import styled from "styled-components";

const clientId =
  "896421264771-puonusmobbd2vfeo6b03itcpknghfte7.apps.googleusercontent.com";

function Login() {
  const onSuccess = (res) => {
    console.log(res);
    console.log("Login Success: currentUser:", res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    //refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    
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
