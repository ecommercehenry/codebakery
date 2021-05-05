import React from "react";
import Newsletter from "./Newsletter";
import styled from "styled-components";
import { Link } from "react-router-dom";

// IMG
import footer from "./footer.jpg";

// Icons
import fb from "./img/Orion_facebook.svg";
import tw from "./img/Orion_twitter.svg";
import wa from "./img/Orion_whatsapp.svg";
import is from "./img/Orion_instagram.svg";

export default function Footer() {
  return (
    <>
      <StyledFooter>
        <Newsletter />
        <div className="adicionales">
          <div className="legales">
            <p>Aviso Legal</p>
            <p>Politica de Privacidad</p>
            <p>Politica de Cockies</p>
            <p>Copyright © </p>
            <Link to="/about-us" style={{ textDecoration: "none" }}>
              <p className="linea-final">Desarrollado por alumnos de Henry</p>
            </Link>
          </div>
        </div>
        <div className="redes">
          <a target="_blank" rel="noopener noreferrer" href="https://es-la.facebook.com/">
            <img className="icon-git" src={fb} alt="Facebook" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/?lang=es">
            <img className="icon-git" src={tw} alt="Twitter" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://web.whatsapp.com/">
            {" "}
            <img className="icon-git" src={wa} alt="Whatsapp" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/?hl=es-la">
            <img className="icon-git" src={is} alt="Instagram" />
          </a>
        </div>
      </StyledFooter>
    </>
  );
}

const StyledFooter = styled.footer`
  background: url(${footer});
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;

  margin-top: 3rem;
  /* justify-content: center; */
  border-top: 1px inset #694e7a;

  .legales {
    padding: 1rem;
    width: inherit;
  }

  .redes {
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .icon-git {
    height: 2rem;
    width: 2rem;
    margin-bottom: 1rem;
  }

  p {
    color: #694e7a;
    margin: 0;
  }
  .adicionales {
    width: 80%;
    margin: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .linea-final {
    background-color: hsla(
      277.6470588235294,
      23.076923076923077%,
      43.333333333333336%,
      0.62
    );
    color: hsl(264.00000000000017, 26.31578947368428%, 96.27450980392156%);
    padding: 1rem;
    border-radius: 10px;
  }

  .linea-final:hover {
    background-color: #694e7a;
  }
`;
