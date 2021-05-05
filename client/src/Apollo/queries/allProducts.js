import { gql } from "@apollo/client"

const allProducts = gql`
query{
  product{
    name
    description
    id
    image
    price
    discount
    stock
    categories{
      name
      id
    }
  }
}
`

export default allProducts
