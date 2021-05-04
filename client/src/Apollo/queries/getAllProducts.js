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
      discount
    }
  }
`
export default getAllProducts
