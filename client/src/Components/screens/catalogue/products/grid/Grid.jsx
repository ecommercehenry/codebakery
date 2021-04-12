import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./grid.css";

const Grid = () => {

  let { stateproducts, filterProduct, allProduct, search } = useSelector((state) => state);
  let arr = []
  let dispatch = useDispatch();
  //me traigo el estado filterProduct y comparo si no esta renderizo ese componente;
// console.log(search, stateproducts,  'state')
  if(search === true){
    arr = allProduct.filter((element) => element.name === filterProduct) 
  }
  return (
     <div className="container">
       {
        
        search === false ?  
       (stateproducts && stateproducts?.length > 0
        ? stateproducts.map((element, i) => {
              return (
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
              )   
          }) : "Cargando")
          : (arr.length > 0 ? arr.map((element, i ) => {
              return (
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
              );
          }): "No se encontraron Productos" 
          )
        }
    </div>
  );
};

export default Grid;


      {/* {stateproducts && stateproducts?.length > 0
        ? stateproducts.map((element, i) => {
            if (filterProduct === "") {
              return (
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
              );
            } else {
              if (element.name === filterProduct) {

                return (
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
                );
              }
            }
          })
        : "No hay productos"} */}
