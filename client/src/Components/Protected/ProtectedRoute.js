
import { useQuery } from '@apollo/client';
import React from 'react'
import { Redirect } from 'react-router-dom';
import VALIDATE_CREDENTIALS from '../../Apollo/queries/validateCredentials';

let token = localStorage.getItem('token');
let role = localStorage.getItem('role');


function ProtectedRoute(props){
    const data = useQuery(VALIDATE_CREDENTIALS, {variables: {token, role}});
    const Component = props.component;
    console.log(data?.data?.validateCredentials);
    const isAuthenticated = data?.data?.validateCredentials;
    
    return isAuthenticated ? (
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