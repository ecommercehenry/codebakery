import { gql } from "@apollo/client";

const RESET_PASSWORD = gql`
  mutation resetPassword($userId: Int!) {
    resetPassword(userId: $userId) {
      ... on user {
        id
        name
        email
        role
        token
      }
      ... on error {
        name
        detail
      }
    }
  }
`;

export default RESET_PASSWORD;
