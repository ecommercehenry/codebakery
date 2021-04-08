import { gql } from "@apollo/client"

const UPDATE_CATEGORY = gql`
  mutation {
    updateCategory(
      id: 11
      input: { name: "Ivan", description: "Testing" }
    )
  }
`
export default UPDATE_CATEGORY