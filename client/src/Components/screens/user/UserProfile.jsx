import React from "react";
import { useQuery } from "@apollo/client";
import getUserById from "../../../Apollo/queries/getUserById";
import styled from "styled-components";
import { useParams } from "react-router";
import SettingsIcon from "@material-ui/icons/Settings";

const UserProfile = () => {
  let { id } = useParams();

  const { data: $USER } = useQuery(getUserById, {
    variables: { id: parseInt(id) },
  });

  let result = [];
  if ($USER) {
    if ($USER.getUserById) {
      for (let clave in $USER.getUserById) result.push($USER.getUserById);
    }
  }

  return (
    <StyledUseer>
      {
   
        <div key={id} className="container">
               <h1>Profile</h1>
          <div className="element-naame">
            <div className="text-container">
              <span>Name</span>
              <p>{$USER?.getUserById.name}</p>
            </div>
          </div>
          <div className="element-naame">
            <div className="text-container">
              <span>Document</span>
              <p>{$USER?.getUserById.dni}</p>
            </div>
          </div>
          <div className="element-naame">
            <div className="text-container">
              <span>Email</span>
              <p>{$USER?.getUserById.email}</p>
            </div>
          </div>
          <div className="element-naame">
            <div className="text-container">
              <span>PhoneNumber</span>
              <p>{$USER?.getUserById.phoneNumber}</p>
            </div>
          </div>
          <div className="element-naame">
            <div className="text-container">
              <span>Address</span>
              <p>{$USER?.getUserById.address}</p>
            </div>
          </div>
        </div>
      }
    </StyledUseer>
  );
};

export default UserProfile;

const StyledUseer = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .element-naame {
    background-color: rgb(236, 227, 250);
    border-radius: 40px;
    width: 650px;
    height: 70px;
    margin: 10px;
  }
  .text-container {
    width: 350px;
    height: 80px;
    padding: 0.5rem;
    overflow: hidden;

  }

  .text-container p {
    margin: 0;
    color: grey;
    font-weight: 700;
  }
`;

// <div className="info-container"></div>
// <div className="text-container">
//   <span>Adreess</span>
//   <p>{$USER?.getUserById.address}</p>
// </div>
// <div className="text-container">
//   <span>Email</span>
//   <p>{$USER?.getUserById.email}</p>
// </div>
// <div className="text-container">
//   <span>Document</span>
//   <p>{$USER?.getUserById.dni}</p>
// </div>
// <div className="text-container">
//   <span>PhoneNumber</span>
//   <p>{$USER?.getUserById.phoneNumber}</p>
// </div>
// <div className="text-container">
//   <span>Address</span>
//   <p>{$USER?.getUserById.address}</p>
// </div>

// background:red;
// .status-container {

//   background:green;
// }
//   }
//   .element-container {
//     width: 130%;
//     height: 14vh;
//     margin: 2 rem;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background-color: rgb(236, 227, 250);
//     border-radius: 40px;
//   }
//   .element-container span {
//     background-color: red;
//     font-weight: 700;
//   }
//   .text-container {
//     width: 350px;
//     height: 80px;
//     padding: 0.5rem;
//     overflow: hidden;
//   }
//   .text-container p {
//     margin: 0;
//     color: grey;
//     font-weight: 700;
//   }
//   .edit-button {
//     padding: 0.5rem;
//     height: 100%;
//     justify-self: center;
//     align-self: center;
//     justify-content: flex-start;
//     align-items: center;
//     display: flex;
//     flex-direction: column;
//   }
//   .edit-button button {
//     margin-top: 0.5rem;
//     border: none;
//     background: transparent;
//   }
