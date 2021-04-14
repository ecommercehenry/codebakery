import React,{ useState,useEffect } from 'react';
import Select from 'react-select';
import { useMutation, useQuery } from '@apollo/client';
import getAllCategories from "../Apollo/queries/getAllCategories"
import ADD_PRODUCT from "../Apollo/mutations/addProduct";
import Creatable from 'react-select/creatable';
import {Link, Redirect} from 'react-router-dom'
//styles
import styled from 'styled-components';

import closeIcon from '../icons/close2.svg'

const AddProductForm = ({setAddProduct}) => {

    const categories = useQuery(getAllCategories);
    const [addProduct, { data }] = useMutation(ADD_PRODUCT)
    useEffect(() => {
    },[data]);

    const [category,setCategory] = useState('');
    let [selected,setSelected] = useState('');
    const [preview,setPreview] = useState('');
    const [info, setInfo] = useState({
        name:'',
        description:'',
        category:[],
        stock:'',
        price:'',
        image:''
    })

    const closeHandler = () => {
        setAddProduct(false)
    }

    const inputHandler = (e) => {
        return setInfo({...info,[e.target.name]:e.target.value})
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

    const categoryHandler = (option,value) => {                        
        switch (option) {
            case 'options':
                setCategory(value)
        }
        setSelected([...value])
    }

    category && (selected = selected.map(elem=>elem.value));
    selected = selected.toString();
    let options =  [];
    categories['data'] && categories['data']['getAllCategories'].map(elem=> options.push({label:elem.name,value:elem.name}))                 

    const submitHandler = (e) => {
        
        e.preventDefault();
        if(info.image == ''){alert('Please add an image')}else{
            info.category=selected;
            addProduct({variables:
                {
                    name:info.name,
                    description:info.description,
                    stock:Number(info.stock),
                    price:Number(info.price),
                    category:selected,
                    image:info.image
                }
            })
            setInfo({
                name:'',
                description:'',
                category:[],
                stock:'',
                price:'',
                image:''
            })
            alert("Producto agregado!")
            
        }
        
    }

    useEffect(() => {

        setTimeout(() => {
            document.body.style.overflow = "hidden"
        }, 1000);
    
    return () => {
        document.body.style.overflow = "visible"
    }
}, [])

    console.log(selected)
    return (
        
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.664)', zIndex: 5, position: 'fixed', height: '100vh', width: '100vw', top: '0', left: '0', paddingLeft: '10vw'}}>
        <StyledForm onSubmit={submitHandler}>
            {/* <div className="close" onClick={closeHandler}><img src={closeIcon} alt="closeIcon"/></div> */}
            <Link to="/admin" className="close"><img src={closeIcon} alt="closeIcon"/></Link>
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
            <div className="infoProductt">
                <div className="namee">
                    <label>Name</label>
                    <input 
                        name="name"
                        type="text" 
                        placeholder="Name" 
                        value={info.name} 
                        onChange={inputHandler}
                    />
                </div>
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
                <div className="numericc">
                    <div className="stockk">
                        <label htmlFor="">Stock</label>
                            <input 
                            name="stock"
                            type="number" 
                            placeholder="Stock" 
                            value={info.stock} 
                            onChange={inputHandler}
                        />
                    </div>
                    <div className="pricee">
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
                <div className="categoriess">
                    <label>Categories</label>
                    <Creatable
                        onChange={value => categoryHandler('options',value)} 
                        options={options}
                        value={category}
                        className="inputs"
                        isMulti
                    />
                </div>
            </div>
            <div className="submitt" >
                <button type="submit">SAVE CHANGES</button>
            </div>
        </StyledForm>
        </div>
    )
}

const StyledForm = styled.form`
    width:35%;
    height: 80vh;
    background: white;
    border-radius:65px;
    padding: 3rem 4rem;
    border:1px solid #f3dff3;
    position: relative;
    .close{
        position:absolute;
        top:2.5rem;
        right:2.5rem;
        cursor:pointer;
        img{
            width:1rem;
            height:1rem;
        }
    }
    .imageLoaderr{
        width:100%;
        height:30%;
        //background:red;
        display:flex;
        justify-content:space-between;
        align-items:center;
        .previeww{
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
        .fakeButtonn{
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
    .infoProductt{
        //background:blue;
        height:60%;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        .namee{
            //background:green;
            height:28%;
            display:flex;
            flex-direction:column;
            justify-content:center;
        }
        .descriptionn{
            //background:lightblue;
            height:37%;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
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
        .categoriess{
            //background:yellow;
            height:30%;
            display:flex;
            flex-direction:column;
            justify-content:center;
            /* .inputs{
                height:1rem;
                border-radius:23px;
                border:1px solid #e2dae9;
                background:#EBE7EE;
            } */
        }
        .numericc{
            //background:red;
            width:100%;
            height:28%;
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            align-items:center;
            .stockk{
                width:45%;
                height: 100%;
                //background:yellow;
                display:flex;
                flex-direction:column;
                justify-content:center;
            }
            .pricee{
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
    .submitt{
        height:10%;
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