import { gql } from "@apollo/client"

const SUBSCRIBE_USER= gql`
mutation suscribeToNewsletter ($id: Int!, $newsletter: Boolean!){
    modifyUser(id: $id, newsletter: $newsletter){
      __typename
      ... on user{
        email
        name  
        id
        newsletter
      }
      __typename
      ... on error {
        name
        detail
      }
    }
}`

export default SUBSCRIBE_USER;