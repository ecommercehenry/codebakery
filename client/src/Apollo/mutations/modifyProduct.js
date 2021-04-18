import { gql } from "@apollo/client"

const MODIFY_PRODUCT = gql`
  mutation modifyProduct($id: Int!, $data: productInput!) {
    modifyProduct(id: $id, dataToModify: $data) {
      __typename
      ... on product {
        id
        name
        stock
        price
        categories {
          name
        }
      }
      __typename
      ... on error {
        name
        detail
      }
    }
  }
`
export default MODIFY_PRODUCT
