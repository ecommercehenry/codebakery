import { gql } from "@apollo/client";

const DECREMENT_QUANTITY = gql`
  mutation decrementQuantity($orderId: Int!, $productId: Int!, $quantity: Int!){
  decrementQuantity(orderId: $orderId, productId: $productId, quantity: $quantity){
    __typename
  }
}
`;

export default DECREMENT_QUANTITY;