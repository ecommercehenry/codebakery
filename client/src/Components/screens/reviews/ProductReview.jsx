import React  from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { productReview } from "../../../actions/reviews";
// import { useParams } from "react-router-dom";
import GET_BY_REVIEW_PRODUCT from "../../../Apollo/queries/getByReviewProduct";
import { useQuery } from "@apollo/client";

const ProductReview = ({ id }) => {
  //let id = useParams();
  const { data } = useQuery(GET_BY_REVIEW_PRODUCT, {
    variables: { productId: id },
  });

  // const productReviews =  useSelector((state) => state.reviewsReducer);
  // let dispatch = useDispatch();
  // useEffect(() => {
  //     dispatch(productReview(id));
  //   }, [data]);
  // console.log(productReviews, 'state')
  console.log(data, "reviwww");
  console.log(data?.getAllReviewsFromAProduct[0], "reviwww");

  return (
    <div>
      {/* {data?.getAllReviewsFromAProduct?.map((e) => (
        <div>
          <h3 key={e.id}>{e.title}</h3>
          <h3 key={e.id}>{e.description}</h3>
          <h3 key={e.id}>{e.start}</h3>
        </div>
      ))} */}
    </div>
  );
};
export default ProductReview;
