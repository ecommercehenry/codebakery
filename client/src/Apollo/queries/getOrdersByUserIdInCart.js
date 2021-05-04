import { gql } from "@apollo/client";

const GET_ORDERS_BY_USER_ID_IN_CART = gql`
query getOrdersByUserIdInCart($idUser: Int!){
  getOrdersByUserIdInCart(userId:$idUser){
   	...on orders{
      orders{
        status
        id
        storeId
        lineal_order{
          id
          name
          stock
          image
          price
          discount
          quantity
        }
      }
    }
    ...on error{
      name
      detail
    }
  }
}
`;
export default GET_ORDERS_BY_USER_ID_IN_CART;
