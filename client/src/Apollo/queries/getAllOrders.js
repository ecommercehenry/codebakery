import { gql } from "@apollo/client"

const getAllOrders = gql`
query getAllOrders{
    getAllOrders{
     id
      status
      lineal_order{
        userId
        price
        quantity
        product{
          id
          name
          description
          stock
          image
          categories{
            id
            name
          }
        }
      }
    }
  }
`

export default getAllOrders;