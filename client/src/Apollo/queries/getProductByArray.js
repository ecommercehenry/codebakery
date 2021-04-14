import { gql } from "@apollo/client";

const getProductByArray = gql`
  {
    getProductByArray(array: [Int] ) {
      name
    }
  }
`;
export default getProductByArray;
