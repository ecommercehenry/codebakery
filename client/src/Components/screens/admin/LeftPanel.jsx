import React from "react";

//icons
import {
  HiOutlineExternalLink,
  HiOutlineLogout,
  HiOutlineShoppingBag,
  HiOutlineUser,
} from "react-icons/hi";
import { HiOutlineClipboardList } from "react-icons/hi";

//styles
import styled from "styled-components";
import { Link } from "react-router-dom";

const LeftPanel = () => {
  const path = window.location.pathname;
  const activeTab = {
    products: path.includes("products") ? "active" : "inactive",
    orders: path.includes("orders") ? "active" : "inactive",
    users: path.includes("users") ? "active" : "inactive",
  };

  let logout = () => {
    localStorage.clear();
  };

  return (
    <StyledPanel>
      <div className="content">
        <section style={{ width: "100%" }}>
          <div className="userInfo">
            <div className="userAvatar"></div>
            <div className="userName">User Name</div>
          </div>
          <div className="tabs">
            <Link
              className="text-decoration-none text-white"
              to="/admin/products"
            >
              <div className={`tab ${activeTab.products}`}>
                <HiOutlineShoppingBag size="1.3rem" className="icon" />
                <span className="tabName">Products</span>
              </div>
            </Link>
            <Link
              className="text-decoration-none text-white"
              to="/admin/orders"
            >
              <div className={`tab ${activeTab.orders}`}>
                <HiOutlineClipboardList size="1.3rem" className="icon" />
                <span className="tabName">Orders</span>
              </div>
            </Link>
            <Link className="text-decoration-none text-white" to="/admin/users">
              <div className={`tab ${activeTab.users}`}>
                <HiOutlineUser size="1.3rem" className="icon" />
                <span className="tabName">Users</span>
              </div>
            </Link>
            <Link
              className="text-decoration-none text-white"
              to="/admin/stores"
            >
              <div className={`tab ${activeTab.users}`}>
                <HiOutlineUser size="1.3rem" className="icon" />
                <span className="tabName">Stores</span>
              </div>
            </Link>
          </div>
        </section>

        <section
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          {/* <ThemeSwitch /> */}

          <Link className="text-decoration-none text-white" to="/">
            <div className="bottom-tabs">
              <HiOutlineExternalLink size="1rem" className="icon" />
              <span>Home</span>
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
        </section>
      </div>
    </StyledPanel>
  );
};

const StyledPanel = styled.div`
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

  .content {
    width: 100%;
    height: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    font-size: 1.3rem;
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
        background: white;
        content: "";
        display: inline-block;
      }
      .userName {
        font-size: 1.3rem;
        //font-weight: bold;
      }
    }
    .tabs {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin-top: 4rem;
      font-weight: bold;
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
`;

export default LeftPanel;
