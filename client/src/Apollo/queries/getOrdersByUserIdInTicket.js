import { gql } from "@apollo/client";

const getOrdersByUserIdInTicket = gql`
  query getOrdersByUserIdInTicket($idUser: Int!) {
    getOrdersByUserIdInTicket(userId: $idUser) {
      ... on orders {
        orders {
          id
          status
          userId
          lineal_order {
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
      ... on error {
        name
        detail
      }
    }
  }
`;

export default getOrdersByUserIdInTicket;
