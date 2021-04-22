import React, { useState} from "react";
import styled from 'styled-components'; 
import { useMutation } from "@apollo/client";
import  ADD_REVIEW  from "../../../Apollo/mutations/addReview"; 
import {  useSelector } from "react-redux";


const Review = () => {

const [addReview, { data, loading, error }] = useMutation(ADD_REVIEW);
let { reviews } = useSelector((state) => state.reviewsReducer);

    const [ input, setInput] = useState({
        title: reviews.title, 
        description: reviews.description, 
        start: reviews.start
    })

const inputHandler = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    } 
    const submitHandler = (e) => {
        e.preventDefault();
        addReview({
          variables: {
            data: {
              title: input.title,
              description: input.description,
              start: input.start
            },
          },
        });
      }
    return(
        <StyledReview onSubmit={submitHandler}>
        <h3>Opiniones del producto</h3>
    
        <div className="info-container">

          <div className="F-name-container">
            <label>Title</label>
            <input value={input.title} name="name" onChange={inputHandler} />
          </div>
          <div className="F-name-container">
            <label>Description</label>
            <input value={input.description} name="description" onChange={inputHandler} />
          </div>
          <div className="F-price-container">
            <label>Start</label>
            <input
              value={input.start}
              name="start"
              type="number"
              onChange={inputHandler}
            />
          </div>
          <button type="submit">Save</button>
        </div>
        </StyledReview>
    )
}
 export default Review

 const StyledReview = styled.div`
 background: #ffcccc;
 height: 80%;
 width: 90%;
 display: flex;
 align-items: flex-start;
 `