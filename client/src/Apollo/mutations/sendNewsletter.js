import { gql } from "@apollo/client"

const SEND_NEWSLETTER= gql`
mutation sendNewsletter ($message: String!, $image:String!){
  sendNewsletter(message: $message, image:$image){
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