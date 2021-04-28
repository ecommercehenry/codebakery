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

const StyledFooter = styled.div`

    height: 12rem;
    width: 100%;
    background-color: #533f66;

`;
