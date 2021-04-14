import { gql } from "@apollo/client"

const CREATE_CATEGORY = gql`
  mutation addCategory ($name: String!){
    __typename
    ... on category {
      id
      name
    }
    __typename
    ... on error {
      name
    }
  }
`;

export default CREATE_CATEGORY;
