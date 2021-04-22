import React from "react";
import styled from "styled-components";

import Profile from "./img/pablo.jpg";

import Git from "./img/github.png";
import Linke from "./img/linkedin.png";

const AboutUs = () => {
  return (
    <AboutUsConteiner>
      <div className="main center">
        <div className="card">
          <div className="content center">
            <div className="img">
              <img src={Profile} alt="profile" />
            </div>
            <h2>Pablo Garay</h2>
            <p>Full Stack Developer</p>
          </div>
          <div className="icons center">
            <a href="https://github.com/814942">
              <img className="icon-git" src={Git} alt="GitHub" />
            </a>

            <a href="https://www.linkedin.com/in/pablo-garay-dev/">
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
    width: 450px;
    height: 500px;
    position: relative;
    box-shadow: 2px 2px 10px rgb(216, 26, 26);
    overflow: hidden;
    border-radius: 9999px;
  }
  .content {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(#c6ffdd, #fbd786, #f7797d);
    color: aliceblue;
  }
  .content h2 {
    margin: 10px 0px;
  }
  .content p {
    margin: 10px 30px;
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
    transition: all 0.4s;
    cursor: pointer;
  }

  .icons i {
    margin: 10px 0px;
  }

  .card:hover > .icons {
    transform: translate(0);
  }

  .img img {
    width: 150px;
    border-radius: 9999px;
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
