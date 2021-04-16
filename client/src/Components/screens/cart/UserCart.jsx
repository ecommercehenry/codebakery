import GET_ORDERS_BY_USER_ID_IN_CART from "../../../Apollo/queries/getOrdersByUserIdInCart";
import { useQuery } from "@apollo/client";

const UserCart = () => {
  let storage = window.localStorage;
  let userId = parseInt(storage.id);
  const [getOrder, { data, loading }] = useQuery(GET_ORDERS_BY_USER_ID_IN_CART);

  useEffect(() => {
    getOrder({
      variables: {
        userId: userId,
      },
    });
  });
  console.log(data);

  return (<div> si ves esto es porque no rompi  </div>);
};

export default UserCart;
