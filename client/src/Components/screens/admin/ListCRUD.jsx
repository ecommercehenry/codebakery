import React from "react";
import TextCRUD from "./TextCRUD";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import allProducts from "../../../Apollo/queries/allProducts";

function ListCRUD() {
  const { data } = useQuery(allProducts);
  useEffect(() => {}, [data]);
  return (
    <div className="product-container">
      {data ? (
        data.product.map((item) => (
          <TextCRUD
            key={item.id}
            img={item.image}
            name={item.name}
            stock={item.stock}
            categories={item.categories}
            price={item.price}
          />
        ))
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}
export default ListCRUD;
