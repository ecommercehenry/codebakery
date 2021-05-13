import React from "react";
import Newsletter from "./Newsletter";
import styled from "styled-components";
import { Link } from "react-router-dom";

// IMG
import footer from "./footer.jpg";

// Icons
import fb from "./img/Orion_facebook.svg";
import is from "./img/Orion_instagram.svg";

export default function Footer() {
  return (
    <>
      <StyledFooter>
        <Newsletter />
        <div className="redes">
         <h5>Follow Us!</h5>
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/codebakery.ar">
            <img className="icon-git" src={fb} alt="Facebook" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/codebakery.ar/">
            <img className="icon-git" src={is} alt="Instagram" />
          </a>
        </div>
        <div className="plano">
        <div className="adicionales">
          <div className="legales">
            <p>Copyright © 2021 | <Link to="/about-us" className="color">
           Developed by Students from Henry's Bootcamp
              </Link></p>
            
            </div>
          </div>
        </div>
      </StyledFooter>
    </>
  );
}

const StyledFooter = styled.footer`
 background: url(${footer});

 width: 100%;

  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  color:white;

  /* justify-content: center; */
  border-top: 1px inset #694e7a;

  .legales {
    
    width: inherit;
   
  }
  .legales p{
    color: white;
    margin: 0;
  }
  .color{
    color:white;
  }
  .legales h6{
    margin:10px;
    color:white;
  }

  .legales h6: hover{
    color:#EDC174;
  }
  .plano {
    padding:8px;
    width: 100%;
    background-color: #3f2551;
  }

  .redes {
    //background-color:green;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }

  .icon-git {
    height: 1.5 rem;
    width: 1.5rem;
    margin-bottom: 0.5rem ;
    
  }

  .adicionales {
    width: 100%;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  
  }


  @media (max-width: 500px)  {
    .redes {
      //background-color:green;
      width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;

      .icon-git {
        height: 1.5 rem;
        width: 1.5rem;
        margin-bottom: 0.5rem ;
        
      }
      
    }

  }


  // .linea-final {
  //   background-color: hsla(
  //     277.6470588235294,
  //     23.076923076923077%,
  //     43.333333333333336%,
  //     0.62
  //   );
  //   color: hsl(264.00000000000017, 26.31578947368428%, 96.27450980392156%);
  //   padding: 1rem;
  //   border-radius: 10px;
  // }

  // .linea-final:hover {
  //   background-color: #694e7a;
  // }
`;
