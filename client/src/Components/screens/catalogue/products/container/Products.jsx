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
import ProductBar from './ProductBar';
const Products = () => {
//   const [search, setSearch] = useState(false);
//   const { stateSearch } = useSelector((state) => state);
  const dispatch = useDispatch();

  let { data } = useQuery(allProducts);
  useEffect(() => {
    dispatch(guardarProductos(data));
  }, []);

  return (
    <div className="cardProduct">
      <SearchBar />
      <Categories />
      <ProductBar/>
      {/* <HomeButton /> */}
      {/* <SortButton /> */}
      <Grid/>
    </div>
  );
};

export default Products;
