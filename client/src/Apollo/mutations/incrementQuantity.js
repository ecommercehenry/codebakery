import { gql } from "@apollo/client";

const INCREMENT_QUANTITY = gql`
  mutation incrementQuantity($orderId: Int!, $productId: Int!, $quantity: Int!){
  incrementQuantity(orderId: $orderId, productId: $productId, quantity: $quantity){
    __typename
  }
}
`;

export default INCREMENT_QUANTITY;