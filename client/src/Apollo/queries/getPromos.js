import { gql } from "@apollo/client"

const getPromos = gql`
query getPromos{
    getPromos {
        id
        name
        day
        discount
        category
    }
}
`
export default getPromos;