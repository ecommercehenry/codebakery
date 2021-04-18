import { gql } from "@apollo/client"

const UPDATE_CATEGORY = gql`
  mutation updateCategory($id: Int!, $input: categoryInput!) {
    updateCategory(id: $id, input: $input) {
      __typename
      ... on category {
        id
        name
      }
      __typename
      ... on error {
        name
        detail
      }
    }
  }
`
export default UPDATE_CATEGORY
