import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../../../../actions";
import allProducts from "../../../../../Apollo/queries/allProducts";
import { useQuery } from "@apollo/client";
import "./grid.css";

// Solo falta poner algunos condicionales q muestre el stado correspondiente al hacer el click
const Grid = ({ search }) => {
  const { stateproducts } = useSelector((state) => state);
  console.log(stateproducts);
  const { stateSearch } = useSelector((state) => state);
  console.log(stateSearch);

  const dispatch = useDispatch();
  const { data } = useQuery(allProducts);

  // const [ state, setState ] = useState({
    
  // })
  useEffect(() => {
   //dispatch(getAllProducts(data));
  }, []);

  return (
    <div className="container">
      {search === false
        ? stateproducts?.product?.map((element, i) => (
            <div key={i}>
              <span className="card" key={element.id}>
                <img
                  src={element.image}
                  width="250"
                  height="200"
                  alt="No se encontro la imagen"
                />
                <h4 className="title">{element.name}</h4>
                <p className="price">{element.price}</p>
              </span>
            </div>
          ))
        : stateSearch?.product?.map((element, i) => (
            <div key={i}>
              <span className="card" key={element.id}>
                <img
                  src={element.image}
                  width="250"
                  height="200"
                  alt="No se encontro la imagen"
                />
                <h4 className="title">{element.name}</h4>
                <p className="price">{element.price}</p>
              </span>
            </div>
          ))}
    </div>
  );
};

export default Grid;

// {
//   search === false ? ( ...se muestran todos los productos) : (
// ...se muestran los productos que buscaste)
// }
