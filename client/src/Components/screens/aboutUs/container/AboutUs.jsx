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
          >
            <h2>{name}</h2>
            <p>{title}</p>
          </div>
          <div className="icons center">
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
    margin-top: 80px;
  }
  .card {
    width: 23rem;
    height: 23rem;
    position: relative;
    box-shadow: 4px 2px 10px rgb(96, 18, 160);
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
  .content h2 {
    margin-top: 12rem;
    background: aliceblue;
    opacity: 0.7;
    padding: 0.3rem;
  }

  .content p {
    margin-top: 0.3rem;
    background: aliceblue;
    opacity: 0.8;
    padding: 0.3rem;
  }

  .icons {
    width: 100%;
    height: 100%;
    background: #8a6db1;
    position: absolute;
    left: 0;
    top: 0;
    color: aliceblue;
    transform: translate(-95%);
    transition: all 0.8s;
    cursor: pointer;
    opacity: 0.9;
  }

  .icons i {
    margin: 10px 0px;
  }

  .card:hover > .icons {
    transform: translate(0);
  }

  .img img {
    width: 7rem;
    border-radius: 2rem;
  }

  .icon-git,
  .icon-linke,
  .icon-insta {
    width: 100px;
    padding: 10px;
  }
  .icon-git:hover,
  .icon-linke:hover,
  .icon-insta:hover {
    opacity: 0.7;
    padding: 5px;
  }
`;

export default AboutUs;
