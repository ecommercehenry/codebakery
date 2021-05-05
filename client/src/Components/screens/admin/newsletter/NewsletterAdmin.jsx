import { useMutation } from "@apollo/client";
import React, { useState } from "react"
import styled from "styled-components";
import SEND_NEWSLETTER from "../../../../Apollo/mutations/sendNewsletter";


export default function NewsletterAdmin(){

    const [sendNews, loading, error] = useMutation(SEND_NEWSLETTER, {});
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
        console.log(info, 'info');
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

        <form onSubmit={handlerOnClick} >
           <div className="descriptionn">
                    <label>Description</label>
                    <textarea 
                        name="description"
                        type="text" 
                        placeholder="add a description..." 
                        value={info.description} 
                        onChange={inputHandler}
                    />
                </div>
           <div className="imageLoaderr">
                <div className="previeww">
                    {
                        preview && <img src={preview} alt="image-preview"/>
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
            <div  >
            <button type="submit">Enviar Newsletter a todos los subscriptos</button>
            </div>
               
           
            {/* <button
                onClick={handlerOnClick}
            >Enviar Newsletter a todos los subscriptos</button> */}
        </form>
    )
}

const StyledNewsletter = styled.div`

color:black;
display:flex;
flex-direction:column;
align-items:flex-start;
width:100%;
margin-top: 0.5rem;
height: 100%;

button{
    border: none;
    color: beige;
    border-radius: 15px;
    padding: 1px;
    margin-left: 6px;
    height: fit-content;
    background-color: rgb(126, 96, 155);
    border: none;
    padding: 6px;
}

`;