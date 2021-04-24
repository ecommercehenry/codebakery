import { useLazyQuery, useMutation } from "@apollo/client";
import React, { useEffect } from "react";
import { useGoogleLogin } from "react-google-login";
import VALID_USER from "../../Apollo/queries/validateUser"
import { FcGoogle } from "react-icons/fc";
import styled from "styled-components";
import CREATE_USER from "../../Apollo/mutations/createUser";
import { toast } from "react-toastify"; 
import '../../Assets/toast.css';
import VALIDATE_USER_WITH_GOOGLE from "../../Apollo/queries/validateUserWithGoogle";

toast.configure();
const clientId = "896421264771-puonusmobbd2vfeo6b03itcpknghfte7.apps.googleusercontent.com"; 

function Login() {
  // necesitamos crear el usuario
  const [createUser, { loading: loadingUser, data: dataUser }] = useMutation(CREATE_USER);
  // validamos el usuario para generar el token, luego el componente 
  // UserAcount genera la validación automatica ya que hay token en 
  // el local storage(este componente se renderiza en UserAccount)
  const [validate, {loading: loadingValidate, data: dataValidate}] = useLazyQuery(VALIDATE_USER_WITH_GOOGLE);
  // const [login, { loading, data }] = useLazyQuery(VALID_USER);

  const onSuccess = (res) => {
    // 
    // forma con parámetro de dominio alojado (Nota: debe ir comentada si se desea usar la manera de 
    // logueo con creación de usuario)
    // localStorage.setItem('token', res.tokenId);
    // localStorage.setItem('name', res.profileObj.name);
    // localStorage.setItem('email', res.profileObj.email);
    // localStorage.setItem('role', 'user');
    // localStorage.setItem('id', res.googleId);
    // toast(`Bienvenido ${res.profileObj.name}`);
    // // al refrescar el componente padre hace la validacion con los parametros dentro del 
    // // localStorage y habilita si todo está bien
    // window.location.reload();
    // forma de crear usuario usando los valores obtenidos (Nota: se requiere manejar
    // la creación de usuario una vez que ya está creado hacerle saber al usuario cual es su con
    // traseña y además definir que hacer cuando un usuario quiere crear una cuenta pero ya 
    // la había creado con google, Nota2: fue hecho con el modelo de validacion de usuario
    // con nombre de usuario eso se debe modificar, los demás cambios necesarios para vlidacion
    // están hechos)
    // const p = window.promt('Por favor elige tu contra: ')
    // tomamos los datos he intentamos validar, en caso de q ya esté registrado logeamos
    // validate({
    //   variables: {
    //     email: res.profileObj.email
    //   }
    // })
    // let passwordFromPrompt = window.prompt('Type here');
    // let bar = window.confirm('Confirm or deny');
    // 
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
        alert("logueado")
        localStorage.setItem('token', dataValidate.validateUserWithGoogle.token);
        localStorage.setItem('name', dataValidate.validateUserWithGoogle.name);
        localStorage.setItem('email', dataValidate.validateUserWithGoogle.email);
        localStorage.setItem('role', dataValidate.validateUserWithGoogle.role);
        localStorage.setItem('id', dataValidate.validateUserWithGoogle.id);
        // es necesario el reloaded para luego poder redirigir
        toast(`Bienvenido ${dataValidate.validateUserWithGoogle.name}`); 
        window.location.reload();
      }else{
        toast(dataValidate.validateUserWithGoogle.detail);
      }
    }
  }, [loadingValidate, dataValidate]);

  useEffect(()=>{
    if(!loadingUser && dataUser){
      // 
      validate({variables: {email: dataUser.createUser.email}});
      // 
    }
  },[loadingUser, dataUser])
  // 

  // const onFailure = (res) => {
  //   // 
    
  // };

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
