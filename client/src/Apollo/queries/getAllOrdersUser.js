import { gql } from "@apollo/client"

const GET_ALL_ORDERS_USER = gql`
query getAllOrdersUser($userId:Int!){
	getAllOrdersUser(userId:$userId){
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
export default GET_ALL_ORDERS_USER





// query getAllOrdersUser($userId:Int!){
// 	getAllOrdersUser(userId:$userId){
//    	...on orders{
//       orders{
//         id
//         status
//         userId
//         cancelled
//         lineal_order{
//           id
//           name
//           stock
//           image
//           price
//           quantity
//         }
//       }
//     }
//     ...on error{
//       name
//       detail
//     }
//   }


// }
