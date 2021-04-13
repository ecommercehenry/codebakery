import { gql } from "@apollo/client"

const UPDATE_CATEGORY = gql`
  mutation {
    updateCategory(
      id: 1
      input: { name: "Salty"}
    )
  }
`
export default UPDATE_CATEGORY