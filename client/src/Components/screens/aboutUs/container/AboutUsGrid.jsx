import React from "react";
import styled from "styled-components";
import NavBar from "../../navBar/NavBar";
import AboutUs from "./AboutUs";
import { Us } from "./Us";
import { useSelector } from "react-redux";
import {motion} from 'framer-motion';
import {pageAnimation} from '../../../PageAnimation'

const AboutUsGrid = () => {
  let { status } = useSelector((state) => state.theme);
  return (
    <StyledWrapper variants={pageAnimation} initial='hidden' animate='show' exit='exit' light={status}>
      <div style={{backgroundColor: '#5e3f71'}} >
        <div id="navBackground">
          <NavBar color="white" />
        </div>
      </div>
      <AboutUsInfo>
        <h1>Meet Our team</h1>
        <p>
        We are students from <a target="_blank" rel="noopener noreferrer" href="https://www.soyhenry.com/"> 
            Henry's bootcamp
          </a> {" "}  where <span>Code Bakery</span> is our final project. 
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
    </StyledWrapper>
  );
};


const media = {
  //tablet: "@media(min-width:768px)",
  laptop: "@media(min-width:992px)",
  desktop: "@media(min-width:1200px)",
  ipads: "(max-width: 768px) and (min-width: 481px)",
  celular: "(max-width: 480px) and (min-width:320px)",
};

const StyledWrapper = styled(motion.div)`
  background: ${({ light }) => 
    (light ? 
    "white" : 
    "#222222")};
  color: ${({ light }) => 
    (light ? 
    "inherit" : 
    "white")};
`

const AboutUsInfo = styled.div`
  background: ${({ light }) => 
    (light ? 
    "#f4f2f8" : 
    "#cec7dd")};
  align-items: center;
  justify-content: center;
  padding: 3rem;
  color: #402e57;
  font-weight: 500;
  line-height: 1;


  h1 {
    display: block;
    text-align: center;
    font-weight: 800;
    font-size: 28px;
  }

  span {
    font-weight: 900;
    color: #8a6db1;
  }

  p {
    color: #777777;
    font-size: 16px; 
    line-height: 26px; 
    text-indent: 30px; 
    margin: 0;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: #402e57;
  }
`;

const AboutUsConteinerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;

  ${media.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
  ${media.laptop} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
  }

  ${media.ipads} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }

  ${media.celular} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.5rem;
  }
`;
export default AboutUsGrid;
