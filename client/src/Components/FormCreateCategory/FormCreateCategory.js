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
  const [addCategory, { data, loading}] = useMutation(CREATE_CATEGORY)

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
    // setAdded(true)
  }
//   addCategory: {__typename: "error", name: "error", detail: "No admin"}
// __proto__: Object
  // console.log(data)
  useEffect(()=>{
    if(!loading){
      if(data?.addCategory.__typename === 'error'){
        console.log('poner el boton el rojo')
        setAdded(false)
      }
      else if(data?.addCategory.__typename === 'category'){
        console.log('poner el bptn en verde');
        setAdded(true);
      }
    }
  },[data])
  

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
