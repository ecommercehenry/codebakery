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