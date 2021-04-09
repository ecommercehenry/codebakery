import { useQuery } from "@apollo/client"
import React, { useEffect } from "react"
import getData from "../Apollo/queries/productById"
// import UPDATE_CATEGORY from "../Apollo/mutations/updateCategory"

function FormEditCRUD(props) {
  const {name, stock, categories, price} = props

  
  return (

    <div>hola estoy renderizado
      <form action="">
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
      </form>

    </div>

  )
  }

export default FormEditCRUD

// return (
//   <div className="product-container">
//     {data ? (
//       data.product.map((item) => (
//         <div className="element-container">
//           <div className="image-container">
//             <p>Product</p>
//             <img src={item.image} />
//           </div>
//           <div className="name-container">
//             <p>Name</p>
//             {item.name}
//           </div>
//           <div className="stock-container">
//             <p>Stock</p>
//             {item.stock}
//           </div>
//           <div className="category-container">
//             <p>Categories</p>
//             <p>se necesitan crear funciones</p>
//           </div>
//           <div className="price-container">
//             <p>Price</p>
//             {item.price}
//           </div>
//           <div className="edit-button">
//             <p>edit</p>
//           </div>
//           <div className="remove-button">
//             <p>remove</p>
//           </div>
//         </div>
//       ))
//     ) : (
//       <p>loading</p>
//     )}
    
//   </div>
// );