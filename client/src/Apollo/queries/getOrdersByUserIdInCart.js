import { gql } from "@apollo/client";

const getOrdersByUserIdInCart = gql`
{
  query getOrdersByUserIdInCart($userId: Int!)
  getOrdersByUserIdInCart(userId: $userId) {
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
export default getOrdersByUserIdInCart;
