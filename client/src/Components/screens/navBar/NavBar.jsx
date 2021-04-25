import React from "react";
import { Link} from "react-router-dom";
import {useDispatch} from 'react-redux';
import { RoundButton } from "../../GlobalStyle";
import CountCart from "../cart/container/CountCart";
import styled from "styled-components";
import ThemeSwitch from './ThemeSwitch'
const NavBar = ({ color }) => {
  const textColor = color === "white" ? "text-inactive" : "text-dark";
  const navTag = `text-decoration-none ${textColor}`;
  const btnColor = color === "white" ? "white" : "purple";
  const brand = color === "white" ? "text-white" : "text-dark";
  const brandTag = `text-decoration-none ${brand}`;
  const actualPath = window.location.pathname;

  let isActive = {
    catalogue: "inactive",
    cart: "inactive",
    about_us: "inactive",
  };

  if (actualPath.startsWith("/catalogue")) isActive["catalogue"] = "active";
  if (actualPath.startsWith("/cart")) isActive["cart"] = "active";
  if (actualPath.startsWith("/about-us")) isActive["about_us"] = "active";

  const tag1 = `${navTag} ${isActive["catalogue"]}`;
  const tag2 = `${navTag} ${isActive["cart"]}`;
  const tag3 = `${navTag} ${isActive["about-us"]}`;
  let logged = localStorage.token ? true : false;

  let logout = () => {
    localStorage.clear();
  };

  let storage = window.localStorage;
  let role = window.localStorage.getItem("role");
  let id = window.localStorage.getItem("id");
  let logeed = storage.token ? true : false;

  const isCart = (window.location.pathname).includes('cart');

  return (
    <StyledNavBar className="navbar d-flex align-items-center mx-5">
      <div className="left-tags d-flex justify-content-between align-items-center me-auto">
        <Link to="/" className={brandTag} style={{fontWeight: "bold"}}>
          <h5 className="mb-0 text-center display-linebreak">
            Code {"\n"} Bakery
          </h5>
        </Link>
        {role === "admin" ? (
          <Link to="/admin/orders" className={tag2}>
            <div>Admin Panel</div>
          </Link>
        ) : (
          <Link id="Cart" to="/cart" className={tag2}>
            <div>
              <CountCart />
            </div>
          </Link>
        )}
        <div style={{padding: "0.2rem 0"}} className={isActive["catalogue"]}>
        <Link id="Catalogue" to="/catalogue" className={tag1}>
          Catalogue
        </Link>
        </div>
        <div style={{padding: "0.2rem 0"}} className={isActive["about-us"]}>
        <Link id="About us" to="/about-us" className={tag3}>
          About us
        </Link>
        </div>
        <ThemeSwitch/>
      </div>
      <div className="right-buttons d-flex align-items-center">
        {logged ? (
          <>
            <Link
            to={`/user/${id}/profile`}
            className={`login-btn text-decoration-none ${textColor}`}
            >
              <div className={`usuario ${navTag}`}>
                Hi! {logeed ? localStorage.name : ""}
              </div>
            </Link>
            <Link
              to="/"
              className={`login-btn text-decoration-none ${textColor}`}
              onClick={logout}
            >
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/log-in"
              className={`login-btn text-decoration-none ${textColor}`}
            >
              Login
            </Link>
            <Link
              to="/sign-up"
              id="sign-up-link"
              className="text-decoration-none"
            >
              <div
                className={`${btnColor}-btn d-flex justify-content-center align-items-center`}
              >
                <span>Sign Up</span>
              </div>
            </Link>{" "}
          </>
        )}
      </div>
    </StyledNavBar>
  );
};

const StyledNavBar = styled.nav`
  height: 5rem;
  background-color: #ffffff00;
  padding-right: 1%;
  z-index: 2;
  font-weight: bold;

  .left-tags {
    width: 26rem;
    font-size: 0.9rem;
  }

  .right-buttons {
    display: flex;
    width: 17vw;
    font-size: 0.9rem;
    justify-content: flex-end;
  }

  .log-in-btn {
    margin-right: 14px;
  }

  .white-btn {
    display: block;
    height: 4.5vh;
    width: fit-content !important;
    border-radius: 40px;
    border: none;
    background-color: white;
    text-decoration: none !important;
    color: black;
    font-weight: bold;
    font-size: 1em;
    padding: 0 1.5vw 0 1.5vw;
  }

  .purple-btn {
    display: block;
    height: 4.5vh;
    width: fit-content !important;
    border-radius: 40px;
    border: none;
    background-color: #5e3f71;
    text-decoration: none !important;
    color: white;
    font-weight: bold;
    font-size: 1em;
    padding-bottom: 0.5%;
    padding: 0 1.5vw 0 1.5vw;
    transition: background-color 0.2s ease;
  }

  .purple-btn:hover {
    background-color: #532c6b;
  }

  .display-linebreak {
    white-space: pre-line;
  }

  .text-inactive {
    color: #cecece;
  }

  .text-inactive:hover {
    color: white;
  }

  .inactive{
    border-bottom: 2px solid transparent;
  }
  .active {
    color: white;
    font-weight: bold;
    border-bottom: 2px solid white;

    a{
      border: none;
    }
  }

  .active:hover {
    cursor: default;
  }

  #sign-up-link {
    width: 100%;
    margin-left: 3vw;
    display: flex;
    width: fit-content;
  }
  .usuario {
    padding: 11px;
  }

  #Cart{
    border: none!important;
  }
`;

export default NavBar;
