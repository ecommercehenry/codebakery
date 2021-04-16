import { gql } from "@apollo/client"

const getAllOrders = gql`
query getAllOrders{
  getAllOrders{
   	...on orders{
      orders{
        id
        status
        userId
        cancelled
        lineal_order{
          id
          name
          stock
          image
          price
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
`

export default getAllOrders;