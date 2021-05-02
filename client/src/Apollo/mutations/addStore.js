import { gql } from "@apollo/client";

const ADD_STORE = gql`
  mutation addStore(
    $name: String!
    $lat: Float!
    $long: Float!
    $address: String!
    $phoneNumber: String
  ) {
    addStore(
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

export default ADD_STORE;
