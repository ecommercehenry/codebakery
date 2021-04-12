import React, {useEffect} from 'react';
import './DetailStyles.css';
import {Link} from 'react-router-dom';
import getData from '../../../Apollo/queries/productById'
import { useQuery } from '@apollo/client';

const Detail = () => {
    useEffect(() => {
            window.scrollTo(0, 0)

            setTimeout(() => {
                document.body.style.overflow = "hidden"
            }, 1000);
        
        return () => {
            document.body.style.overflow = "visible"
        }
    }, [])

    const path = window.location.pathname
    const id = parseInt(((path.split("/")).pop()), 10)
    console.log(typeof id)

    const {data} = useQuery(getData, {variables: {id}}) // <------
    useEffect(() => {

    }, [data])
    

    console.log(data)

    return (
        <div className="detail-container">
            <Link to="/catalogue" className="close-btn">
                X
            </Link>
            <div className="detailCard">
            {data?.productById ? <><div className="imageSide">
                    {/*data && data.image && <img src={data.image} style={{maxWidth:"400px", width:"80%"}} alt=""/>*/}
                    <img src={data?.productById.image} style={{maxWidth:"100%", width:"80%", maxHeight:"100%"}} alt=""/>
                </div>
                <div className="dataSide d-flex position-relative">
                        <>
                        <span className="title">{data?.productById.name}</span>
                        <span className="price">${data?.productById.price}</span>
                        <span className="description">{data?.productById.description}</span>
                        <form className="all-btn d-flex flex-column position-absolute align-items-center">
                            <div className="up-btns d-flex justify-content-center">
                                <input type="number" id="quantity" name="quantity" className="select-quantity" min="1" max="5" placeholder="1"/>
                                {/* <input type="text" /> */}
                            </div>
                            
                            <div className="bottom-btns d-flex justify-content-center">
                                <button id="cart-btn" className="grey-btn">
                                    CL
                                </button>
                                <button className="purple-btn">Buy now</button>
                            </div>
                        </form>
                        </>
                        
                </div>
                </>
                : "loading..."}
            </div>
        </div>
    )
}

export default Detail
