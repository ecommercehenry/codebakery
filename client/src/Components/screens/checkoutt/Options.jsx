import React,{useState} from 'react'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import ClientNavBar from './ClientNavBar';

const Options = () => {
    const [mp,setMp] = useState(false);
    const [stripe,setStripe] = useState(false);

    const mpHandler = () => {
        console.log('mp')
        setMp(true)
    }

    const stripeHandler = () => {
        setStripe(true)
    }

    return (
        <StyledOptions>
            <ClientNavBar/>
            <div className="options">
                <div className="mp" onClick={mpHandler}>
                    <img src="https://res.cloudinary.com/ggonzalescbs/image/upload/v1618977878/code_bakery/mercadopago_krspnc.jpg" alt="mercadopago"/>
                </div>
                <div className="stripe" onClick={stripeHandler}>
                    <img src="https://res.cloudinary.com/ggonzalescbs/image/upload/v1618977971/code_bakery/stripe_ioxcsn.png" alt="stripe"/>
                </div>
            </div>
            {
                mp ? <Redirect to='/'/> : "" 
            }
            {
                stripe ? <Redirect to='/checkout'/> : ""
            }
        </StyledOptions>
    )
}

const StyledOptions = styled.div`
    width: 100vw;
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items: center;
    //background:red;
    .options{
        width:23%;
        height:87vh;
        padding: 18vh 0;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items: center;
        //background:blue;
        .mp,.stripe{
            width:100%;
            border-radius: 7px;
            object-fit:contain;
            cursor:pointer;
            overflow:hidden;
            img{
                width:100%;
                height:23vh;
            }
        }
    }
`;

export default Options
