import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Route } from "react-router-dom";

//styles
import styled from "styled-components";
import FormCreateCategory from "../../FormCreateCategory/FormCreateCategory";
import SortByPrice from "./ordenes/SortByPrice";

//components
import SearchBar from "./SearchBar";
import SearchBarAdmin from "./SearchBarAdmin";

const AdminNavBar = ({ setAddProduct }) => {
  const buttonHandler = () => {
    setAddProduct(true);
  };

  const [add, setAdd] = useState(false);
  let {status} = useSelector((state)=>state.theme);

  return (
    <StyledNavBar light={status}>
      <div className="onLeft">
        <Route path="/admin/products">
          <div className="optionTab">PRODUCTS</div>
          <SearchBar />
        </Route>

        <Route path="/admin/orders">
          <div className="optionTab">ORDERS</div>
          <SearchBarAdmin />
        </Route>

        <Route path="/admin/users">
          <div className="optionTab">USERS</div>
        </Route>
      </div>

      <Route path="/admin/orders">
        <div className="onRight">
          <SortByPrice />
        </div>
      </Route>


      
      <Route path="/admin/products">
        <>
          {add ? (
            <div className="add-category" onClick={() => setAdd(!add)}>
              "+ ADD CATEGORY"
            </div>
          ) : (
            <div className="add-category">
              <FormCreateCategory setAdd={setAdd} />
            </div>
          )}

          <Link
            to="/admin/add-product"
            className="addProduct purple-btn"
            onClick={buttonHandler}
          >
            + ADD PRODUCT
          </Link>
        </>
      </Route>
    </StyledNavBar>
  );
};

const StyledNavBar = styled.div`
  width: 100%;
  max-width: 100%;
  height: 6em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f1f1f1;

  background: ${({light})=>light 
    ? '#f1f1f1' 
    : '#222222'};
  .onLeft {
    .optionTab {
      color: #513066;
      height: 4.5vh;
      font-size: 2em;
      display: flex;
      align-items: center;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .onRight {
    display: flex;
    width: 100%;
    align-items: center;
    margin-left: 5vw;
    justify-content: flex-end;
  }
  .addProduct {
    background: #5e3f71;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .purple-btn:hover {
    background-color: #734191;
  }
  .add-category {
    background: #5e3f7100;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(0, 0, 0, 0.726);
  }
  .add-category:hover {
    color: black;
    cursor: pointer;
  }
  .purple-btn {
    display: flex;
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
`;

export default AdminNavBar;
