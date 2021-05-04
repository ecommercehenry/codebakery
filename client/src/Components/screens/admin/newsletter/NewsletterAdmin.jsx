import { useMutation } from "@apollo/client";
import React from "react";
import styled from "styled-components";
import SEND_NEWSLETTER from "../../../../Apollo/mutations/sendNewsletter";

export default function NewsletterAdmin() {
  const messajeExport = "aqui va el mensaje creado para el NEWSLETTER";
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
      <button onClick={handlerOnClick}>
        Enviar Newsletter a todos los subscriptos
      </button>
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
`;
