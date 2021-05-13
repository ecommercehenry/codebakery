import { gql } from "@apollo/client";

const GET_All_ORDERS = gql`
  query getAllOrders {
    getAllOrders {
      ... on orders {
        orders {
          id
          status
          userId
          creation
          lastModified
          cancelled
          creation
          lastModified
          name
          email
          role
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

export default GET_All_ORDERS;
