import { gql } from "@apollo/client"

const CREATE_CATEGORY = gql`
  mutation addCategory ($name: String!){
    addCategory(name: $name) {
      name
    }
  }
`;

export default CREATE_CATEGORY;
