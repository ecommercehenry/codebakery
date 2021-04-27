import { gql } from "@apollo/client";

const GET_REVIEW_BY_USER = gql`
query getReviewByUserId($userId:Int!){
    getReviewByUserId(userId: $userId) {
          id
          title
          description
          stars
          productId
  }
}

`;
export default GET_REVIEW_BY_USER;