import { gql } from "@apollo/client"

const VALID_USER = gql`
query validateUser($email: String!, $password: String!){
    validateUser(email:$email,password:$password){
        __typename
         ... on user{
           name
           email
           role
           token
           id
           twoFA
         }
         __typename
         ... on error{
           detail
         }
       }
}
`
export default VALID_USER;
