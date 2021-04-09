import { gql } from "@apollo/client"

const productsByCategoryName = gql`
{
    getProductByCategoryName(name:"Cocina") {
      id
      name
      price
      stock
      image
    }
  }
`

export default productsByCategoryName;
