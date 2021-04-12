import { gql } from "@apollo/client";

const CREATE_USER = gql`
  mutation createUser(
    $name: String!
    $password: String!
    $email: String!
    $role: String!
  ) {
    createUser(name: $name, password: $password, email: $email, role: $role) {
      name
    }
  }
`;

export default CREATE_USER;
