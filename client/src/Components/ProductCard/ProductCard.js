import React from "react"
import { Link } from "react-router-dom"

function ProductCard({ name, price, quantity, img }) {
  return (
    <div>
      <img src={img} alt={`img-${name}`} />
      <div>
        <h1>{name}</h1>
        <p>{price}</p>
        <p>{quantity}</p>
        <Link to={`/product/${id}`}>
          <button>Product Details</button>
        </Link>
      </div>
    </div>
  )
}

export default ProductCard;