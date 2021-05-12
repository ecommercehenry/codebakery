import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineClipboardList } from "react-icons/hi";
import styled from "styled-components";

import { HiOutlineExternalLink, HiOutlineLogout } from "react-icons/hi";

const UserLeftPanel = () => {
  const path = window.location.pathname;
  const activeTab = {
    myData: path.includes("my-data") ? "active" : "inactive",
    forReview: path.includes("for-review") ? "active" : "inactive",
    reviews: path.includes("reviews") ? "active" : "inactive",
    orders: path.includes("orders") ? "active" : "inactive",
  };

  let id = window.localStorage.getItem("id");
  let user = localStorage.name;
  let logout = () => {
    localStorage.clear();
  };
  return (
    <StyledUserLeftPanel>
      <div className="menu">
        <div className="content">
          <div className="userInfo">
            <div className="userAvatar"></div>
            <div className="userName">{user}</div>
          </div>
          <div className="tabs">
            <Link
              className="text-decoration-none text-white"
              to={`/user/${id}/my-data`}
            >
              <div className={`tab ${activeTab.myData}`}>
                <HiOutlineUser size="1.3rem" className="icon" />
                <span className="tabName">My Data</span>
              </div>
            </Link>
              <Link
              className="text-decoration-none text-white"
              to={`/user/${id}/orders`}
            >
              <div className={`tab  ${activeTab.orders}`}>
                <HiOutlineClipboardList size="1.3rem" className="icon" />
                <span className="tabName">Orders</span>
              </div>
            </Link>
            <Link
              className="text-decoration-none text-white"
              to={`/user/${id}/for-review`}
            >
              <div className={`tab  ${activeTab.forReview}`}>
                <HiOutlineClipboardList size="1.3rem" className="icon" />
                <span className="tabName">For Review</span>
              </div>
            </Link>
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
      </div>
    </StyledUserLeftPanel>
  );
};

const StyledUserLeftPanel = styled.div`
  background: #00000040;
  width: fit-content;
  position: sticky;
  top: 0;
  z-index: 3;
  .menu {
    background: #f7f7f7;
    height: 100vh;
    width: 11rem;
    position: absolute;
    top: 0px;
    left: 0;
    z-index: 3;
    display: flex;
    justify-content: center;
    padding-top: 5vh;
    color: #333;
    border-right: 1px solid #ddd;
  }
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
      color: #333;

      .tab {
        margin-top: 0.5rem;
        font-size: 1.3rem;
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        align-items: center;
        padding: 0.7rem;
        padding-left: 1rem;
        border-left: solid 7px transparent;
        color: #333;
        .tabName {
          margin-left: 0.5rem;
          font-size: inherit;
          background: transparent;
          border: none;
          color: #333;
        }
      }
      .active {
        background: #f1f1f1;
        border-left: solid 7px #5f3f71;
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
  .bottom-tabs {
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
