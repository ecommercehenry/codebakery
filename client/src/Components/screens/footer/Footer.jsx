import React from "react";
import Newsletter from "./Newsletter";
import styled from 'styled-components';

export default function Footer (){
    return(
        <>
        <StyledFooter>
            <Newsletter/>
            <div className="adicionales">

            <div className="redes">
                redes sociales
            </div>
            <div className="legales">
                <p>Aviso Legal</p>
                <p>Politica de Privacidad</p>
                <p>Politica de Cockies</p>
            </div>
            </div>
            <p>Copyright © </p>
            <p className="linea-final">Desarrollado por alumnos de Henry</p>
        </StyledFooter>       
        </>
    )
}

const StyledFooter = styled.footer`
  
background-color: #533f66;   
   padding: 20px 20px;
   display: flex;
   flex-direction: column;
   text-align: center; 

   .legales{
       padding:1rem;
   }
  p{
      color:gray;
      margin:0;
    }
    .adicionales {
        margin: 1rem;
        display: flex;
        justify-content: space-around;
    }
    .linea-final {
        background-color: black;
        color: #bca1f5;
        position: relative;   
       
        bottom: -20px;
        left: -10px;
        width:100%;       
        padding: 1rem;
    }
    /* height: 12rem;
    width: 100%;
    background-color: #533f66; 
    
    Pablo-----*/
  
  height: 10rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px inset #694e7a;


`;
