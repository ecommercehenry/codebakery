import { gql } from "@apollo/client";

const GET_BY_REVIEW_PRODUCT = gql`
query getAllReviewsFromAProduct($productId:Int!){
  getAllReviewsFromAProduct(productId: $productId) {
          id
          title
          description
          stars
          createdAt
  }
}

`;
export default GET_BY_REVIEW_PRODUCT;
