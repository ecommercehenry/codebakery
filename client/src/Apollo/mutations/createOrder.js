import { gql } from "@apollo/client";

const CREATE_ORDER = gql`
  mutation createOrder($idUser:Int!,$dataProducts:[dataProductsOrderInput]) {
    createOrder(idUser:$idUser,dataProducts:$dataProducts) {
      id
      status
    }
  }
`;

export default CREATE_ORDER;
