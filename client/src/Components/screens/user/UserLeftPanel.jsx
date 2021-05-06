import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi";
import { HiOutlineClipboardList } from "react-icons/hi";
import styled from "styled-components";

import {   HiOutlineExternalLink,
  HiOutlineLogout } from "react-icons/hi";


const UserLeftPanel = ({ click, setClick }) => {
  const path = window.location.pathname;
  const activeTab = {
    profile: path.includes("profile") ? "active" : "inactive",
    orders: path.includes("orders") ? "active" : "inactive",
    reviews: path.includes("reviews") ? "active" : "inactive",
  };

  let id = window.localStorage.getItem("id");
  let user = localStorage.name;
  let logout = () => {
    localStorage.clear();
  };
  return (
    <StyledUserLeftPanel>
      <div className="content">
        <div className="userInfo">
          <div className="userAvatar"></div>
          <div className="userName">{user}</div>
        </div>
        <div className="tabs">
          <Link
            className="text-decoration-none text-white"
            to={`/user/${id}/profile`}
          >
            <div className={`tab ${activeTab.profile}`}>
              <HiOutlineUser size="1.3rem" className="icon" />
              <button onClick={() => setClick(3)} className="tabName">
                Profile
              </button>
            </div>
          </Link>
          <div
            className="text-decoration-none text-white"
            to={`/user/orders/${id}`}
          >
            <div className={`tab ${activeTab.orders}`}>
              <HiOutlineShoppingBag size="1.3rem" className="icon" />
              <button className="tabName" onClick={() => setClick(1)}>
                Product
              </button>
            </div>
          </div>
          <div
            className="text-decoration-none text-white"
            to={`/user/review/${id}`}
          >
            <div className={`tab  ${activeTab.reviews}`}>
              <HiOutlineClipboardList size="1.3rem" className="icon" />
              <button className="tabName" onClick={() => setClick(2)}>
                Reviews
              </button>
            </div>
          </div>
          <div
            className="text-decoration-none text-white"
            to={`/user/review/${id}`}
          >
            <div className={`tab  ${activeTab.reviews}`}>
              <HiOutlineClipboardList size="1.3rem" className="icon" />
              <button className="tabName" onClick={() => setClick(4)}>
                Orders
              </button>
            </div>
          </div>
          <Link
            className="text-decoration-none text-white"
            to="/"
            onClick={logout}
          >
            <div className="bottom-tabs">
              <HiOutlineLogout size="1rem" className="icon" />
              <span>Logout</span>
            </div>
          </Link>
          <Link className="text-decoration-none text-white" to="/">
          <div className="bottom-tabs">
            <HiOutlineExternalLink size="1rem" className="icon" />
            <span>Home</span>
            </div>
          </Link>
        </div>
      </div>
    </StyledUserLeftPanel>
  );
};


const StyledUserLeftPanel = styled.div`
  background: #5e3f71;
  height: 100vh;
  width: 11rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  border-top-right-radius: 60px;
  border-bottom-right-radius: 60px;
  display: flex;
  justify-content: center;
  padding-top: 5vh;
  color: white;
  .content {
    width: 100%;
    height: 45vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    .userInfo {
      width: 100%;
      height: 19vh;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
      .userAvatar {
        display: inline-block;
        min-width: 15%;
        width: 60%;
        white-space: nowrap;
      }
      .userAvatar:before {
        border-radius: 50%;
        width: 100%;
        padding-bottom: 100%;
        background: transparent;
        content: "";
        display: inline-block;
      }
      .userName {
        font-size: 1.3rem;
      }
    }
    .tabs {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin-top: 4rem;
      .tab {
        margin-top: 0.5rem;
        font-size: 1.3rem;
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        align-items: center;
        padding: 0.7rem;
        padding-left: 1.5rem;
        border-left: solid 4px transparent;
        .tabName {
          margin-left: 0.5rem;
          font-size: inherit;
          background: transparent;
          border: none;
          color: white;
        }
      }
      .active {
        background: #00000040;
        border-left: solid 4px white;
      }
    }
  }

  @media (max-width: 1025px) {
    width: 10rem;
    .tabs {
      .tab {
        padding-left: 0.75rem !important;
      }
    }

    @media (max-width: 768px) {
      width: 5rem;
      .content {
        .userInfo {
          margin-top: 2rem;
          .userName {
            font-size: 1rem !important;
            text-align: center;
          }
        }
      }
      .tabs {
        .tab {
          padding-left: 1.5rem !important;
          .tabName {
            display: none;
          }
        }
      }
    }
  }
  .bottom-tabs{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 1.6em;
    margin-top: 0.5em;

    span {
      font-size: 1rem;
      margin-left: 0.5rem;
    }
  }
`;

export default UserLeftPanel;
