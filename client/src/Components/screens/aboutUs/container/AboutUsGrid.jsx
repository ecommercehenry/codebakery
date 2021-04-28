import React from "react";
import styled from "styled-components";

import AboutUs from "./AboutUs";
import { Us } from "./Us";

const AboutUsGrid = () => {
  return (
    <>
      <AboutUsInfo>
        <h1>SOBRE NOSOTROS</h1>
        <p>
          Nosotros somos el equipo detras de <span>Code Bakery</span>. El
          e-commerce forma parte de un proyecto final del bootcamp intensivo de
          <a target="_blank" rel="noopener noreferrer" href="https://www.soyhenry.com/">
            "Henry".
          </a>{" "}
          Conocenos más a fondo en nuestras redes sociales.
        </p>
      </AboutUsInfo>
      <AboutUsConteinerGrid>
        {Us.map((u, i) => {
          return (
            <AboutUs
              key={i}
              name={u.name}
              title={u.title}
              img={u.img}
              git={u.git}
              linkedin={u.lin}
            />
          );
        })}
      </AboutUsConteinerGrid>
    </>
  );
};

const media = {
  tablet: "@media(min-width:768px)",
  laptop: "@media(min-width:992px)",
  desktop: "@media(min-width:1200px)",
};

const AboutUsInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background: #f4f2f8;
  color: #402e57;
  font-family: "RocknRoll One", sansrif;
  font-size: large;
  line-height: 2;
  box-shadow: 4px 2px 10px rgb(96, 18, 160);
  border-bottom: 0.3rem solid #f4f2f8;

  h1 {
    padding: 3rem;
  }

  span {
    font-weight: 900;
    color: #8a6db1;
  }

  a {
    text-decoration: none;
    color: #402e57;
  }
`;

const AboutUsConteinerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  ${media.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
  ${media.laptop} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
`;

export default AboutUsGrid;
