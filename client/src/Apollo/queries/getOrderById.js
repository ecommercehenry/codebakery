import { gql } from "@apollo/client";

const GET_ORDERS_BY = gql`
  query getOrderById($idOrder: Int!) {
    getOrderById(id: $idOrder) {
      ... on order {
        id
        status
        userId
        creation
        lastModified
        lineal_order {
          name
          discount
          quantity
        }
      }
      ... on error {
        detail
      }
    }
  }
`;

export default GET_ORDERS_BY;
