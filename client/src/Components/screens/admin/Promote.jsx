import React from "react";
import { useMutation } from "@apollo/client";
import MODIFY_USER from "../../../Apollo/mutations/modifyUser";


//necesito el id del usuario
//necesito saber si el admin esta logueado
//Ejecutar la query modifyUser
//Cambiarle el rol

//@ Lau
//Promote recibira el id del componente padre, ese componente renderizara este boton y le pasara como propiedad el id del usuario actual.. Por ahora harcode violento
export default function Promote (idUser){

    const [promoteUser, { data, loading, error }] = useMutation(MODIFY_USER);
    
    function clickOnPromote (e){    
        e.preventDefault()
        promoteUser({
            variables: {
              id,
              data: {                
                role:"admin",
                 
               
              },
            },
          });
          alert("user  promote!!!");
          handlerOnClick();
        
      
    }
    return(
        <>
        <button 
            onClick={clickOnPromote}
            className=""
            
        >Convertir en Admin</button>
        </>
    )
}