import { gql } from "@apollo/client"

const DELETE_PROMO = gql`
    mutation deletePromo(
        $id:Int!
    ){
        deletePromo(
            id:$id
    ){
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

export default DELETE_PROMO