import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "@apollo/client";
import productsByCategoryName from "../../../../../Apollo/queries/productsByCategoryName";
import getAllCategories from "../../../../../Apollo/queries/getAllCategories";
import allProducts from "../../../../../Apollo/queries/allProducts";
import { getAllProducts } from "../../../../../actions";
import styles from "./Categories.module.css";
import styled from "styled-components";
import $ from "jquery";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

const Categories = () => {
  //Iniciamos el estado en all para que se rendericen todos los productos
  const [name, setName] = React.useState("All");
  //
  //Obtenemos productos por nombre de categoria (apolo client)
  let products = useQuery(productsByCategoryName, {
    variables: { name: name },
  });
  products = products?.data?.getProductByCategoryName
    ? products.data.getProductByCategoryName
    : products.data;

  const dispatch = useDispatch();
  //Obtenemos todos los productos de apolo client
  let todosproductos = useQuery(allProducts);

  if (name === "All") {
    products = todosproductos?.data?.product
      ? todosproductos.data.product
      : products;
  }

  //Obtenemos todas las categorias de apolo client
  const categories = useQuery(getAllCategories);

  // useEffect(()=>{
  //
  // },[])
  let { status } = useSelector((state) => state.theme);
  //Se envia la acción para actualizar los productos que se renderizan
  useEffect(() => {
    //
    dispatch(getAllProducts(products));
    //
  }, [products, dispatch]);

  //tenemos un query para pedir los productos por categorias
  //cada categoria sera renderizada como un boton que al hacer clic llama a la query
  //de productos por categorias(filtrado por categorias)
  //caso BASE: Al presionar un btn ALL/TODOS, se hace un llamado a todos los productos
  const handleClick = (e) => {
    // accion para modificar el estado del booleano 'search'
    // dispatch(setSearch());
    setName(e.target.name);
  };

  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);

  $(".categories-slider").scroll(function () {
    // console.log($('#scrollquestion').width());
    // console.log($('#scrollquestion').scrollLeft());
    var $width = $(".categories-slider").outerWidth();

    var $scrollWidth = $(".categories-slider")[0].scrollWidth;
    var $scrollLeft = $(".categories-slider").scrollLeft();
    if (Math.ceil($scrollWidth - $width) === $scrollLeft) {
      setRight(false);
    } else {
      setRight(true);
    }
    if ($scrollLeft === 0) {
      setLeft(false);
    } else {
      setLeft(true);
    }
  });

  $("#leftArrow").click(function () {
    var leftPos = $(".categories-slider").scrollLeft();
    $(".categories-slider").animate(
      {
        scrollLeft: leftPos - 300,
      },
      0
    );
  });

  $("#rightArrow").click(function () {
    var leftPos = $(".categories-slider").scrollLeft();
    $(".categories-slider").animate(
      {
        scrollLeft: leftPos + 300,
      },
      0
    );
  });

  return (
    <StyledCategories className={styles.categories} light={status}>
      <div className="categories-slider">
        {left ? (
          <button
            id="leftArrow"
            style={{
              position: "absolute",
              zIndex: "2",
              width: "40px",
              // padding: "0 1em",
              left: "0",
              bottom: "2.09em",
              border: "none",
              backgroundColor: "transparent",
              backgroundImage:
                "linear-gradient(to left, rgba(220,215,221,0) 0%, rgba(220,215,221) 50%)",
            }}
          >
            <HiOutlineChevronLeft size="1em" />
          </button>
        ) : (
          <></>
        )}
        <div className="categories">
          <div>
            <button name="All" onClick={handleClick} className={styles.btn}>
              All
            </button>
          </div>

          {categories?.data?.getAllCategories.map((cate, i) => (
            <div key={i}>
              <button
                name={cate.name}
                onClick={handleClick}
                className={styles.btn}
              >
                {cate.name}
              </button>
            </div>
          ))}
        </div>
        {right ? (
          <div
            id="rightArrow"
            style={{
              position: "absolute",
              zIndex: "2",
              width: "40px",
              // padding: "0 1em",
              right: "0",
              bottom: "2.09em",
              backgroundImage:
                "linear-gradient(to right, rgba(220,215,221,0) 0%, rgba(220,215,221) 50%)",
            }}
          >
            <HiOutlineChevronRight size="1em" />
          </div>
        ) : (
          <></>
        )}
      </div>
    </StyledCategories>
  );
};

const StyledCategories = styled.div`
  background: ${({ light }) => (light ? "#DCD7DD" : "#555555")};
  //color:${({ light }) => (light ? "inherit" : "white")};
  button {
    background: ${({ light }) => (light ? "#DCD7DD" : "#555555")};
    color: ${({ light }) => (light ? "#755588" : "#c66ef8")};
  }

  position: relative;

  .categories-slider {
    display: flex;
    width: 90%;
    overflow-y: hidden;
    overflow-x: auto;
    scroll-behavior: smooth;
    margin-bottom: -0.5em;

    ::-webkit-scrollbar {
      width: 0; /* Remove scrollbar space */
      background: transparent; /* Optional: just make scrollbar invisible */
    }

    .categories {
      display: flex;
      justify-content: flex-end;
      flex: 0 0 auto;
      margin: 0 auto;

      div {
        width: fit-content;
      }
    }
  }
`;

export default Categories;
