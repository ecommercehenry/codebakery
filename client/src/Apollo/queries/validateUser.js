import { gql } from "@apollo/client"

const VALID_USER = gql`
query validateUser($name: String!, $password: String!){
    validateUser(name: $name, password: $password)
}
`
export default VALID_USER;
