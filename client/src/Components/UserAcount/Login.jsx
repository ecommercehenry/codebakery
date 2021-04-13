import React from "react";
import { useGoogleLogin } from "react-google-login";

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
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <button onClick={signIn} className="button">
      <span className="buttonText">Sign in with Google</span>
    </button>
  );
}

export default Login;
