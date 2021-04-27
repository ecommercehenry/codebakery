import React from 'react'
import TablaByUser from '../admin/ordenes/TablaByUser';
import  { useParams } from "react-router-dom";


const UserOrders  = () => {
    let { id } = useParams(); 
    return (
        <div>
            <TablaByUser id={parseInt(id)}/>
        </div>
    )
}

export default UserOrders