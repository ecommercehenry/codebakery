import React from "react"; 
import GET_BY_REVIEW_PRODUCT from "../../../Apollo/queries/getByReviewProduct";
import { useQuery } from "@apollo/client"; 

const ReviewByUser = () => {
    const { data } = useQuery(GET_BY_REVIEW_PRODUCT, {
        variables: { productId: 1 },
      });
    return (
        <div></div>
    )
}

export default ReviewByUser; 