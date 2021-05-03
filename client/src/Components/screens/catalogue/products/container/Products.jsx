import React, { useEffect } from "react";
import SearchBar from "../../searchbar/SearchBar";
import Categories from "../categories/Categories";
import HomeButton from "../home&sort/homeButton/HomeButton";
import SortButton from "../home&sort/sortButton/SortButton";
import { useDispatch } from "react-redux";
import allProducts from "../../../../../Apollo/queries/allProducts";
import { useQuery } from "@apollo/client";
import { guardarProductos } from "../../../../../actions/index";
import Grid from "../grid/Grid";
import "./Products.css";
import ProductBar from "./ProductBar";
const Products = ({ orderId, refetchCatalogue }) => {
  const dispatch = useDispatch();

  let { data } = useQuery(allProducts, { fetchPolicy: "no-cache" });

  useEffect(() => {
    dispatch(guardarProductos(data));
  }, [data]);

  return (
    <div className="cardProduct">
      <SearchBar />
      <Categories />
      <ProductBar />
      <Grid orderId={orderId} refetchCatalogue={refetchCatalogue} />
    </div>
  );
};

export default Products;
