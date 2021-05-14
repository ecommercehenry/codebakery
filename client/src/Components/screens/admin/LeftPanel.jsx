import React from "react";

//icons
import {
  HiOutlineDesktopComputer,
  HiOutlineExternalLink,
  HiOutlineLogout,
  HiOutlineMailOpen,
  HiOutlineShoppingBag,
  HiOutlineTag,
  HiOutlineTruck,
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
    stores: path.includes("stores") ? "active" : "inactive",
    promos: path.includes("promos") ? "active" : "inactive",
    sliders: path.includes("slider") ? "active" : "inactive",
    newsletters: path.includes("newsletter") ? "active" : "inactive",
  };

  let logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <StyledPanel>
      <div className="content">
        <section style={{ width: "100%" }}>
          <div className="userInfo">
            <div className="userName">Admin</div>
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
            {/*Reemplazar la linea de abajo */}
            <Link
              className="text-decoration-none text-white"
              to="/admin/slider"
            >
              <div className={`tab ${activeTab.sliders}`}>
                <HiOutlineDesktopComputer size="1.3rem" className="icon" />
                <span className="tabName">Slider</span>
              </div>
            </Link>
            <Link
              className="text-decoration-none text-white"
              to="/admin/newsletter"
            >
              <div className={`tab ${activeTab.newsletters}`}>
                <HiOutlineMailOpen size="1.3rem" className="icon" />
                <span className="tabName">Newsletter</span>
              </div>
            </Link>
            <Link
              className="text-decoration-none text-white"
              to="/admin/promos"
            >
              <div className={`tab ${activeTab.promos}`}>
                <HiOutlineTag size="1.3rem" className="icon" />
                <span className="tabName">Promos</span>
              </div>
            </Link>
            <Link
              className="text-decoration-none text-white"
              to="/admin/stores"
            >
              <div className={`tab ${activeTab.stores}`}>
                <HiOutlineTruck size="1.3rem" className="icon" />
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
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.15);

  .tabName{
    padding-left: 1em;
  }

  li {
    transition: 1s all;
    padding: 15px;
    margin-left: -40px;
    margin-top: 0px;
    color: #fff;
    list-style: none;
    display: block;
    border-top-right-radius: 10px 10px;
    border-bottom-right-radius: 10px 10px;
  }

  li:hover {
    transition: 1s all;
    background-color: #00000040;
    color: #fff;
    border-top-right-radius: 10px 10px;
    border-bottom-right-radius: 10px 10px;
    cursor: pointer;
  }

  li ul {
    background: #5e3f71;
    margin-left: 140px;
    margin-top: -38px;
    display: none;
    position: absolute;
    border-top-right-radius: 15px 15px;
    border-bottom-right-radius: 15px 15px;
  }

  li:hover > ul {
    display: block;
    cursor: pointer;
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

  .content {
    width: 100%;
    height: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    font-size: 1.2rem;
    .userInfo {
      width: 100%;
      height: 10vh;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
      
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
      margin-top: 1em;
      font-weight: bold;
      .tab {
        margin-top: 0.1em;
        font-size: 1.1rem;
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        align-items: center;
        padding: 0.7rem;
        padding-left: 1.5rem;
        border-left: solid 4px transparent;

        &:hover{
          border-left: solid 4px white;
        }

        .º {
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
