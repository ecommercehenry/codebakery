import { gql } from "@apollo/client"

const ADD_PRODUCT = gql`
mutation addProduct($name:String!, $description:String!, $price:Float!, $stock:Int!, $category:String!, $image:String!){
    addProduct(
        name:$name
        description:$description
        price:$price
        stock:$stock
        category:$category
        image:$image
    ){
        id
    }
}
`;

export default ADD_PRODUCT;