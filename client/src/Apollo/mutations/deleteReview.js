import { gql } from "@apollo/client";

const DELETE_REVIEW = gql`
  mutation deleteReview($id: Int!) {
    __typename
    ... on booleanResponse{
    boolean
    }
__typename 
    ... on error{
    name
    detail
    }
  }
`;
export default DELETE_REVIEW;



