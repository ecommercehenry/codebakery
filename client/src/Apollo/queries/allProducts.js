import { gql } from "@apollo/client"

const allProducts = gql`
query allProducts{
  product{
    id
    name
  }
}
`

export default allProducts;