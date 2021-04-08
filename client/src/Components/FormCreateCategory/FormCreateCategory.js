import React, { useState } from "react"
import { useMutation } from "@apollo/client"
import CREATE_CATEGORY from "../../Apollo/mutations/createCategory"

function FormCreateCategory() {
  const [input, setInput] = useState({
    name: "",
    description: "",
  })

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
      variables: { name: input.name, description: input.description },
    })
    setInput({
      ...input,
      name: "",
      description: ""
    })
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h1>ADD A NEW CATEGORY</h1>
      <input
        type="text"
        name="name"
        placeholder="Type an activity here"
        onChange={handleInputChange}
        value={input.name}
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Type an activity here"
        onChange={handleInputChange}
        value={input.description}
        required
      />
      <button type="submit">Add Category</button>
    </form>
  )
}

export default FormCreateCategory
