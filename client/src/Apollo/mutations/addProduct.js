import { gql } from "@apollo/client"

const ADD_PRODUCT = gql`
  mutation addProduct(
    $category: String!
    $name: String!
    $description: String!
    $price: Float!
    $stock: Int!
    $image: String!
  ) {
    addProduct(
      category: $category
      name: $name
      description: $description
      price: $price
      stock: $stock
      image: $image
    ) {
      __typename
      ... on product {
        id
        name
        description
        price
        stock
        image
      }
      __typename
      ... on error {
        name
        detail
      }
    }
  }
`

export default ADD_PRODUCT
