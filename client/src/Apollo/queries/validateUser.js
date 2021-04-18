import { gql } from "@apollo/client"

const VALID_USER = gql`
query validateUser($name: String!, $password: String!){
    validateUser(name:$name,password:$password){
        __typename
         ... on user{
           name
           email
           role
           token
           id
         }
         ... on error{
           detail
         }
       }
}
`
export default VALID_USER;
