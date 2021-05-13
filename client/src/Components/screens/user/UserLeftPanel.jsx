import React from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineBadgeCheck,
  HiOutlineChevronRight,
  HiOutlineStar,
  HiOutlineUser,
} from "react-icons/hi";
import { HiOutlineClipboardList } from "react-icons/hi";
import styled from "styled-components";

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
                <HiOutlineChevronRight
                  size="1.3rem"
                  className="icon responsive"
                />
              </div>
            </Link>
            <Link
              className="text-decoration-none text-white"
              to={`/user/${id}/orders`}
            >
              <div className={`tab  ${activeTab.orders}`}>
                <HiOutlineClipboardList size="1.3rem" className="icon" />
                <span className="tabName">Orders</span>
                <HiOutlineChevronRight
                  size="1.3rem"
                  className="icon responsive"
                />
              </div>
            </Link>
            <Link
              className="text-decoration-none text-white"
              to={`/user/${id}/reviews`}
            >
              <div className={`tab  ${activeTab.reviews}`}>
                <HiOutlineBadgeCheck size="1.3rem" className="icon" />
                <span className="tabName">Reviews</span>
                <HiOutlineChevronRight
                  size="1.3rem"
                  className="icon responsive"
                />
              </div>
            </Link>
            <Link
              className="text-decoration-none text-white"
              to={`/user/${id}/for-review`}
            >
              <div className={`tab  ${activeTab.forReview}`}>
                <HiOutlineStar size="1.3rem" className="icon" />
                <span className="tabName">For Review</span>
                <HiOutlineChevronRight
                  size="1.3rem"
                  className="icon responsive"
                />
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
    min-height: calc(100vh - 4.5rem);
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

        .responsive {
          display: none;
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
  }

  @media (max-width: 850px) {
    .menu {
      width: 100vw;
      padding-top: 0;
    }

    .userInfo {
      display: none !important;
    }

    .tabs {
      margin-top: 0 !important;

      .tab {
        position: relative;
        border-bottom: 1px solid #ddd;

        .responsive {
          display: block !important;
          position: absolute;
          right: .5em;
          margin-bottom: .3em;
        }
      }
    }
  }
`;

export default UserLeftPanel;
