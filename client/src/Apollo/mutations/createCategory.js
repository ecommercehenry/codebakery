import { gql } from "@apollo/client"

const CREATE_CATEGORY = gql`
mutation addCategory ($name: String!){
  addCategory(name: $name){
    __typename
    ... on category {
      id
      name
    }
    __typename
    ... on error {
      name
      detail
    }
  }
}
`;

export default CREATE_CATEGORY;
