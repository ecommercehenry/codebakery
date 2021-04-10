import { gql } from "@apollo/client"

const getAllProducts = gql`
{
    product{
      id
      name
      description
      price
      stock
      image
    }
  }
`
export default getAllProducts
