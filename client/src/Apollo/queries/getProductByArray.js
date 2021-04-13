import { gql } from "@apollo/client"

const getProductByArray = gql`
{
  getProductByArray($array:[Int!]) {
    id
    name
  }
}
`
export default getProductByArray