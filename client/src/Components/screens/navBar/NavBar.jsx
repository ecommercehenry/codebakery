import React from "react";
import { Link } from "react-router-dom";
import { RoundButton } from "../../GlobalStyle";
import "./NavBarStyle.css";

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
  let logout = () =>{
    localStorage.clear();
  }

  return (
    <nav className="navbar d-flex align-items-center mx-5">
      <div className="left-tags d-flex justify-content-between align-items-center me-auto">
        <Link to="/" className={brandTag}>
          <h5 className="mb-0 text-center display-linebreak">
            Code {"\n"} Bakery
          </h5>
        </Link>
        <Link id="Catalogue" to="/catalogue" className={tag1}>
          Catalogue
        </Link>
        <Link id="Cart" to="/cart" className={tag2}>
          Cart
        </Link>
        <Link id="About us" to="/about-us" className={tag3}>
          About us
        </Link>
      </div>
      <div className="right-buttons d-flex align-items-center">
        { logged? <Link
          to="/"
          className={`login-btn text-decoration-none ${textColor}`} onClick={logout}
        >
          Logout
        </Link> : <><Link
          to="/log-in"
          className={`login-btn text-decoration-none ${textColor}`}
        >
          Login
        </Link>
        <Link to="/sign-up" id="sign-up-link" className="text-decoration-none">
          <div
            className={`${btnColor}-btn d-flex justify-content-center align-items-center`}
          >
            <span>Sign Up</span>
          </div>
        </Link>
        </>
        }
      </div>
    </nav>
  );
};

export default NavBar;
