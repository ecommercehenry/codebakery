import React ,{ useState } from 'react'
import { useMutation, useQuery } from '@apollo/client';
import ADD_PROMO from "../../../../Apollo/mutations/addPromo";
import getAllCategories from "../../../../Apollo/queries/getAllCategories"
import Select from 'react-select';
import styled from "styled-components"
import closeIcon from "../../../../icons/close2.svg"

const FormPromo = ({ promo, setPromo }) => {

    const [addPromo] = useMutation(ADD_PROMO)
    const [category,setCategory] = useState('');
    const [day,setDay] = useState('');
    const [info, setInfo] = useState({
        name:'',
        discount:'',
        day:'',
        category:'',
    })

    const categories = useQuery(getAllCategories);

    let cat =  [];
    categories['data'] && categories['data']['getAllCategories'].map((elem) =>
        cat.push({label:elem.name,value:elem.name}))

    let days = [
        {label:"Monday",value:"Monday"},
        {label:"Tuesday",value:"Tuesday"},
        {label:"Wednesday",value:"Wednesday"},
        {label:"Thursday",value:"Thursday"},
        {label:"Friday",value:"Friday"},
        {label:"Saturday",value:"Saturday"},
        {label:"Sunday",value:"Sunday"},
    ];

    const categoryHandler = (option,value) => {                        
        switch (option) {
            case 'options':
                setCategory(value)
                break;
            default:
                console.log("Un error que no deberia salir, FormPromo.jsx 42")
        }
    }

    const dayHandler = (option,value) => {                        
        switch (option) {
            case 'options':
                setDay(value)
                break;
            default:
                console.log("ESTE ERROR NO DEBERIA SALIR FormPromo.jsx 52")
        }
    }

    const inputHandler = (e) => {
        return setInfo({...info,[e.target.name]:e.target.value})
    }

    const closeHandler = () => {
        
        setPromo(false)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        info.category=category.value
        info.day=day.value

        addPromo({variables: 
            {
                discount:Number(info.discount),
                category:info.category,
                day:info.day,
                name:info.name
            }
        }).then(res=>{
            setInfo({
                name:'',
                discount:'',
                day:'',
                category:'',
            })
            setCategory('')
            setDay('')
            setPromo(false)
        })

        
    }

    return (
        <StyledUpper>
            <StyledFormPromo onSubmit={submitHandler}>
                <button className="closeButtonn" onClick={closeHandler}>
                    <img src={closeIcon} alt="X"/>
                </button>

                <div className="item">
                    <label htmlFor="">Promo name</label>
                    <input 
                        name="name"
                        type="text" 
                        placeholder="Promo name" 
                        value={info.name} 
                        onChange={inputHandler}
                        className="inputt"
                    />
                </div>
                <div className="item">
                    <label htmlFor="">Discount</label>
                    <input 
                        name="discount"
                        type="number" 
                        min='1'
                        max='100'
                        placeholder="Discount" 
                        value={info.discount} 
                        onChange={inputHandler}
                        className="inputt"
                    />
                </div>
                <div className="item">
                    <label htmlFor="">Category</label>
                    
                    <Select 
                        options={cat}
                        onChange={value => categoryHandler('options',value)} 
                        value={category}
                        className="selectt"
                    />
                    
                </div>
                <div className="item">
                    <label htmlFor="">Day</label>
                    <Select 
                        options={days} 
                        className="selectt"
                        value={day}
                        onChange={value => dayHandler('options',value)} 
                    />
                    
                </div>
                <div className="item-button">
                    <button>Save Promo</button>
                </div>
            </StyledFormPromo>
        </StyledUpper>
    )
}

const StyledFormPromo = styled.form`
    width:35vw;
    height: 70vh;
    border-radius:65px;
    padding: 4.5rem 4rem 3rem 4rem;
    border:1px solid #f3dff3;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    background:white;
    position:relative;
    .closeButtonn{
        width:fit-content;
        position:absolute;
        top:2rem;
        right:3rem;
        border:none;
        background:transparent;
        img{
            width:1rem;
            height:1rem;
        }
    }
    .item{
        //background:green;
        width:100%;
        height:15%;
        margin-bottom:2.5%;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        label{
            width:100%;
            height:35%;
            //background:red;
        }
        .inputt{
            width:100%;
            height:60%;
            border:none;
            text-align:left;
            padding:0;
            margin:0;
            background:#E3DDE7;
            border: 1px solid #f4e3ff;
            border-radius: 13px;
            color:#353434;
        }
        .selectt{
            width:100%;
            height:2rem;
            margin:0;
            padding:0;
        }
    }
    .item-button{
        width:100%;
        height:15%;
        //background:blue;
        display:flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        button{
            width:55%;
            height:70%;
            border-radius:13px;
            background:#5E3F71;
            border:none;
            color:white;
        }
    }
`;

const StyledUpper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background:rgba(0, 0, 0, 0.664);
    z-index: 15;
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0; 
    left: 0;
    padding-left: 10vw;
`;

export default FormPromo
