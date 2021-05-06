import { useMutation } from "@apollo/client";
import React, { useState } from "react"
import SEND_NEWSLETTER from "../../../../Apollo/mutations/sendNewsletter";
import styled from 'styled-components';



export default function NewsletterAdmin(){

    const [sendNews] = useMutation(SEND_NEWSLETTER, {});
    const [preview,setPreview] = useState('');
    const [info, setInfo] = useState({
        description:'',
        image:''
    })

    const inputHandler = (e) => {
        return setInfo({...info,[e.target.name]:e.target.value})
    }

    const imageHandler = (e) => {
        const image = e.target.files[0];
        console.log(image, 'image');
        previewImage(image);
    }
    
    const previewImage = (image) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(image);
        fileReader.onloadend = () => {
            setPreview(fileReader.result);
            setInfo({...info,image:fileReader.result});
        }   
    }

    // let messajeExport =`<html><span>Hi ${info.description}</span> <br>
    // <img src=${info.image}/>
    // </html>`

    
    function handlerOnClick (e){
        //console.log(info, 'info');
        e.preventDefault();
      // console.log(messajeExport, 'info image');
        sendNews({
            variables: {
              message: info.description,
              image:info.image
              
            },
          })
         
         alert("Newsletter Enviado!") 

    }
    return(
      <StyledNewsletter onSubmit={handlerOnClick}>
        
           <div className="imageLoaderr">
                <div className="previeww">
                    {
                        preview && <img src={preview} alt=""/>
                    }
                </div>
                <div className="fakeButtonn">
                    <input 
                        type="file"
                        accept=".jpg,.png"
                        name="image-product" 
                        id="image-product"
                        onChange={imageHandler}
                    />
                </div>
            </div>
            <div className="col-25">
                    <label><h5>Description</h5></label>
                    <textarea 
                        name="description"
                        type="text" 
                        placeholder="add a description..." 
                        value={info.description} 
                        onChange={inputHandler}
                    />
                </div>
            <div className="submitt">
            <button type="submit">Send the newsletter to all subscriptors</button>
            </div>
            
      
      </StyledNewsletter>
    )
}

const StyledNewsletter = styled.form` 
width:60%;
//height: 30vh;

border-radius:65px;
padding: 3rem 4rem;
border:2px solid #f3dff3;
position: relative;
background:white;
border-color:#755588;

input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

label {
  color:#755588;
}

.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}


.imageLoaderr{
  width:100%;
  height:30%;
  //background:red;
  display:flex;
  justify-content:space-between;
  align-items:center;
  
  .fakeButtonn{
      //background:green;
      width:40%;
      display:flex;
      justify-content:flex-end;
      margin-right:15px;
      align-items:center;
      input{
          width:100%;
          
      }
  }
}
.previeww{
  height:60%;
  background: #E3DDE7;
  //background: purple;
  width:40%;
  border-radius:28px;
  overflow:hidden;
  //display : flex;
  img{
      width:100%;
      height:100%;
      object-fit:fill;
  }
}
.submitt{
 // width: 20%;

  height:auto;
  display:flex;
  justify-content: center;
  align-items: center;
  //background:red;
  button{
      background:#5E3F71;
      color:white;
     
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
`;