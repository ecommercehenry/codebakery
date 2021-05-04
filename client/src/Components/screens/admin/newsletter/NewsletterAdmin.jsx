import { useMutation } from "@apollo/client";
import React from "react";
import styled from "styled-components";
import SEND_NEWSLETTER from "../../../../Apollo/mutations/sendNewsletter";

export default function NewsletterAdmin() {
  const messajeExport =
    "NEWSLETTER from CodeBakery (..Patsy, contenido muy pronto)";
  const [sendNews, loading, error] = useMutation(SEND_NEWSLETTER, {});

  function handlerOnClick(e) {
    e.preventDefault();
    sendNews({
      variables: {
        message: messajeExport,
      },
    });

    alert("Newsletter Enviado!");
  }
  return (
    <StyledNewsletter>
      <h1>Newsletter</h1>
      -- Aqui renderizar formulario o textarea para escribir el mensaje a
      enviar-
      <button onClick={handlerOnClick}>Send Newsletter</button>
    </StyledNewsletter>
  );
}

const StyledNewsletter = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 0.5rem;
  height: 100%;

  button {
    border: none;
    color: beige;
    border-radius: 15px;
    padding: 1px;
    margin-left: 6px;
    height: fit-content;
    background-color: rgb(126, 96, 155);
    border: none;
    padding: 6px;
  }
`;
