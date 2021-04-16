import { gql } from "@apollo/client";

const GET_ORDERS_BY_USER_ID_IN_CART = gql`
 query getOrdersByUserIdInCart($userId: Int!){
  getOrdersByUserIdInCart(userId: $userId){
    lineal_order {
      quantity
      product {
        name
        stock
        image
        price
      }
    }
  }
}
`;
export default GET_ORDERS_BY_USER_ID_IN_CART;
