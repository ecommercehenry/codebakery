import { useLazyQuery, useMutation } from "@apollo/client";
import React, { useEffect } from "react";
import { useGoogleLogin } from "react-google-login";
import VALID_USER from "../../Apollo/queries/validateUser"
import { FcGoogle } from "react-icons/fc";
import styled from "styled-components";
import CREATE_USER from "../../Apollo/mutations/createUser";
import { toast } from "react-toastify";
import '../../Assets/toast.css';

toast.configure()

const clientId = "896421264771-puonusmobbd2vfeo6b03itcpknghfte7.apps.googleusercontent.com"; 

function Login() {
  // necesitamos crear el usuario
  const [createUser, { loading: loadingUser, data: dataUser }] = useMutation(CREATE_USER);
  // validamos el usuario para generar el token, luego el componente 
  // UserAcount genera la validación automatica ya que hay token en 
  // el local storage(este componente se renderiza en UserAccount)
  const [login, { loading, data }] = useLazyQuery(VALID_USER);

  const onSuccess = (res) => {
    // console.log(res);
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
    
    let passwordFromPrompt = window.prompt('Type here');
    // let bar = window.confirm('Confirm or deny');
    // console.log(foo);
    createUser({
      variables: {
        name: res.profileObj.name,
        password: passwordFromPrompt,
        email: res.profileObj.email,
        role: "user",
        google: true
      },
    });
    //refreshTokenSetup(res);
    // console.log('usuario creado', dataUser)
  };
  // descomentar ambos useEffect para el logeo con creación de usuario
  useEffect(()=>{
    // console.log('logeado........')
    if(!loading && data){
      if(data.validateUser.token){
        alert("logueado")
        localStorage.setItem('token', data.validateUser.token);
        localStorage.setItem('name', data.validateUser.name);
        localStorage.setItem('email', data.validateUser.email);
        localStorage.setItem('role', data.validateUser.role);
        localStorage.setItem('id', data.validateUser.id);
        // es necesario el reloaded para luego poder redirigir
        toast(`Bienvenido ${data.validateUser.name}`);
        window.location.reload();
      }else{
        toast(data.validateUser.detail);
      }
    }
  }, [loading, data]);

  useEffect(()=>{
    if(!loadingUser && dataUser){
      console.log('usuario creado', dataUser);
      login({variables: {name: dataUser.createUser.name, password:'12345'}});
    }
  },[loadingUser, dataUser])
  // console.log('despues de on success', data)

  // const onFailure = (res) => {
  //   // console.log("Login failed: res:", dataUser);
    
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
