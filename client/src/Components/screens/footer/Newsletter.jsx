import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SUBSCRIBE_USER from "../../../Apollo/mutations/suscribeToNewsletter";

export default function Newsletter() {
  const [suscrito, setSuscrito] = useState(false);

  const [suscribe] = useMutation(SUBSCRIBE_USER, {});
  // const userId = 5;
  let userId = window.localStorage.getItem("id");
  let user = localStorage.name;
  console.log("id--------------->" + userId);
  console.log("user---------->" + user);

  // useEffect(() => {
  //   suscribe({
  //     variables: {
  //       id: userId,
  //       newsletter: suscrito,
  //     },
  //   }, error);
  // }, [suscrito]);

  function handleSubmit(e) {
    e.preventDefault();
    setSuscrito(true);
    suscribe({
      variables: {
        id: +userId,
        newsletter: true,
      },
    });
  }
  return (
    <>
      {user ? (
        <StyledNewsletter onSubmit={handleSubmit}>
          <h2> suscribite a nuestro Newsletter</h2>
          <p>participa de sorteos, enterarte de descuentos exclusivos</p>

          {suscrito ? (
            <p> Thanks for subscribe!! </p>
          ) : (
            <button type="submit" className="search-btn">
              subscribe
            </button>
          )}
        </StyledNewsletter>
      ) : (
        <StyledNewsletter>
          Login to subscribe our Newsletter
          <Link to="/log-in">
            <button className="btn">Go</button>
          </Link>
        </StyledNewsletter>
      )}
    </>
  );
}

const StyledNewsletter = styled.form`
  border-radius: 10px;
  padding: 20px 10px;
  width: 50%;
  margin: auto;
  color: #694e7a;
  font-size: 1.5rem;
  background: #7555880a;

  .search-btn {
    color: #e2d9d9;
    width: 15%;
    padding: 10px 10px;
    border: solid 1px #cecece;
    border-radius: 40px;
  }
  .btn {
    background-color: hsla(
      277.6470588235294,
      23.076923076923077%,
      43.333333333333336%,
      0.62
    );
    color: #e2d9d9;
    width: 10%;
    padding: 6px 6px;
    border: solid 1px #cecece;
    border-radius: 40px;
    margin-left: 1rem;
  }
  .btn:hover {
    background-color: #6944a5;
    color: #ffffff;
  }
  .btn:active {
    background-color: #ffffff;
    color: #6944a5;
  }
`;
