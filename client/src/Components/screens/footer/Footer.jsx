import React from "react";
import Newsletter from "./Newsletter";
import styled from "styled-components";
import footer from "./footer.jpg";

export default function Footer() {
  return (
    <>
      <StyledFooter>
        <Newsletter />
        <p>Todos los derechos y los izquierdos bien puestos</p>
      </StyledFooter>
    </>
  );
}

const StyledFooter = styled.footer`
  background: url(${footer});
  height: 10rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px inset #694e7a;
  box-shadow: 10px 10x 15px black;
`;
