import { gql } from "@apollo/client";

const DELETE_USER = gql`
  mutation deleteUser($userId: Int!) {
    deleteUser(userId: $userId) {
      __typename
      ... on booleanResponse {
        boolean
      }
      ... on error {
        name
        detail
      }
    }
  }
`;

export default DELETE_USER;
