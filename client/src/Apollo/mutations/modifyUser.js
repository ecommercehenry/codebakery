import { gql } from "@apollo/client"

const MODIFY_USER = gql`
mutation modifyUser ($name: String!, $password: String!, $email: String!, $role: String!){
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
export default MODIFY_USER
// modifyUser(id: Int!, name:String, password: String, email: String, role: String, address: String, dni: String, phoneNumber: String): resultUsers