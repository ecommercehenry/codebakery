import React, { useEffect } from "react";
import "./DetailStyles.css";
import { Link, useParams } from "react-router-dom";
import getData from "../../../Apollo/queries/productById";
import { useQuery } from "@apollo/client";
import ButtonAddCart from "../../screens/catalogue/products/grid/ButtonAddCart";
import ProductReview from "../reviews/ProductReview";

const Detail = () => {
  let idCart = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);

    setTimeout(() => {
      document.body.style.overflow = "hidden";
    }, 1000);

    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  const path = window.location.pathname;
  const id = parseInt(path.split("/").pop(), 10);

  const { data } = useQuery(getData, { variables: { id } }); // <------
  useEffect(() => {}, [data]);

  return (
    <div className="detail-container">
      <Link to="/catalogue" className="close-btn">
        X
      </Link>
      <div className="detailCard">
        {data?.productById ? (
          <>
            <div className="imageSide">
              {/*data && data.image && <img src={data.image} style={{maxWidth:"400px", width:"80%"}} alt=""/>*/}
              <img
                src={data?.productById.image}
                style={{ maxWidth: "100%", width: "80%", maxHeight: "100%" }}
                alt=""
              />
            </div>
            <div className="dataSide d-flex position-relative">
              <>
                <span className="title">{data?.productById.name}</span>
                <span className="price">${data?.productById.price}</span>
                <span className="description">
                  {data?.productById.description}
                </span>
                <div className="bottom-btns d-flex justify-content-center">
                  <ButtonAddCart id={parseInt(idCart.id)} />
                  <Link to="/cart" className="purple-btn">
                    <button className="purple-btn">Buy now</button>
                  </Link>
                </div>
              </>
            </div>
            <ProductReview id={id}/>
          </>
        ) : (
          "loading..."
        )}
      </div>
    </div>
  );
};

export default Detail;
