import { gql } from "@apollo/client"

const productsByCategoryName = gql`
query getProductByCategoryName($name: String!){
  getProductByCategoryName(name: $name) {
    id
    name
    price
    discount
    stock
    image
    discount
  }
}
`

export default productsByCategoryName;
