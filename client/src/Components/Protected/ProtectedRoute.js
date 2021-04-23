
import { useLazyQuery, useQuery } from '@apollo/client';
import React, { useEffect } from 'react'
import { Redirect, Route } from 'react-router-dom';
import VALIDATE_CREDENTIALS from '../../Apollo/queries/validateCredentials';

let token = localStorage.getItem('token');
let role = localStorage.getItem('role');

// Route
// useLazyQuery
function ProtectedRoute (props) {
    const [validateUser, {data, loading} ]= useLazyQuery(VALIDATE_CREDENTIALS);
    useEffect(()=>{
        validateUser({variables: {token:token, role:role}})
        
    },[data])
    
    const Component = props.component;
    
    const isAuthenticated = data?.data?.validateCredentials;
    // 
    // return (
    //     <Route path = {props.path} render={data => isAuthenticated? (<props.component {...data}></props.component>):
    //     (<Redirect to={{ pathname: '/log-in' }} />)
    // }></Route>
    // )
    return isAuthenticated ? (
        // <Route ></Route>
        <Component />
    ) : (
        <Redirect to={{ pathname: '/log-in' }} />
    );
}
// class ProtectedRoute extends React.Component {

//     render() {
//         const Component = this.props.component;
//         const isAuthenticated = ???;
       
//         return isAuthenticated ? (
//             <Component />
//         ) : (
//             <Redirect to={{ pathname: '/login' }} />
//         );
//     }
// }

export default ProtectedRoute;