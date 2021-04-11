// import { useQuery } from "@apollo/client"
// import getData from "../Apollo/queries/productById"
// import UPDATE_CATEGORY from "../Apollo/mutations/updateCategory"
import React from "react"
import './FormCRUD.css'

function FormCRUD(props) {
  
  const { name, stock, categories, price, img, handlerOnClick } = props;
  function agregarCategoria(){
    //hacer query mutation para agregar una categoria nueva
    //luego relacionar esa categoria con el producto
  }
  function quitarCategoria(e){
    //Hacer query para modificar un producto, quitandole esa categoria
    e.preventDefault()
    console.log("............................evento quitar categoria",e)
  }
  return (
    <form 
    
    className="F-element-container">
      <div className="F-image-container">
        <p>Product</p>
        <img src={img} alt="imagen" />
        <button onClick="">Edit Photo</button>
      </div>

      <div className="F-name-container">
        <p>Name</p>
        <input value={name} />
      </div>
      <div className="F-stock-container">
        <p>Stock</p>
        <input value={stock} />
      </div>

      <div className="F-category-container">
        <p>Categories</p>
        <div className="F-categories">
          {categories.map((cat) => (
            <>
              {/* <input value = {cat}/> */}
              <span>
                {cat.name}
                <button value={cat.id} onClick={quitarCategoria}> x </button>
              </span>
            </>
          ))}
          <button onClick={agregarCategoria}> add </button>
        </div>
      </div>
      <div className="F-price-container">
        <p>Price</p>
        <input value={price} />
      </div>
      <div className="F-edit-button">
        <button type="submit" >edit</button>
      </div>
      <div className="F-remove-button">
        <button onClick={handlerOnClick}>cancel</button>
      </div>
    </form>
  );
}

export default FormCRUD

