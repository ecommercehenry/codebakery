import { gql } from "@apollo/client"; 

const ADD_REVIEW = gql`
mutation addReview(
  $productId: Int!, 
  $userId:Int!, 
  $dataReview: reviewInput!
  ){
    addReview(
      productId: $productId, 
      userId: $userId, 
      dataReview: $dataReview
      ){
    __typename
    ... on review{
      id
      title
      stars
      description
    }
    __typename
    ... on error {
      name
      detail
    }
  }
}
`;

export default ADD_REVIEW