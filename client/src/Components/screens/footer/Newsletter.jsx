import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SUBSCRIBE_USER from "../../../Apollo/mutations/suscribeToNewsletter";
import getUserById from "../../../Apollo/queries/getUserById";

export default function Newsletter() {
  
  let userId = window.localStorage.getItem("id");    
  const [newSubs, setNewSubs] = useState(false);
  const [suscribe] = useMutation(SUBSCRIBE_USER, {});


  const { data } = useQuery(getUserById, { 
    variables: { id: parseInt(userId) },
    // fetchPolicy: "no-cache",
  });

  // const {name, id, newsletter} = data?.getUserById
  const newsletter = data?.getUserById.newsletter
  console.log(newsletter)
 

  function handleSubmit(e) {
    e.preventDefault();    
    setNewSubs(true)
    suscribe({
      variables: {
        id: +userId,
        newsletter: true,
      },
    });
  }
  return (
    <>
      { !newsletter && userId  ? (
        <StyledNewsletter onSubmit={handleSubmit}>
          <h2 > Suscribe to our Newsletter</h2>
          <span className="ocultar">Join our suscribers list to get the latest news, updates and special offers delivered directly in your inbox </span>


          {newSubs ? (

           <h4> Thanks for subscribe!! </h4>
          ) : (
            <button type="submit" className="suscribe-btn">
             <span className="fontbold">SUSCRIBE</span>
            </button>
          )}
        </StyledNewsletter>
      ) : userId && newsletter ? (
        <h5> Check your email for view more news!! </h5>
       ) : (
        <StyledNewsletter>
          <h6>Login to subscribe our Newsletter</h6>
          <Link to="/log-in" className="center">
            <button className="btn">Go</button>
          </Link>
        </StyledNewsletter>
      )}
    </>
  );
}

const StyledNewsletter = styled.form`

border-radius: 10px;
padding: 3px 10px;
width: 50%;
margin-top: 15px;
color: white;
font-size: 1rem;
//background-color: green;

h2{
  color:#EDC174;
}

.suscribe-btn {
  margin:10px;
  color:white;
  width:20rem;
  padding: 10px 10px;
  border: solid 2px ;
  border-radius: 40px;
  border-color: white;
  background-color: Transparent; /* Green */;
  transition: 0.3s;
}

.fontbold{
  font-weight: 600;
}


.suscribe-btn :hover {

  background-color: white;
  color:#755588;

}
.center {
  display:block;
  align-content:center;
  justify-content:center;
}
.btn {
  
  margin:8px;
  align-content:center;
  justify-content:center;
  color:white;
  width:10rem;
  border: solid 2px ;
  border-radius: 40px;
  border-color: white;
  transition: 0.3s;
 
}

.btn:hover {
  
  background-color: white;
  color:#755588;
 
}


@media (max-width: 500px)  {
  .ocultar {
    display: none!important; 
  }
  h2{
    font-size: 1em!important;
  }
  .suscribe-btn {
    margin:10px;
    color:white;
    width:10rem;
    padding: 10px 10px;
    border: solid 2px ;
    border-radius: 40px;
    border-color: white;
    background-color: Transparent; /* Green */;
    transition: 0.3s;
  }
}



  
`;
