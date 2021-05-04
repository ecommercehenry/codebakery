import { gql } from "@apollo/client"

const APPLY_DISCOUNT = gql`
mutation applyDiscount(
    $discount:Int!, 
    $category:String!
    ){
        applyDiscount(
            discount:$discount, 
            category:$category
        ){
            __typename
            ... on booleanResponse {
                boolean
            }
            __typename
            ... on error {
                detail
            }
        }
    }
`

export default APPLY_DISCOUNT