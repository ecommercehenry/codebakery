import { gql } from "@apollo/client";

const DELETE_REVIEW = gql`
mutation deleteReview($productId: Int!, $userId:Int!){
	deleteReview(productId: $productId, userId: $userId) {
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
}
`;
export default DELETE_REVIEW;



