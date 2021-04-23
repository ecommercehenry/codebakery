import { gql } from "@apollo/client"

const ADD_PRODUCT_TO_ORDER = gql`
mutation addProductToOrder ($orderId: Int!, $productId: Int!, $quantity: Int!, $userId: Int){
  addProductToOrder(orderId: $orderId, productId: $productId, quantity: $quantity, userId: $userId){
    __typename
  }
}
`;

export default ADD_PRODUCT_TO_ORDER;