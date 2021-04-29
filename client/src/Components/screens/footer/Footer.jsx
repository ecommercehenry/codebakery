import React from "react"
import Newsletter from "./Newsletter";
import styled from 'styled-components';


export default function Footer (){



    return(
        <>
        <StyledFooter>
            <Newsletter/>
        </StyledFooter>
       
        </>
    )
}

const StyledFooter = styled.footer`

  
background-color: #533f66;
   
   padding: 50px 20px;
   display: flex;
   flex-direction: column;
   text-align: center;
   position: relative;

    /* height: 12rem;
    width: 100%;
    background-color: #533f66; */

`;
