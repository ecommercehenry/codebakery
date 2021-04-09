import React, { useEffect } from "react";
//import { NavLink } from "react-router-dom";
import allProducts from "../../../../../Apollo/queries/allProducts.js";
import { useQuery } from '@apollo/client';
import "./grid.css";

const productos = [
  {
    id: 1,
    title: "Brawnie",
    precio: "25$",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmy8dBUK-2SrQy0ExK-6OjyoxRHEYAKTeruQ&usqp=CAU",
  },
  {
    id: 2,
    title: "Galletas",
    precio: "40$",
    image:
      "https://www.hacergalletas.com/wp-content/uploads/2019/07/receta-galletas-caseras-de-mantequilla-1000.jpg",
  },
  {
    id: 3,
    title: "Biscocho",
    precio: "45$",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmy8dBUK-2SrQy0ExK-6OjyoxRHEYAKTeruQ&usqp=CAU",

  },
  {
    id: 4,
    title: "Amapola",
    precio: "15$",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmy8dBUK-2SrQy0ExK-6OjyoxRHEYAKTeruQ&usqp=CAU",
  },
  {
    id: 5,
    title: "Cookie",
    precio: "10$",
    image:
      "https://lh3.googleusercontent.com/proxy/7zdjPHwcWadhJPpqyxBvYg6icJ2At1TD8Is5yatLnRBT_qbfap9zsQIN1kpki6lUjW0HXbdZLqBZiRzEImedc2XgHRveZ_NLiLawoll-LtG5j5tzcc897HRg58iBwA9yWVZwpYf_QQx-xa8qlijmyHj4gGz76qOR6WftGYPPdJy2wDZySYvIp-l-FIlPtFGBMFn7Fv3NRzZpAbzjA4Pv773Tx3G5R0gj085_-GU6m8urm64a6o8",
  },
  {
    id: 6,
    title: "Espiral",
    precio: "20$",
    image:
      "https://www.hola.com/imagenes/cocina/tecnicas-de-cocina/20201110178912/brownie-de-chocolate-receta/0-887-553/brownie-t.jpg",
  },
  {
    id: 7,
    title: "Galletas",
    precio: "40$",
    image:
      "https://www.hacergalletas.com/wp-content/uploads/2019/07/receta-galletas-caseras-de-mantequilla-1000.jpg",
  },
  {
    id: 8,
    title: "Galletas",
    precio: "40$",
    image:
    'https://www.hola.com/imagenes/cocina/tecnicas-de-cocina/20201110178912/brownie-de-chocolate-receta/0-887-553/brownie-t.jpg',
  },
];
// {
//     query getAllProducts{
//         product{
//           id
//           name
//         }
//       }

// }
// Debo correjir por que trae los datos pero productos sale undefined; 
const Grid = () => {

      const { data } = useQuery(allProducts)
      console.log(data)
      useEffect(() => {
        
    }, [data])

  return (
     <div className="container">
      {
      productos?.map((element) => (
        <div>
          <span className="card" key={element.id}>
            <img
              src={element.image}
              width="250"
              height="200"
              alt="No se encontro la imagen"
            />
            <h4 className='title'>{element.title}</h4>
            <p className='price'>{element.precio}</p>
          </span>
        </div>
      ))
      }
    </div>
  );
};

export default Grid;
