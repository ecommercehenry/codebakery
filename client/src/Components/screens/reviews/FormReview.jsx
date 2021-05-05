import React, { useState} from "react";
import styled from 'styled-components'; 
import { useMutation } from "@apollo/client";
import {Link} from 'react-router-dom'
import  ADD_REVIEW  from "../../../Apollo/mutations/addReview"; 
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { toast } from "react-toastify";
import  { useParams } from "react-router-dom";
import closeIcon from "../../../icons/close2.svg"; 


const FormReview = () => {

  let index = useParams(); 
   parseInt(index);

  const [value, setValue] = useState(1);
  const [addReview, { data }] = useMutation(ADD_REVIEW, {
    errorPolicy: 'all'
  });
   const [input, setInput] = useState({
    title: '',
    description: '',
    stars: ''
  }); 
 let  userId = localStorage.id
 let response;
 
if(data){
  if(data.addReview){
    response = data.addReview.name;
  }
}

  const inputHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    await addReview({
      variables: {
        productId: parseInt(index.id), 
        userId: parseInt(userId),
        dataReview:{
        title: input.title, 
        description: input.description, 
        stars: value === null ? "1" : value.toString()  
        }
      }
    })
    toast(response)
    window.history.back()
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.664)",
        zIndex: 5,
        position: "fixed",
        height: "100vh",
        width: "100vw",
        top: "0",
        left: "0",
        paddingLeft: "10vw",
      }}
    >
     
      <StyledForm  onSubmit={submitHandler}>
      <Link to={`/user/${userId}/profile`}  className="closeee"><img src={closeIcon} width="30px" display="flex" alt="closeIcon"/></Link>
        <div className="infoProductt">
          <div className="namee">
            <label>Title</label>
            <input
              name="title"
              type="text"
              placeholder="Commentary"
              value={input.title}
              onChange={inputHandler}
            />
          </div>
          <div className="descriptionn">
            <label>Commentary</label>
            <textarea
              name="description"
              type="text"
              placeholder="add a description..."
              value={input.description}
              onChange={inputHandler}
            />
            <Typography component="legend">Rating</Typography>
          </div>
          <Box
            className="ratingg"
            component="fieldset"
            mb={3}
            borderColor="transparent"
          >
            <div className="rantiing">
              <Rating
                name="size-large"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
          </Box>
          <div className="submitt">
            <button type="submit">Save</button>
          </div>
        </div>
      </StyledForm>
    </div>
  );
};
const StyledForm = styled.form`
width:35%;
height: 80vh;
background: white;
border-radius:65px;
padding: 3rem 4rem;
border:1px solid #f3dff3;
position: relative;

.closeee{
  display: flex;
  justify-content: flex-end;

}

.infoProductt{
    //background:blue;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    .namee{
        //background:green;
        height:20%;
        display:flex;
        flex-direction:column;
        justify-content:center;
    }
    .descriptionn{
        //background:green;
        height:20%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        textarea{
          width:100%;
          margin-top:0.5rem;
          padding: 0 1rem;
          //height:3rem;
          border-radius:23px;
          border:1px solid #dad7dc;
          background:#E3DDE7;
      }
    }
    input{
        width:100%;
        margin-top:0.8rem;
        padding: 0 1rem;
        height:3rem;
        border-radius:23px;
        border:1px solid #dad7dc;
        background:#E3DDE7;
      }
    .ratiing{
      padding: 3rem 4rem;
      display:flex;
      justify-content: center;
      align-items: center;
    }
    .ratingg{
      padding: 3rem 4rem;
      display:flex;
      justify-content: center;
      align-items: center;
    }
    .submitt{
        height:10%;
        display:flex;
        justify-content: center;
        align-items: center;
        //background:red;
        button{
            background:#5E3F71;
            color:white;
            width: 23%;
            height:3rem;
            font-size:1.5rem;
            display:flex;
            align-items: center;
            justify-content:center;
            border-radius:20px;
            padding: 0 2.3rem;
            border:none;
            cursor:pointer;
        }
    }
}
`;

export default FormReview