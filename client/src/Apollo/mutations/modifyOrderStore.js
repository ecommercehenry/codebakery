import { gql } from "@apollo/client";

const MODIFY_ORDER_STORE = gql`
  mutation modifyOrderStore($idStore: Int!, $idOrder: Int!) {
    modifyOrderStore(idStore: $idStore, idOrder: $idOrder) {
      __typename
    }
  }
`;

export default MODIFY_ORDER_STORE;
