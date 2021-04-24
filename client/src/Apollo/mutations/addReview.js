import { gql } from "@apollo/client"; 

const ADD_REVIEW = gql`
mutation addReview($productId:Int!, $userId:Int!, $dataReview:reviewInput!){
  addReview(productId:$productId,userId:$userId,dataReview:$dataReview){
    __typename
    ... on review{
      id
      stars
      description
      title
    }
    __typename
    ...on error{
      detail
    }
  }
}`

export default ADD_REVIEW
