import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import MODIFY_PRODUCT from "../../../Apollo/mutations/modifyProduct";


//necesito el id del usuario
//Ejecutar la query modifyUser
//Cambiarle el rol

//@ Lau
//Promote recibira el id del componente padre, ese componente renderizara este boton y le pasara como propiedad el id del usuario actual.. Por ahora harcode violento
function Promote (){
    return(
        <>
        <button onClick="">Convertir en Admin</button>
        </>
    )
}