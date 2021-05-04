import { gql } from "@apollo/client"

const ADD_PROMO = gql`
    mutation addPromo(
        $discount:Int!, 
        $category:String!, 
        $day:String! 
        $name:String!
    ){
        addPromo(
            discount:$discount, 
            category:$category, 
            day:$day, 
            name:$name
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

export default ADD_PROMO