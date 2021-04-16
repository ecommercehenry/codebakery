import { gql } from "@apollo/client";

const GET_ORDERS_BY_USER_ID_IN_CART = gql`
  query getOrdersByUserIdInCart($userId: Int!){
  getOrdersByUserIdInCart(userId: $userId){
    id
    status
    lineal_order {
      userId
      price
      quantity
      product {
        name
        stock
        image
      }
    }
  }
}
`;
export default GET_ORDERS_BY_USER_ID_IN_CART;
