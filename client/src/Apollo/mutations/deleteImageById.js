import { gql } from "@apollo/client";

const DELETE_IMAGE = gql`
  mutation deleteImageById($imageId: Int!) {
    deleteImageById(imageId: $imageId) {
      __typename
      ... on booleanResponse {
        boolean
      }
      __typename
      ... on error {
        name
        detail
      }
    }
  }
`;

export default DELETE_IMAGE;
