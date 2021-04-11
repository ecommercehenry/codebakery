import { gql } from "@apollo/client"

const CREATE_CATEGORY = gql`
  mutation addCategory ($name: String!, $description: String!){
    addCategory(name: $name, description: $description) {
      name
    }
  }
`;

export default CREATE_CATEGORY;
