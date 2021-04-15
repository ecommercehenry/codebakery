import { gql } from "@apollo/client";

const CREATE_ORDER = gql`
  mutation createOrder($idUser:Int! , $dataProducts:[dataProductsOrderInput]!){
	  createOrder(idUser:$idUser, dataProducts:$dataProducts)
	  {
		... on order{
		  id
		  status
		}
		... on error{
		  detail
		}
	  }
	}
`;

export default CREATE_ORDER;
