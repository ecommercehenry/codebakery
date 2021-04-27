import React from 'react'
import TablaReview from '../reviews/TablaReview'; 
import  { useParams } from "react-router-dom";


const UserReview  = (props) => {
console.log(props, 'props user review')
    let { id } = useParams(); 
    return (
        <div>
            <TablaReview  id={parseInt(id)}/>
        </div>
    )
}

export default UserReview