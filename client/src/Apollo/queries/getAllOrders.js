import { gql } from "@apollo/client";

const GET_All_ORDERS = gql`
query getAllOrders{
  getAllOrders{
   	...on orders{
      orders{
        id
        status
        userId
        creation
        lastModified
        cancelled
        lineal_order{
          id
          status
          name
          email
          role
          userId
          creation
          lastModified
          cancelled
          lineal_order {
            id
            name
            stock
            image
            price
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
