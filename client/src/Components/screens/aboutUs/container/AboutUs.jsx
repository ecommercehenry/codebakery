import React from "react";
import styled from "styled-components";
import Git from "./img/github.png";
import Linke from "./img/linkedin.png";
import profile from "./img/profile.png";


const AboutUs = ({ name, title, img, git, linkedin }) => {
  const IMG = img ? img : profile;
  return (
    <AboutUsConteiner>
     
      <div className="main center">
        <div className="card">
              <div
                className="content center"
                style={{
                  background: `url(${IMG})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              > </div>
        </div>
        <div className="text">
              <h2>{name}</h2>
              <p>{title}</p>
              <div className="icons">
                <a target="_blank" rel="noopener noreferrer" href={git}>
                  <img className="icon-git" src={Git} alt="GitHub" />
                </a>

                <a target="_blank" rel="noopener noreferrer" href={linkedin}>
                  <img className="icon-linke" src={Linke} alt="Likedin" />
                </a>
          </div>
          </div>
      </div>
    </AboutUsConteiner>
   
  );
};


const AboutUsConteiner = styled.div`
  * {
    margin: 0;
    padding: 0;
    border-radius: 9999px;
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .main {
    width: 100%;
    margin-top: 40px;
  }
  .text {
    width:fit-content;
    height: auto;
    padding:1rem;
  }
  .card {
    width: 15rem;
    height: 15rem;
    position: relative;
   
    overflow: hidden;
    border-radius: 9999px;
  }
  .content {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    color: #d0293e;

  }
  h2 {
    font-weight: 800;
    font-size: 20px;
    margin: 0px 0px 0px 0px;

    line-height: 120%;

    opacity: 0.7;
    text-align: center;
    
  }

  p {
    margin-top: 0.3rem;
    padding: 0.2rem;
  }

  .card:hover > .icons {
    transform: translate(0);
  }

 

  .icons {
    display:flex;

    justify-content:center;
    align-items:center;
  }

  .icons i {
    margin: 10px 0px;
  }
  .icon-git,
  .icon-linke,
  .icon-insta {
    width: 50px;
    padding: 10px;
  }

  .icon-git:hover,
  .icon-linke:hover,
  .icon-insta:hover {
    opacity: 0.7;
    padding: 5px;
  }

  @media (max-width: 768px) and (min-width: 481px) {
    .card {
      width: 10rem;
      height: 10rem;
      position: relative;
      overflow: hidden;
      border-radius: 9999px;
    }

    .main {
      width: 100%;
      margin-left:20px;
      margin-right:20px;
      margin-top: 40px;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    .card {
      width: 8rem;
      height: 8rem;
      position: relative;
      overflow: hidden;
      border-radius: 9999px;
    }

    .main {
      width: 80%;
      margin-left:25px;
      margin-right:25px;
      margin-top: 40px;
    }
  }

  @media (min-width: 150px) and (max-width: 319px) {
    .card {
      width: 7rem;
      height: 7rem;
      position: relative;
      overflow: hidden;
      border-radius: 9999px;
    }

    .main {
      width: 80%;
      margin-left:25px;
      margin-right:25px;
      margin-top: 40px;
    }
  }
`;

export default AboutUs;
