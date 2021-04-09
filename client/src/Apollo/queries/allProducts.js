import { gql } from "@apollo/client"

const allProducts = gql`
query{
  product{
    name
    description
    id
    image
  }
}

`

export default allProducts