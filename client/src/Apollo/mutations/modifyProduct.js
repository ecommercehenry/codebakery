import { gql } from "@apollo/client"

const MODIFY_PRODUCT = gql`
 

 mutation modifyProduct( $id:Int!, $data:productInput!) {
     modifyProduct( id:$id, dataToModify:$data){
       name
       description
       price
       stock
       image
       categories{
         name
       }
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