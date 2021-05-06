import { gql } from "@apollo/client";

const SEND_EMAIL_SENT = gql`
  mutation sendEmail($userId: Int!, $affair: String!, $message: String!) { 
    sendEmail(userId: $userId, affair: $affair, message: $message) {
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
`;

export default SEND_EMAIL_SENT;
