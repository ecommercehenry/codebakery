import { gql } from "@apollo/client";

const GET_BY_PRODUCT = gql`

query{
  product{
    id
    stock
     }
  }

`;
export default GET_BY_PRODUCT;