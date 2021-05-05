import React, { useState, useEffect } from "react"
import { useMutation } from "@apollo/client"
import CREATE_CATEGORY from "../../Apollo/mutations/createCategory"
import styled from 'styled-components'

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
  // 
  useEffect(()=>{
    if(!loading){
      if(data?.addCategory.__typename === 'error'){
        
        setAdded(false)
      }
      else if(data?.addCategory.__typename === 'category'){
        
        setAdded(true);
      }
    }
  },[data, loading])
  

  return (
    <CreateCategoryBtn onSubmit={(e) => handleSubmit(e)} style={{position:"relative"}}>
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
    </CreateCategoryBtn>
  )
}

const CreateCategoryBtn = styled.form`
margin-top: 0;
.category-input{
  width: 20rem;
  border-radius: 40px;
  border: 1.3px solid #949494;
  height: 2rem;
  margin: 0;
  text-align: left;
  padding-left: 2%;
}

.category-input:focus{
  outline: none;
}

.category-btn{
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 40px;
  border: none;
  background:#5E3F71;
  color: white;
  padding: 0 2%;
  height: 100%;
  width: 40%;
  transform: none!important;
  margin: 0;
  font-weight: bold;
  box-shadow: none;
}

.Success-btnn{
  width: 20vw;
  border-radius: 40px;
  border: none;
  height: 2rem;
  background-color: green;
  color:white;
  display: flex;
  justify-content: center;
  align-items: center;
}
`

export default FormCreateCategory
