import { gql } from "@apollo/client"

const getAllProducts = gql`
{
    product{
      id
      name
      description
      price
      discount
      stock
      image
    }
  }
`
export default getAllProducts
