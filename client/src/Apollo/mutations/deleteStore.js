import { gql } from "@apollo/client";

const DELETE_STORE = gql`
  mutation deleteStore($id: Int!) {
    deleteStore(id: $id) {
      __typename
    }
  }
`;
export default DELETE_STORE;
