import React from "react"
import styled from "styled-components";


export default function NewsletterAdmin(){

    return(
        <StyledNewsletter>
           <h1>Newsletter</h1>
            <button
                onClick={""}
            >Enviar Newsletter a todos los subscriptos</button>
        </StyledNewsletter>
    )
}

const StyledNewsletter = styled.div`

color:black;
display:flex;
flex-direction:column;
align-items:flex-start;
width:100%;
margin-top: 0.5rem;
height: 100%;

`;