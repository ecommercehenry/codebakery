import { gql } from "@apollo/client"

const RESET_DISCOUNT = gql`
    mutation resetDiscount{
        resetDiscount{
        __typename
            ... on booleanResponse {
                boolean
            }
        __typename
            ... on error {
                name
            }
        }
    }
`

export default RESET_DISCOUNT