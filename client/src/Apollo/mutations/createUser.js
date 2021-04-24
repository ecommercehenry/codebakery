import { gql } from "@apollo/client";

const CREATE_USER = gql`
  mutation createUser($name: String!, $password: String!, $email: String!, $role: String!){
    createUser(name: $name, password: $password, email: $email, role:$role){
      __typename
      ... on user{
        name
        id
        email
        role
      }
      __typename
      ... on error {
        name
        detail
      }
    }
  }
`;

export default CREATE_USER;
