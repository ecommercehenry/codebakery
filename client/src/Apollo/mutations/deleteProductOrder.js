import { gql } from "@apollo/client";

const DELETE_PRODUCT_ORDER = gql`
  mutation deleteProductOrder ($orderId: Int!, $productId: Int!){
  deleteProductOrder(orderId: $orderId, productId: $productId){
    __typename
  }
}
`;

export default DELETE_PRODUCT_ORDER;