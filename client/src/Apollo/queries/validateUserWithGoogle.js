import { gql } from "@apollo/client"

const VALIDATE_USER_WITH_GOOGLE = gql`
query validateUserWithGoogle($email: String!, $tokenId: String){
    validateUserWithGoogle(email: $email, tokenId: $tokenId){
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

export default VALIDATE_USER_WITH_GOOGLE; 