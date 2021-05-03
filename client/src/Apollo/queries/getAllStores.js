import { gql } from "@apollo/client";

const GET_ALL_STORES = gql`
  {
    getAllStores {
      id
      name
      lat
      long
      address
      phoneNumber
    }
  }
`;

export default GET_ALL_STORES;
