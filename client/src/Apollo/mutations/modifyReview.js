import { gql } from "@apollo/client"

const MODIFY_REVIEW  = gql`
mutation modifyReview($reviewId:Int!, $dataReview:reviewInput!){
    modifyReview(reviewId:$reviewId,dataReview:$dataReview){
      __typename
      ... on review{
        id
        stars
        description
        title
      }
      __typename
      ...on error{
        name
        detail
      }
    }
  }
  `
export default MODIFY_REVIEW