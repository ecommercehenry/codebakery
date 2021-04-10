import React from 'react';
import {useState} from 'react';
import Select from 'react-select';

//styles
import styled from 'styled-components';

const AddProductForm = () => {

    const[preview,setPreview] = useState('');
    const [info, setInfo] = useState({
        name:'',
        categories:[],
        stock:'',
        price:'',
        image:''
    })

    const inputHandler = (e) => {
        return setInfo({...info,[e.target.name]:[e.target.value]})
    }

    const imageHandler = (e) => {
        const image = e.target.files[0];
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

    const categoryHandler = () => {

    }

    //apollo magic!!!!
    const categories = []; //here categories!
    
    const submitHandler = (e) => {
        e.preventDefault();
        if(info.image == ''){alert('Please add an image')};
        //mutation receive info that contains all the fields
    }

    return (
        <StyledForm onSubmit={submitHandler}>
            <div className="imageLoader">
                <div className="preview">
                    {
                        preview && <img src={preview} alt="image-preview"/>
                    }
                </div>
                <div className="fakeButton">
                    <input 
                        type="file"
                        accept=".jpg,.png"
                        name="image-product" 
                        id="image-product"
                        onChange={imageHandler}
                    />
                </div>
            </div>
            <div className="infoProduct">
                <div className="name">
                    <label>Name</label>
                    <input 
                        name="name"
                        type="text" 
                        placeholder="Name" 
                        value={info.name} 
                        onChange={inputHandler}
                    />
                </div>
                <div className="categories">
                    <label>Categories</label>
                    <input 
                        type="text" 
                        // value={info.}  
                        onChange={categoryHandler} //how to!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                    />
                </div>
                <div className="numeric">
                    <div className="stock">
                        <label htmlFor="">Stock</label>
                            <input 
                            name="stock"
                            type="number" 
                            placeholder="Stock" 
                            value={info.stock} 
                            onChange={inputHandler}
                        />
                    </div>
                    <div className="price">
                        <label htmlFor="">Price</label>
                        <input 
                            name="price"
                            type="number" 
                            placeholder="Price" 
                            value={info.price} 
                            onChange={inputHandler}
                        />
                    </div>
                </div>
            </div>
            <div className="submit" >
                <button type="submit">SAVE CHANGES</button>
            </div>
        </StyledForm>
    )
}

const StyledForm = styled.form`
    width:35%;
    height: 80vh;
    background: white;
    border-radius:65px;
    padding: 4rem 4rem;
    .imageLoader{
        width:100%;
        height:35%;
        //background:red;
        display:flex;
        justify-content:space-between;
        align-items:center;
        .preview{
            height:100%;
            background: #E3DDE7;
            width:55%;
            border-radius:28px;
            overflow:hidden;
            img{
                width:100%;
                height:100%;
                object-fit:fill;
            }
        }
        .fakeButton{
            //background:red;
            width:60%;
            display:flex;
            justify-content:flex-end;
            align-items:center;
            input{
                width:46%;
            }
        }
    }
    .infoProduct{
        //background:red;
        height:50%;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        .name{
            //background:green;
            height:33%;
            display:flex;
            flex-direction:column;
            justify-content:center;
        }
        .categories{
            //background:yellow;
            height:33%;
            display:flex;
            flex-direction:column;
            justify-content:center;
            /* input{
                height:3rem;
                border-radius:23px;
                border:1px solid #e2dae9;
                background:#EBE7EE;
            } */
        }
        .numeric{
            //background:blue;
            width:100%;
            height:33%;
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            align-items:center;
            .stock{
                width:45%;
                height: 100%;
                //background:yellow;
                display:flex;
                flex-direction:column;
                justify-content:center;
            }
            .price{
                width:45%;
                //background:green;
                height: 100%;
                display:flex;
                flex-direction:column;
                justify-content:center;
            }
        }
        input{
            width:100%;
            margin-top:0.5rem;
            padding: 0 1rem;
            height:3rem;
            border-radius:23px;
            border:1px solid #dad7dc;
            background:#E3DDE7;
        }
        label{
            color:#6A4D7B;
            width:100%;
        }
        }
    .submit{
        height:15%;
        display:flex;
        justify-content: center;
        align-items: center;
        //background:red;
        button{
            background:#5E3F71;
            color:white;
            //width: 23%;
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

export default AddProductForm;