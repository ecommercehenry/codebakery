import { gql } from "@apollo/client";

const MODIFY_STORE = gql`
  mutation modifyStore(
    $id: Int!
    $name: String!
    $lat: Float!
    $long: Float!
    $address: String!
    $phoneNumber: String
  ) {
    modifyStore(
      id: $id
      name: $name
      lat: $lat
      long: $long
      address: $address
      phoneNumber: $phoneNumber
    ) {
      id
      name
      lat
      long
      address
      phoneNumber
    }
  }
`;

export default MODIFY_STORE;
