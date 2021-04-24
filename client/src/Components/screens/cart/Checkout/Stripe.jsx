import React from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'
import {loadStripe} from '@stripe/stripe-js'
import {Elements, CardElement,useStripe,useElements} from '@stripe/react-stripe-js';
import styled from 'styled-components'
import {toast} from 'react-toastify'
import '../../../../Assets/toast.css'
const stripePromise = loadStripe('pk_test_51IikJvLv5RMhUlp35i74LPIzdy7M5Ei6esRBW9vI01qzArgdAhhBT452AQzT2E0ePUfYEmW3cb6ddVcx7Uyx7rv800bCIJ2c3z')
toast.configure()
const StripeForm = () => {
    //const {loggedCart} = useSelector(state=>state.loggedCart)
    const stripe = useStripe();
    const elements = useElements();
    let total =90
    //loggedCart.map(elem=>total=total+(elem.price*elem.quantity))
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
                const {data} = await axios.post('http://localhost:3001/stripe/checkout',
                {
                    id,
                    amount: total/0.9
                }
                )
                console.log(data)
                elements.getElement(CardElement).clear()
                if(data.message=="successful transaction"){toast('deja de gastar gil')}
            } catch (error) {
                console.log(error)
            }
        }
    }
    return (
        <StyledStripeForm onSubmit={submitHandler}>
            <div className="card"><CardElement/></div>
            <button disabled={!stripe ? true : false}>Pay</button>
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
    //background:blue;
    width:80%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const StyledStripeForm =styled.form`
    //background:red;
    margin:0;
    width:80%;
    height:7vh;
    display:flex;
    justify-content:space-between;
    flex-direction:column;
    align-items:center;
    .card{
        width:100%;
       // background:none;
    }
    button{
        width: 20%;
        background:#755588;
        border:none;
        border-radius:7px;
    }
`;

export default Stripe
