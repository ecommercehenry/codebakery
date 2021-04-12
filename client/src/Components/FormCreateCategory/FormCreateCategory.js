import React, { useState, useEffect } from "react"
import { useMutation } from "@apollo/client"
import CREATE_CATEGORY from "../../Apollo/mutations/createCategory"
import './style.css'

function FormCreateCategory() {
  const [input, setInput] = useState({
    name: "",
    description: "",
  })

  const [added, setAdded] = useState(false)

  function handleInputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }

  

  // let input
  const [addCategory, { data }] = useMutation(CREATE_CATEGORY)

  function handleSubmit(e) {
    e.preventDefault()
    addCategory({
      variables: { name: input.name },
    })
    setInput({
      ...input,
      name: "",
      description: ""
    })
    setAdded(true)
  }


  return (
    <form onSubmit={(e) => handleSubmit(e)} style={{position:"relative"}}>
      {added? <div className="Success-btnn" onClick={() => setAdded(false)}>Category added</div> : <> <input
        type="text"
        name="name"
        placeholder="Type category name"
        onChange={handleInputChange}
        value={input.name}
        required
        className="category-input"
      >
      </input>
      <button type="submit" className="category-btn">Add Category</button></>}
    </form>
  )
}

export default FormCreateCategory
