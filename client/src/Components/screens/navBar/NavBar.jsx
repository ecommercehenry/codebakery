import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import APPLY_DISCOUNT from "../../../Apollo/mutations/applyDiscount";
import RESET_DISCOUNT from "../../../Apollo/mutations/resetDiscount";
import getPromos from "../../../Apollo/queries/getPromos";
import CountCart from "../cart/container/CountCart";
import styled from "styled-components";
import logo from './Logo.png';
import logoBlack from './LogoBlack.png';

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
    stores: "inactive",
  };

  if (actualPath.startsWith("/catalogue")) isActive["catalogue"] = "active";
  if (actualPath.startsWith("/cart")) isActive["cart"] = "active";
  if (actualPath.startsWith("/about-us")) isActive["about_us"] = "active";
  if (actualPath.startsWith("/stores")) isActive["stores"] = "active";

  const tagCat = `${navTag} ${isActive["catalogue"]}`;
  const tagCart = `${navTag} ${isActive["cart"]}`;
  const tagAbout = `${navTag} ${isActive["about_us"]}`;
  const tagStores = `${navTag} ${isActive["stores"]}`;

  let logged = localStorage.token ? true : false;

  let logout = () => {
    localStorage.clear();
    window.location.href = "/";
    /* window.location.replace("http://localhost:3000/") */
    // window.location.reload();
  };

  let storage = window.localStorage;
  let role = window.localStorage.getItem("role");
  let id = window.localStorage.getItem("id");
  let logeed = storage.token ? true : false;
  let date = new Date();

  let weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  let today = weekday[date.getDay()];

  const promos = useQuery(getPromos, {
    fetchPolicy: "no-cache",
  });

  const [applyDiscount] = useMutation(APPLY_DISCOUNT);
  const [resetDiscount] = useMutation(RESET_DISCOUNT);

  useEffect(() => {
    if (promos && promos["data"] && promos["data"]["getPromos"]) {
      if (promos["data"]["getPromos"].length === 0) {
      } else {
        promos["data"]["getPromos"].forEach((elem) => {
          if (elem.day === today) {
            applyDiscount({
              variables: {
                discount: elem.discount,
                category: elem.category,
              },
            });
          }
          // else{
          //   applyDiscount({variables:
          //     {
          //       discount:0,
          //       category:elem.category,
          //     }
          //   });
          // }
        });
      }
    }
  }, [promos, applyDiscount, resetDiscount, today]);

  const path = window.location.pathname;
  const landing = path === '/';

  return (
    <StyledNavBar white={ color } className="navbar d-flex align-items-center">
      <div className="left-tags me-auto">
        <div id="logo">
        <Link to="/" className={brandTag} style={{ fontWeight: "bold" }}>
          <img src={landing ? logoBlack : logo} style={{height:"2.3em", width: "auto"}} alt=""/>
        </Link>
        </div>
        {role === "admin" ? (
          <Link
            to="/admin/orders"
            className={`text-decoration-none ${textColor}`}
          >
            <div className="tab">Admin Panel</div>
          </Link>
        ) : (
          <div className="cart-logo">
          <Link id="Cart" to="/cart" className={tagCart}>
              <CountCart />
          </Link>
          </div>
        )}
        <div style={{ padding: "0.2rem 0" }} className={`tab ${isActive["catalogue"]}`}>
          <Link id="Catalogue" to="/catalogue" className={tagCat}>
            Catalogue
          </Link>
        </div>
        <div style={{ padding: "0.2rem 0" }} className={`tab ${isActive["stores"]}`}>
          <Link id="stores" to="/stores" className={tagStores}>
            Stores
          </Link>
        </div>
        <div style={{ padding: "0.2rem 0" }} className={`tab ${isActive["about-us"]}`}>
          <Link id="About us" to="/about-us" className={tagAbout}>
            About us
          </Link>
        </div>
        {/* <ThemeSwitch className="tab"/> */}
      </div>
      <div className="right-buttons d-flex align-items-center">
        {logged ? (
          <>
            <Link
              to={`/user/${id}/my-data`}
              className={`login-btn text-decoration-none ${textColor}`}
            >
              <div className={`usuario ${navTag}`}>
                <div> Hi! {logeed ? localStorage.name : ""}</div>
                {/* {localStorage.role === "admin" ? (
                  ""
                ) : (
                  <div> Hi! {logeed ? localStorage.name : ""}</div>
                )} */}
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
 @media(max-width: 850px){
    display: none!important;
  }

  background-color: ${({white}) => white === "white" ? "#5e3f71" : "transparent"};
  padding: 0 5rem;
  z-index: 2;
  font-weight: bold;
  height: 4.5rem;
  position: relative;

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

  .inactive {
    border-bottom: 2px solid transparent;
  }
  .active {
    color: white !important;
    font-weight: bold !important;
    border-bottom: 2px solid white;

    a {
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

  #Cart {
    border: none !important;
  }

  .left-tags {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 35rem;
    font-size: 0.9rem;

    @media (max-width: 1024px) {
      width: 30rem!important;
    }
  }

  .right-buttons {
    display: flex;
    width: 17vw;
    font-size: 0.9rem;
    justify-content: flex-end;
    
  }

  @media (max-width: 1024px) {
      padding: 0 2rem!important;
  }

  
`;

export default NavBar;
