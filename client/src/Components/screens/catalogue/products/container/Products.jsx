import React, { useEffect } from "react";
import SearchBar from "../../searchbar/SearchBar";
import Categories from "../categories/Categories";
import { useDispatch } from "react-redux";
import allProducts from "../../../../../Apollo/queries/allProducts";
import { useQuery } from "@apollo/client";
import { guardarProductos } from "../../../../../actions/index";
import Grid from "../grid/Grid";
import "./Products.css";
import ProductBar from "./ProductBar";
import PaginationGrid from "../grid/PaginationGrid";

const Products = ({ orderId, refetchCatalogue }) => {
  const dispatch = useDispatch();

  let { data,refetch} = useQuery(allProducts);
  useEffect(() => {
    dispatch(guardarProductos(data));
    refetch()
  }, [data, dispatch, refetch]);

  return (
    <div className="cardProduct">
      <SearchBar />
      <Categories />
      <ProductBar />
      <Grid orderId={orderId} refetchCatalogue={refetchCatalogue} />
      <PaginationGrid />
    </div>
  );
};

export default Products;
