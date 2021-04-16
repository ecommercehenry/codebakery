import React from 'react';
import {Link} from 'react-router-dom'

//styles
import styled from 'styled-components';

//Components
import ButtonAddCart from './ButtonAddCart';

const ProductCard = ({id,name,image}) => {
    return (
        <StyledCard>
            <Link to={`/catalogue/detail/${id}`} className='link'>
                <div className="image">
                    <img src={image} alt={name}/>
                </div>
                <div className="name"><span>{name}</span></div>
            </Link>
            <div className="btn"><ButtonAddCart id={id}/></div>
        </StyledCard>
            
        
    )
}

const StyledCard = styled.div`
    //background:green;
    width:23vw;
    height:20rem;
    margin: 3rem 2rem;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    padding: 0 2rem;
    .link{
        width:100%;
        height:80%;
        text-decoration:none;
        color:inherit;
        .image{
        //background:yellow;
        width:100%;
        height:60%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        img{
            width:100%;
            height:100%;
            object-fit:cover;
        }
    }
    .name{
        width:100%;
        height:20%;
        display:flex;
        justify-content:center;
        align-items:center;
        background:lightblue;
        span{
            text-align:center;
        }
    }
    }
    
    .btn{
        background:green;
        //background:violet;
        height:20%;
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
    }
`;

export default ProductCard
