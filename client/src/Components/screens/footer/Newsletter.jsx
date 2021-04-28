import React, { useState } from "react"
import styled from 'styled-components';


export default function Newsletter (){
    const [input, setInput] = useState()
    function handlerChange(){

    }
    function handleSubmit(){
        
    }


    return(
        <>
        <StyledNewsletter>
            <h2> suscribite a nuestro Newsletter</h2>
            <p>participa de sorteos, enterarte de descuentos exclusivos</p>
            <input 
                type="text"
                placeholder="Let us your email"
                value={input}
                onChange={handlerChange}
            />
            <button 
                onClick={handleSubmit}
                className="purple-btn2"
            > Send </button>

        </StyledNewsletter>
       
        </>
    )
}

const StyledNewsletter = styled.form`

    height: 6rem;
    width: 60%;
    margin: auto;
    background-color: #b69ad1;
    border-radius: 2rem;
    align-items: center;

    input{
      width:30%;
      height:2rem;
      border: 1px solid;
      font-size:1.3rem;
     
      text-align: left;
  }
  .purple-btn2 {   
    border-radius: 40px;
    border: none;
    background-color: #5e3f71;   
    color: white;
    font-weight: bold;
    font-size: 1em;    
    padding: 1em;     
    align-items: center;
  }
   


`;