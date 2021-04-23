import { gql } from "@apollo/client";

const MODIFY_USER = gql`
  mutation modifyUser(
    $id: Int
    $name: String
    $password: String
    $newPassword: String
    $email: String
    $role: String
    $address: String
    $dni: String
    $phoneNumber: String
  ) {
    modifyUser(
      id: $id
      name: $name
      password: $password
      newPassword: $newPassword
      email: $email
      role: $role
      address: $address
      dni: $dni
      phoneNumber: $phoneNumber
    ) {
      __typename
      ... on user {
        id
        name
        email
        role
        address
        dni
        phoneNumber
      }
      __typename
      ... on error {
        name
        detail
      }
    }
  }
`;
export default MODIFY_USER;
