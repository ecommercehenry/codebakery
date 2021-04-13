
  import { gql } from "@apollo/client"

const getProductByName = gql`
{
  getProductByArray($array:[Int!]) {
    id
    name
  }
}
`

export default getProductByName