import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";

//styles
import styled from "styled-components";

//components
import LeftPanel from "../LeftPanel";
import AdminNavBar from "../AdminNavBar";
import ListCRUD from "../ListCRUD";
import AddProductForm from "../../../AddProductForm";
import TablaOrdenes from "../../admin/ordenes/TablaOrdenes";
import UserAdmin from "../ordenes/UserAdmin";
import ManageStores from "../stores/ManageStores";
import StorePanel from "../stores/StoresPanel";
import ModifyStore from "../stores/ModifyStore";
import Promos from "../promos/Promos";
import StoreOptions from "../stores/StoreOptions";


import NewsletterAdmin from "../newsletter/NewsletterAdmin";

import SliderCard from "../slider/SliderCard";

const AdminPanel = () => {
  const [displayFilter, setDisplayFilter] = useState(false);

  let { status } = useSelector((state) => state.theme);
  const [stores, setStores] = useState("seeStores");
  const [promo, setPromo] = useState(false);

  return (
    <StyledAdminPanel light={status}>
      <div className="left">
        <LeftPanel />
      </div>
      <div className="right">
        {!promo ? (
          <div className="top">
             <Route
              path="/admin/stores"
              component={() => StoreOptions({ setStores })}
            />

            <AdminNavBar
              promo={promo}
              setPromo={setPromo}
              displayFilter={displayFilter}
              setDisplayFilter={setDisplayFilter}
            />
            <Route path="/admin/orders" />
          </div>
        ) : (
          ""
        )}

        <div className="bottom">
          <Switch>
            <Route path="/admin/products">
              <ListCRUD setPromo={setPromo} />
            </Route>
            <Route path="/admin/orders">
              <TablaOrdenes setPromo={setPromo} />
            </Route>
            <Route path="/admin/users">
              <UserAdmin setPromo={setPromo} />
            </Route>
            <Route path="/admin/promos">
              <Promos promo={promo} setPromo={setPromo} />
            </Route>
            <Route path="/admin/newsletter" component={NewsletterAdmin} />
            <Route path="/admin/slider" component={SliderCard} />
          </Switch>
          {stores === "seeStores" ? (
            <Route path="/admin/stores">
              <StorePanel
                promo={promo}
                setPromo={setPromo}
                setStores={setStores}
              />
            </Route>
          ) : stores === "modifyStore" ? (
            <Route path="/admin/stores">
              <ModifyStore />
            </Route>
          ) : stores === "addStore" ? (
            <Route path="/admin/stores">
              <ManageStores />
            </Route>
          ) : (
            <p></p>
          )}
        </div>
        <Route path="/admin/add-product">
          <AddProductForm />
        </Route>
      </div>
    </StyledAdminPanel>
  );
};

const StyledAdminPanel = styled.div`
  min-height: 100vh;
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: ${({ light }) => (light ? "#F1F1F1" : "#222222")};
  color: ${({ light }) => (light ? "inherit" : "white")};
  .left {
    width: 13%;
    z-index: 10;
  }
  .right {
    width: 87%;
    margin-bottom: 1.4em;
    display: flex;
    flex-direction: column;
    height: fit-content;
    justify-content:space-between;
    background:${({ light }) => (light ? "#F1F1F1" : "#222222")};
    color:${({ light }) => (light ? "inherit" : "white")};
  }
        .top{
            position: sticky;
            z-index: 2;
            width: 100%;
            top: 0;
            padding-left: 4rem;
            padding-right: 4rem;
            background:${({ light }) => (light ? "#F1F1F1" : "#222222")};
        }
        .bottom{
            position: relative;
            //background: black;
            height:fit-content;
            width: 100%;
            display:flex;
            flex-direction: column;
            justify-content:center;
            align-items:center;
            z-index: 1;
            padding: 0 4rem;
        }
        .edit-grid{
            position: absolute;
            z-index: 3;
            background: #eeeeee00;
            top: 12vh;
            width: 85vw;
        }`;

export default AdminPanel;
