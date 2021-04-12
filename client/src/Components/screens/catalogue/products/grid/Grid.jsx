import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import allProducts from "../../../../../Apollo/queries/allProducts.js";
import { useQuery } from '@apollo/client';
import "./grid.css";


// {
//     query getAllProducts{
//         product{
//           id
//           name
//         }
//       }

// }
// Debo correjir por que trae los datos pero productos sale undefined; 
const Grid = ({id}) => {
      const { data } = useQuery(allProducts)
      console.log(data)
      useEffect(() => {
    }, [data])

  return (

     <div className="container">
      {
      data?.product.map((element) => (
        <div>
          <span className="card" key={element.id}>
            <img
              src={element.image}
              width="250"
              height="200"
              alt="No se encontro la imagen"
            />
            <h4 className='title'>{element.name}</h4>
            <p className='price'>{element.price}</p>
          </span>
        </div>
      ))
      }
    </div>
  );
};

export default Grid;
