import { gql } from "@apollo/client"

const MODIFY_PRODUCT = gql`
 

 mutation modifyProduct( $id:Int!, $description:String, $price:Int, $stock:Int, $image:String) {
     modifyProduct( id:$id, dataToModify:{
           
            description:$description
            price:$price
            stock:$stock             
            image:$image
    })
    {
      name 
    }
   }
`
export default MODIFY_PRODUCT

// mutation addProduct($name:String!, $description:String!, $price:Float!, $stock:Int!, $category:String!, $image:String!){
//     addProduct(
//         name:$name
//         description:$description
//         price:$price
//         stock:$stock
//         category:$category
//         image:$image
//     ){
//         id
//     }
// }