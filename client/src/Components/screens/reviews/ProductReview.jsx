import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { productReview } from "../../../actions/reviews";
// import { useParams } from "react-router-dom";
import { Skeleton, TreeView, TreeItem, Rating } from "@material-ui/lab";
import { Typography, Box } from "@material-ui/core";
import GET_BY_REVIEW_PRODUCT from "../../../Apollo/queries/getByReviewProduct";
import { useQuery } from "@apollo/client";

const ProductReview = ({ id }) => {
  //let id = useParams();
  const { data } = useQuery(GET_BY_REVIEW_PRODUCT, {
    variables: { productId: 1 },
  });
  const [loanding, setLoanding] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoanding(false);
    }, 5000);
  }, []);

  let valor = 0;
  let index = 0;  
  let rating = {
    start_1 : 20, 
    start_2 : 40, 
    start_3 : 60, 
    start_4 : 80, 
    start_5 : 100, 
  }
  if(data !== undefined){
    if (data.getAllReviewsFromAProduct.length !== 0 ){
      data.getAllReviewsFromAProduct.map((element, i) =>{
        valor = valor + element.start
        valor = parseInt(valor/i) 
      }); 
    }
  }
  console.log(valor, 'suma')

  return (
    <div>
      {loanding
        ? "Cargando"
        : data?.getAllReviewsFromAProduct.map((e, i) => (
            <div>
             <Rating name="read-only" value={e.stars} readOnly />
              <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend" key={i}>{e.title}</Typography>
                <h5>{e.description}</h5>
              </Box>
            </div>
          ))}
    </div>
  );
};
export default ProductReview;
