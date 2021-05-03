import { gql } from "@apollo/client";

const SAVE_IMAGE = gql`
  mutation saveImageSlider($image: String!) {
    saveImageSlider(image: $image) {
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

export default SAVE_IMAGE;
