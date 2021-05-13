import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Route } from "react-router-dom";
import SearchBarUserAdmin from "./ordenes/SearchBarUserAdmin";
import $ from 'jquery'

//styles
import styled from "styled-components";
import FormCreateCategory from "../../FormCreateCategory/FormCreateCategory";
import CheckFilters from "./ordenes/CheckFilters";
import SortByPrice from "./ordenes/SortByPrice";
import { HiOutlineFilter } from "react-icons/hi";
import AddPromoButton from "./promos/AddPromoButton"

//components
import SearchBarAdmin from "./SearchBarAdmin";

const AdminNavBar = ({ promo, setPromo, displayFilter, setDisplayFilter  }) => {

  const [add, setAdd] = useState(false);
  let { status } = useSelector((state) => state.theme);

  useEffect(() => {
    if(displayFilter){
      $("#filter-btn").addClass('displayFilter')
    } else {
      $("#filter-btn").removeClass('displayFilter')
    }
  }, [displayFilter])

  return (
    <StyledNavBar light={status} displayFilter={displayFilter}>
      <div className="onLeft">
        <Route path="/admin/products">
          <div className="optionTab">PRODUCTS</div>
          {/* <SearchBar /> */}
        </Route>

        <Route path="/admin/orders">
          <div className="optionTab">ORDERS</div>
          <SearchBarAdmin />
        </Route>

        <Route path="/admin/users">
          <div className="optionTab">USERS</div>
          <SearchBarUserAdmin />
        </Route>
        
        <Route path="/admin/promos">
          <div className="optionTab">PROMOS</div>
          {/* <PromoNavBar/> */}
        </Route>

        <Route path="/admin/stores">
          <div className="optionTab">STORES</div>
        </Route>

        <Route path="/admin/slider">
          <div className="optionTab">SLIDER</div>
        </Route>

        <Route path="/admin/newsletter">
          <div className="optionTab">NEWSLETTERS</div>
        </Route>
        
        <Route path="/admin/slider">
          <div className="optionTab">SLIDER</div>
        </Route>

        <Route path="/admin/newsletter">
          <div className="optionTab">NEWSLETTER</div>
        </Route>
        
      </div>

      <Route path="/admin/orders">
        <div className="onRight">
          <SortByPrice />
          <button id="filter-btn" onClick={() => setDisplayFilter(!displayFilter)}>
            <HiOutlineFilter id="filter-logo"/>
            Filters
          </button>
          <CheckFilters id="check-filters" displayFilter={displayFilter} setDisplayFilter={setDisplayFilter}/>
        </div>
      </Route>

      <Route path="/admin/promos">
        <div className="onRight">
          <AddPromoButton setPromo={setPromo}/>
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
  background: ${({light})=>light 
    ? '#f1f1f1' 
    : '#222222'};
  .onLeft {
    .optionTab {
      color: #513066;
      height: 4.5vh;
      font-size: 2em;
      display: flex;
      align-items: center
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
    position: relative;

    #filter-btn{
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      margin-left: 1rem;
      padding: 0 1rem;
      border-radius: 10px;
      background: #D5D5D5;
      /* color:${({light})=>light 
        ? 'inherit' 
        : 'white'
      }; */
      border: none;
      height: 2rem;
      border: 1px solid transparent;
      z-index: 2;
      font-size: 1em;
      font-weight: 500;

      #filter-logo{
        margin-right: .5em;
      }

      &:hover{
      background: ${({light})=>light 
      ? 'white' 
      : '#222222'};
      border: 1px solid #D9D9D9;
      }
    }

    .displayFilter{
      background: ${({light})=>light 
      ? 'white !important' 
      : '#222222 !important'};
      border: 1px solid #D9D9D9 !important;
      }
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
    height: 2rem;
  }
  .add-category:hover {
    color: black;
    cursor: pointer;
  }
  .purple-btn {
    display: flex;
    height: 2rem;
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
