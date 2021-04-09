import { gql } from "@apollo/client"

const productsByCategoryName = gql`
{
    getProductByCategoryName(name:"categoria 1") {
      id
      name
      price
      stock
      image
    }
  }
`

export default productsByCategoryName;
