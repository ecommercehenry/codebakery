import { gql } from "@apollo/client";

const GET_STORE_BY_ID = gql`
  query getByStore($id: Int!) {
    getByStore(id: $id) {
      name
      address
      phoneNumber
    }
  }
`;

export default GET_STORE_BY_ID;
