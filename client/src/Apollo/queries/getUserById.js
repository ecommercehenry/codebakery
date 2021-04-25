import { gql } from "@apollo/client";

const getUserById = gql`
  query getUserById($id: Int!) {
    getUserById(id: $id) {
      name
      email
      role
      address
      dni
      phoneNumber
    }
  }
`;

export default getUserById;
