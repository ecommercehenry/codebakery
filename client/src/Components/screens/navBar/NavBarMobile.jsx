import React, { useEffect } from "react";
import { Link, Route} from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import APPLY_DISCOUNT from "../../../Apollo/mutations/applyDiscount";
import RESET_DISCOUNT from "../../../Apollo/mutations/resetDiscount";
import getPromos from "../../../Apollo/queries/getPromos";
import CountCart from "../cart/container/CountCart";
import styled from "styled-components";
/* import ThemeSwitch from "./ThemeSwitch"; */
import {
  HiOutlineHand,
  HiOutlineInformationCircle,
  HiOutlineLogin,
  HiOutlineLogout,
  HiOutlineMap,
  HiOutlineMenu,
  HiOutlineShoppingBag,
  HiOutlineUserCircle,
  HiOutlineX,
} from "react-icons/hi";
import { useState } from "react";
import logo from "./Logo.png";
import logoBlack from "./LogoBlack.png";
import $ from "jquery";
import UserNavBar from "./UserNavBar";

const NavBarMobile = ({ color }) => {
  const [showMenu, setShowMenu] = useState(false);

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

  let logged = localStorage.token ? true : false;

  let logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  let storage = window.localStorage;
  let role = window.localStorage.getItem("role");/* 
  let id = window.localStorage.getItem("id"); */
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

  const handleShowMenu = (show) => {
    show
      ? $(".menu-drop-container").toggle() && setShowMenu(true)
      : $(".menu-drop-container").toggle() && setShowMenu(false);
  };

  useEffect(() => {
    $(".menu-drop-container").hide();
  }, []);

  const path = window.location.pathname;
  const landing = path === "/";

  return (
    <StyledMobileNav white={color} showMenu={showMenu} landing={landing}>
      <div className="top-bar">
        <Route path="/user/:id/">
              <UserNavBar />
        </Route>
        <div id="left-icon">
          {showMenu ? (
            <button className="icon-btn" onClick={() => handleShowMenu(false)}>
              <HiOutlineX size="2em" color={landing ? "black" : "white"} />
            </button>
          ) : (
            <button className="icon-btn" onClick={() => handleShowMenu(true)}>
              <HiOutlineMenu size="2em" color={landing ? "black" : "white"} />
            </button>
          )}
        </div>
        <div id="logo">
          <Link to="/" className={""} style={{ fontWeight: "bold" }}>
            <img
              src={landing ? logoBlack : logo}
              style={{ height: "2em", width: "auto" }}
              alt=""
            />
          </Link>
        </div>
        {role === "admin" ? (
          <Link to="/admin/orders" className={``}>
            <div className="tab">Admin Panel</div>
          </Link>
        ) : (
          <div className="cart-logo">
            <Link id="Cart" to="/cart" className={""}>
              <CountCart color={landing ? "black" : "white"} />
            </Link>
          </div>
        )}
      </div>

      <div className="menu-drop-container">
        <div className="menu-drop">
          <div className="top-tabs">

            {logged ? (
              <>
                <Link to={`/user-menu`}>
                  {localStorage.role === "admin" ? (
                    ""
                  ) : (
                    <>
                      <div className="tab">
                        <HiOutlineHand size="1.7em" className="tab-icon" />
                        <span>Hi! {logeed ? localStorage.name : ""}</span>
                      </div>
                      <div className="tab">
                        <HiOutlineUserCircle size="1.7em" className="tab-icon" />
                        <span>Profile</span>
                      </div>
                    </>
                  )}
                </Link>
              </>
            ) : (
              <>
                <Link to="/log-in">
                  <div className="tab">
                    <HiOutlineLogin size="1.7em" className="tab-icon" />
                    Login
                  </div>
                </Link>
              </>
            )}
          </div>

          <Link id="Catalogue" to="/catalogue" className={""}>
            <div
              style={{ marginTop: "0.7em" }}
              className={`tab ${isActive["catalogue"]}`}
            >
              <HiOutlineShoppingBag size="1.7em" className="tab-icon" />
              <span>Catalogue</span>
            </div>
          </Link>

          <Link id="stores" to="/stores" className={""}>
            <div className={`tab ${isActive["stores"]}`}>
              <HiOutlineMap size="1.7em" className="tab-icon" />
              <span>Stores</span>
            </div>
          </Link>

          <div
            className="tab-separation"
            style={{
              borderTop: "1px solid #ddd",
              borderBottom: "1px solid #ddd",
            }}
          >
            <Link id="About us" to="/about-us" className={""}>
              <div className={`tab ${isActive["about-us"]}`}>
                <HiOutlineInformationCircle size="1.7em" className="tab-icon" />
                <span>About us</span>
              </div>
            </Link>
          </div>

          {logged ? (
            <Link to="/" onClick={logout}>
              <div className="tab">
                <HiOutlineLogout
                  size="1.7em"
                  className="tab-icon"
                  id="logout-icon"
                />
                <span>Logout</span>
              </div>
            </Link>
          ) : (
            <></>
          )}

          {/* <ThemeSwitch className="tab" /> */}
        </div>
      </div>
    </StyledMobileNav>
  );
};

const StyledMobileNav = styled.div`
  @media (min-width: 851px) {
    display: none;
  }

  z-index: 4;
  position: ${({ landing }) => (landing ? "absolute" : "static")};

  .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1em;
    height: 3.5rem;
    width: 100vw;
    background: ${({ landing }) => (landing ? "transparent" : "#5e3f71")};

    .icon-btn {
      background: none;
      border: none;
    }
  }

  .menu-drop-container {
    position: absolute;
    background: white !important;
    display: block;
    border-bottom: 1px solid #ddd;
    padding-bottom: 2em;
    z-index: 99;
    transform-style: preserve-3d;

    ::before {
      position: absolute;
      content: "";
      width: 20px;
      height: 20px;
      z-index: 90;
      top: -5px;
      margin-left: 1.35em;
      background-color: white;
      transform: rotate(45deg) translateZ(-1px);
    }

    .menu-drop {
      display: flex;
      flex-direction: column;
      height: 100%;
      z-index: -1;

      .tab {
        color: #333;
        display: flex;
        width: 100vw;
        padding-left: 1em;
        margin: 0.2em 0;
        justify-content: flex-start;
        align-items: center;
        height: 3em;
        font-weight: bold;

        .tab-icon {
          margin-right: 0.8em;
        }

        #logout-icon {
          margin-left: 0.2em;
          margin-right: 0.65em;
        }

        span {
          margin-bottom: -0.2em;
        }
      }

      .top-tabs {
        border-bottom: 1px solid #ddd;
        padding: 0.5em 0;
      }

      .tab-separation {
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        margin: 0.5em 0;
      }

      .active {
        background: #f1f1f1;
        color: #6a83fa;
        font-weight: bold;
      }
    }
  }

  @media (max-width: 480px) {
    .menu-drop-container {
      z-index: 3;
      height: 100vh;

      .menu {
        height: 100%;
      }
    }
  }
`;

export default NavBarMobile;
