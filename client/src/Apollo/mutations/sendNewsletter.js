import { gql } from "@apollo/client"

const SEND_NEWSLETTER= gql`
mutation sendNewsletter ($message: String!){
    sendNewsletter(message: $message){
      __typename
	...on email{
    email
    messageId
  }
    ...on error{
      name
      detail
    }
      
      
    }
}
`

export default SEND_NEWSLETTER;