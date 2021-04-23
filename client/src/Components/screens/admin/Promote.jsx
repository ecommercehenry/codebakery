import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import PROMOTE_USER from "../../../Apollo/mutations/promoteUser";
import { Redirect } from "react-router";
import "./promote.css"

//@ Lau
//Promote recibira el id del componente padre, ese componente renderizara este boton y le pasara como propiedad el id del usuario actual.. Por ahora harcode violento
export default function Promote (idUser){
    idUser = 2;       

    const [promoteUser, { loading, error }] = useMutation(PROMOTE_USER);
  
  let role = localStorage.getItem('role');
  let token = localStorage.getItem('token'); 
    
    function clickOnPromote (e){       
        e.preventDefault()
        if(role  && token){
            // el boton solo se podra usar si el rol guardado en local storage y el token corresponde a un admin
            if(role === 'admin'){         
             
              promoteUser({
                variables: {
                    id: idUser,                 
                    role: "admin"                            
                },
              });
                alert(`user ${idUser} promote!!!`);
            
            }
            else if(role === 'user') return <Redirect to='/catalogue' />;
        }        
      
    }
    return(
        <>
        <button 
            onClick={clickOnPromote}
            className="button-promote"
            style={{height: "4.5vh"}}            
        >Convertir en Admin</button>
        </>
    )
}
