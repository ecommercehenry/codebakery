import { gql } from "@apollo/client"

const getAllCategories = gql`
{
    getAllCategories{
      name
    }
  }
`

export default getAllCategories;