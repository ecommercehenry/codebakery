import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GET_ALL_USERS from "../../../../Apollo/queries/getAllUsers";
import styled from "styled-components";
import { useLazyQuery } from "@apollo/client";
import UserInfo from "./UserInfo";
import {
  getAllUsersWithDetails,
} from "../../../../actions/index";

const UserAdmin = ({setPromo}) => {
  let {status} = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let dataToRender = state.userAdmin.dataToRender;


  let [getAllUsers, { data, loading }] = useLazyQuery(GET_ALL_USERS);

  useEffect(() => {
    //setPromo(false)
    if (!data) {
      getAllUsers();
    } else if (data && data.getAllUsers) {
      dispatch(getAllUsersWithDetails(data?.getAllUsers));
    }
  }, [data, loading, dispatch, getAllUsers, setPromo]);

  if (!dataToRender) {
    return <div>Loading...</div>;
  } else {
    return (
      <StyledUserAdmin light={status}>
        <table border="0" cellPadding="0" cellSpacing="0" className="flexy">
          <thead>
            <tr>
              <th width="10%" id="img-column">
                Id
              </th>
              <th width="30%" id="name-column">
                Name
              </th>
              <th width="30%">Email</th>
              <th width="10%">Address</th>
              <th width="10%" id="price-column">
                DNI
              </th>
              <th width="10%">Phone Number</th>
              <th width="10%">Role</th>
              <th width="10%">Promote</th>
              <th width="10%">Delete</th>
            </tr>
          </thead>
          <tbody>
            {dataToRender?.map((element) => (
              <UserInfo
                id={element.id}
                name={element.name}
                email={element.email}
                address={element.address}
                dni={element.dni}
                phoneNumber={element.phoneNumber}
                role={element.role}
              ></UserInfo>
            ))}
          </tbody>
        </table>
      </StyledUserAdmin>
    );
  }
};

export default UserAdmin;

const StyledUserAdmin = styled.div`
  padding: 2rem;
  padding-top: 0;
  background: ${({ light }) => 
    (light ? 
    "white" : 
    "#292929")
  };
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 83vh;
  margin-bottom: 2rem;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.07);
  clear: both;
  overflow: hidden;

  table {
    padding: 1rem 0;
    position: relative;
    width: 100%;
    overflow-y: auto;
    float: left;

    thead {
      display: table;
      overflow: auto;
      width: 100%;

      th {
        position: sticky;
        top: 0;
        padding: 1rem 1em;
        background: ${({ light }) => 
          (light ? 
          "white" : 
          "#292929")
        };
        border-bottom: 1px solid #ddd;
      }
    }

    tbody {
      display: block;
      overflow-y: scroll;
      width: 100%;
      height: 66vh;

      td {
        height: 5rem;
        border-bottom: 1px solid #ddd;
        padding: 0 1em;
      }

    
    }

    .info-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .deletePromote {
      padding: 0;
    }
  }
`;
