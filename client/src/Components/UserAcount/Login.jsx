import { useLazyQuery, useMutation } from "@apollo/client";
import React, { useEffect } from "react";
import { useGoogleLogin } from "react-google-login";
import { FcGoogle } from "react-icons/fc";
import styled from "styled-components";
import CREATE_USER from "../../Apollo/mutations/createUser";
import { toast } from "react-toastify"; 
import '../../Assets/toast.css';
import VALIDATE_USER_WITH_GOOGLE from "../../Apollo/queries/validateUserWithGoogle";
import { useDispatch } from "react-redux";
import { saveDataProfile } from "../../actions/dataProfileActions";

toast.configure();
const clientId = "665438682738-h07vsict9p633du2obn2b9rga62lptbe.apps.googleusercontent.com"; 

function Login() {
  const dispatch = useDispatch();
  // necesitamos crear el usuario
  const [createUser, { loading: loadingUser, data: dataUser }] = useMutation(CREATE_USER);
  // validamos el usuario para generar el token, luego el componente 
  // UserAcount genera la validación automatica ya que hay token en 
  // el local storage(este componente se renderiza en UserAccount)
  const [validate, {loading: loadingValidate, data: dataValidate}] = useLazyQuery(VALIDATE_USER_WITH_GOOGLE);
  // const [login, { loading, data }] = useLazyQuery(VALID_USER);

  const onSuccess = (res) => {
    console.log({variables: {
      name: res.profileObj.name,
      password: res.googleId,
      email: res.profileObj.email,
      role: "user",
      google: true
    }})
    createUser({
      variables: {
        name: res.profileObj.name,
        password: res.googleId,
        email: res.profileObj.email,
        role: "user",
        google: true
      },
    });
  };
  // vemos si la validacion trae el usuario
  // descomentar ambos useEffect para el logeo con creación de usuario
  useEffect(()=>{
    // 
    if(!loadingValidate && dataValidate){
      if(dataValidate.validateUserWithGoogle.token){
        if(dataValidate.validateUserWithGoogle.twoFA ){
          dispatch(saveDataProfile(dataValidate.validateUserWithGoogle));
          // alert('se va a reload 1 login')
          // window.location.reload();
        }
        else{
          localStorage.setItem('token', dataValidate.validateUserWithGoogle.token);
          localStorage.setItem('name', dataValidate.validateUserWithGoogle.name);
          localStorage.setItem('email', dataValidate.validateUserWithGoogle.email);
          localStorage.setItem('role', dataValidate.validateUserWithGoogle.role);
          localStorage.setItem('id', dataValidate.validateUserWithGoogle.id);
          // es necesario el reloaded para luego poder redirigir
          toast(`Bienvenido ${dataValidate.validateUserWithGoogle.name}`);
          // window.location.reload();
          window.location.reload();
        }
      }else{
        toast(dataValidate.validateUserWithGoogle.detail);
      }
    }
  }, [loadingValidate, dataValidate, dispatch]);

  useEffect(()=>{

    if(!loadingUser && dataUser){
      // 
      validate({variables: {email: dataUser.createUser.email}}); 
      // 
    }
  },[loadingUser, dataUser, validate])


  const { signIn } = useGoogleLogin({
    onSuccess,
    // onFailure,
    clientId,
    isSignedIn: false,
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
