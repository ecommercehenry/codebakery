import { gql } from "@apollo/client"

const MODIFY_ORDER_STATUS = gql`
mutation modifyOrderStatus($orderId:Int!, $status:String!){
    modifyOrderStatus(orderId:$orderId, status:$status) {
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
`
export default MODIFY_ORDER_STATUS
