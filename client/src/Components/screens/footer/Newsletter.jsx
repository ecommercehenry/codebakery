import React, { useState } from "react"
import styled from 'styled-components';
import footerImage from "./footer.jpg"


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
                onChange={handlerChange}/>            
            <button id="search-btn">Submit</button> 
        </StyledNewsletter>       
        </>
    )
}

const StyledNewsletter = styled.form`   
       
    background-image: url(${footerImage});
    border-radius: 10px;
    padding: 50px 20px;
    
    text-align: center;
    position: relative;

    input{
      width:30%;
      height:3rem;
      font-size:1.3rem;     
      text-align: left;
      border-radius: 2rem;

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
  background: #e9e8e8;
  display: flex;
  align-items: center;
  position:relative;
  z-index:2;
  transform:translateY(-50%);
  margin:auto;
  height: 3rem;
  width: 50%;
  padding: 0 0.5rem;
  display:flex;
  justify-content:space-between;
  align-items:center;
  border: 1.3px solid #949494;
  border-radius:20px;
  button{
      width:10%;
      height:2rem;
      border:none;
      background: none;
  }
  select{
      width:fit-content;
      height:2rem;
      font-size:1.1rem;
      border-radius:13px;
      padding: 0 0.5rem;
      background:#cfcfcf;
      border:none;
  }
  #search-form{
    margin-top: 0;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    input{
      width:70%;
      height:2rem;
      border:none;
      font-size:1.3rem;
      background: none;
      text-align: left;
  }

  #search-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    right: 0;
    color: black;
    width: 10%;
    padding: 10px 40px;
    border: solid 1px #CECECE;
    border-radius: 40px;
  }
  }

    /* height: 6rem;
    width: 60%;
    
    background-color: #b69ad1;
    border-radius: 2rem;
    margin-top:1rem;
    padding: 3rem;
    

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
  }  */


`;