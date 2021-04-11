import React, { useState, useEffect } from "react";
import { fetchByName } from '../../../../actions';
import { useDispatch} from "react-redux";

const SearchBar = ({setSearch}) => {

  const dispatch = useDispatch()
  const [input, setInput] = useState([])

  const submitHandler = async (e) => {
      e.preventDefault();
      dispatch(fetchByName(input))
      setInput('');
      setSearch(true); 
    };
  
    return (
      <div>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Busqueda..."
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
           <button type='submit'>Busqueda</button> 
        </form>
      </div>
    )
};

export default SearchBar;


