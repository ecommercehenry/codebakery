import React, { useEffect, useState } from "react";
import { Rating, Skeleton } from "@material-ui/lab";
import { Typography, Box } from "@material-ui/core";
import GET_BY_REVIEW_PRODUCT from "../../../Apollo/queries/getByReviewProduct";
import { useQuery } from "@apollo/client";
import styled from "styled-components";

const ProductReview = ({ id }) => {
  const { data } = useQuery(GET_BY_REVIEW_PRODUCT, {
    variables: { productId: id },
  });

  const [loanding, setLoanding] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoanding(false);
    }, 1000);
  }, []);

  return (
    <StyledReviewProduct>
      {loanding ? (
        <Skeleton width={400} height={300} />
      ) : (
        data?.getAllReviewsFromAProduct.map((e, i) => (
          <div>
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Typography component="legend" key={i}>
                {e.title}
              </Typography>
              {e.stars > 0 ? <Rating name="read-only" value={e.stars} readOnly /> : ""}
              <h5>{e.description}</h5>
              <h5>{e.createdAt.slice(0, 25)}</h5>
            </Box>
          </div>
        ))
      )}
    </StyledReviewProduct>
  );
};
export default ProductReview;

const StyledReviewProduct = styled.div`
  overflow: scroll;
  white-space: normal;
  width: 40%;
  overflow-x: overlay;
`;
