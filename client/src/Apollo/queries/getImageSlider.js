import { gql } from "@apollo/client";

const GET_ALL_IMAGES = gql`
  query getImageSlider {
    getImageSlider {
      id
      name
      date
    }
  }
`;

export default GET_ALL_IMAGES;
