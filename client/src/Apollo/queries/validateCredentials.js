import { gql } from "@apollo/client"

const VALIDATE_CREDENTIALS = gql`
query validateCredentials($token: String!, $role: String!){
    validateCredentials(token: $token, role: $role)
}
`

export default VALIDATE_CREDENTIALS; 