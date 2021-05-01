import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react"
import styled from 'styled-components';
import SUBSCRIBE_USER from "../../../Apollo/mutations/suscribeToNewsletter";
// import { sendNewsletter } from "../../../../../api/src/services/newsletterService";
import footerImage from "./footer.jpg"


export default function Newsletter (){
    const [suscrito, setSuscrito] = useState(false)
    
    const [suscribe, { loading, error }] = useMutation(SUBSCRIBE_USER, {});
    const userId = 5;
   
    function handleSubmit(e){
      e.preventDefault();
        
        suscribe({
          variables: {
            id: userId,
            newsletter: true,
          },
        });
        setSuscrito(true)
    }
    return(
        <>
        <StyledNewsletter
        onSubmit={handleSubmit}>
            <h2> suscribite a nuestro Newsletter</h2>
            <p>participa de sorteos, enterarte de descuentos exclusivos</p>            
          <button 
            type="submit"
            id="search-btn">Acept</button> 
            {suscrito ? <p> Thanks for subscribe!! </p>: <p></p>}
        </StyledNewsletter>       
        </>
    )
}

const StyledNewsletter = styled.form`   
       
    background-image: url(${footerImage});
    border-radius: 10px;
    padding: 20px 10px;
    width: 50%;
    margin: auto;
   
  
  #search-btn{    
   
    color: #e2d9d9;
    width: 15%;
    padding: 10px 10px;
    border: solid 1px #CECECE;
    border-radius: 40px;
  }
    

`;