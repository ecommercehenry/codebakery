import { useMutation, useQuery } from "@apollo/client";
import validateUser from "../../../Apollo/queries/validateUser";
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { saveToken } from "../../../actions/saveToken";
import CREATE_CATEGORY from "../../../Apollo/mutations/createCategory";
import loginReducer from "../../../reducer/loginReducer";
const Login = ()=>{
   
    const dispatch = useDispatch()
    let user = useQuery(validateUser, {variables: {name: "ivan", password: "helloworld"}},);
    
    const token = useSelector(state=> state.loginReducer.token)
    useEffect(()=>{
        if(!user.loading && user.data){
            localStorage.setItem('token', token);
            dispatch(saveToken(user.data.validateUser))
        }
        
    },[user.data,token])


    return (<button>Una query admin</button>)
}

export default Login