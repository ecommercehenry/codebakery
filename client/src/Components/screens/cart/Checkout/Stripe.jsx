import React,{useState} from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import {loadStripe} from '@stripe/stripe-js'
import {Elements, CardElement,useStripe,useElements} from '@stripe/react-stripe-js';
import styled from 'styled-components'
import { useQuery } from "@apollo/client";
import GET_ORDERS_BY_USER_ID_IN_CART from "../../../../Apollo/queries/getOrdersByUserIdInCart";
import {toast} from 'react-toastify'
import '../../../../Assets/toast.css'
import { getCurrentDomainApi } from '../../../../config/currentDomain';
const stripePromise = loadStripe('pk_test_51IikJvLv5RMhUlp35i74LPIzdy7M5Ei6esRBW9vI01qzArgdAhhBT452AQzT2E0ePUfYEmW3cb6ddVcx7Uyx7rv800bCIJ2c3z')
toast.configure()

const StripeForm = () => {
    let userId = parseInt(localStorage.id);
    const res = useQuery(GET_ORDERS_BY_USER_ID_IN_CART, {
        variables: { idUser: userId },
        fetchPolicy: "no-cache",
    });

    const [success,setSuccess] = useState(false)
    const stripe = useStripe();
    const elements = useElements();
    let total = 0;

    if(res && res.data && res.data.getOrdersByUserIdInCart.orders[0]){
        res.data.getOrdersByUserIdInCart.orders[0].lineal_order.map((elem) => (
            total = total + (elem.price - (elem.price*elem.discount)/100)*elem.quantity
        ))
    }
    
    
    const submitHandler = async (e) => {
        e.preventDefault();
        const{error,paymentMethod} = await stripe.createPaymentMethod(
            {
                type: 'card',
                card: elements.getElement(CardElement)
            }
        )
        if(!error){
            const {id} = paymentMethod;
            try {
                const {data} = await axios.post(`${getCurrentDomainApi()}/stripe/checkout`,
                {
                    id,
                    amount: Math.round(total)*100,
                    products:res?.data?.getOrdersByUserIdInCart?.orders[0]
                }
                )
                elements.getElement(CardElement).clear()
                if(data.message==="successfull transaction"){
                    toast(data.message)
                    setSuccess(true)
                }else{
                    toast(data.message)
                }
                
            } catch (error) {
                console.log(error)
            }
        }
    }
    return (
        <StyledStripeForm onSubmit={submitHandler}>
            <div className="card"><CardElement/></div>
            <button disabled={!stripe ? true : false}>Buy those yummy products</button>
            {success?<Redirect to="/catalogue/"/>:""}
        </StyledStripeForm>
    )
}
const Stripe = () => {
    return (
        <StyledStripe>
            <Elements stripe={stripePromise}>
                <StripeForm/>
            </Elements>
        </StyledStripe>
    )
}

const StyledStripe = styled.div`
    //background:green;
    width:100%;
    height:17vh;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const StyledStripeForm =styled.form`
    //background:red;
    margin:0;
    width:100%;
    height:7vh;
    display:flex;
    justify-content:space-between;
    flex-direction:column;
    align-items:center;
    .card{
        width:90%;
    }
    button{
        width: fit-content;
        background:#755588;
        border:none;
        border-radius:7px;
        display: flex;
        align-items: center;
        justify-content:center;
        color:white;
        text-align: center;
        padding:0.5rem 1.5rem;
        margin-top:1rem;
    }
`;

export default Stripe
