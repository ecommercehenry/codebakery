import { gql } from "@apollo/client"

const PROMOTE_USER = gql`
mutation promoteUser ($id: Int!, $role: String!){
    modifyUser(id: $id, role:$role){
      __typename
      ... on user{
        name
        id
        role
      }
      __typename
      ... on error {
        name
        detail
      }
    }
}`

export default PROMOTE_USER
