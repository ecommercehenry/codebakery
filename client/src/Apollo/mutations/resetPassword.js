import { gql } from "@apollo/client"

const RESET_PASSWORD = gql`
mutation resetPassword($userId:Int!){
    resetPassword(userId:$userId){
      ... on booleanResponse{
        boolean
      }
      ... on error{
        name
        detail
      }
    }
  }
`

export default RESET_PASSWORD
