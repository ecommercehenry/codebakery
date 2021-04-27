import { gql } from "@apollo/client";

const GET_ALL_USERS = gql`
  {
    getAllUsers {
        id
        name
        email
        role
        address
        dni
        phoneNumber
    }
  }
`;

export default GET_ALL_USERS;
