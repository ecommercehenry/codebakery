import React, { useState } from 'react'
import NavBar from '../navBar/NavBar';
import bigPhoto from './landing-big-photo.png';
import styled from 'styled-components';
import bread1 from './bread1.png';
import bread2 from './bread2.png';
import { Redirect } from 'react-router-dom'
import {motion} from 'framer-motion';
import {pageAnimation} from '../../PageAnimation'
import NavBarMobile from '../navBar/NavBarMobile';
import mobilePhoto from './Frame3.png'

const Landing = () => {
    const [redirect, setRedirect] = useState(false)

    return (
        <>

            <NavBar color='black'/>
            <NavBarMobile color='white'/>

            <StyledLanding variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
                <div className="background-photo">
                    <img src={bread1} alt="" id="bread1" />
                    <img src={bread2} alt="" id="bread2" />
                    <div id="title-btn-wrapper">
                        <span className="landing-title">
                            Find your
                    <br />
                    delight
                </span>
                        <button className="go-shop-btn purple-btn" onClick={() => setRedirect(true)}>
                            Start shopping
                </button>
                        {redirect && <Redirect push to="/catalogue" />}
                    </div>
                </div>
            </StyledLanding>
        </>
    )
}

export default Landing;

const StyledLanding = styled(motion.div)`
position: absolute;
height: 100vh;
width: 100vw;
z-index: 1;
background:#FFF1DE;
top: 0;

.background-photo{
    background-image: url(${bigPhoto});
    background-size: contain;
    height: 100vh;
    min-width: 100vw;
    background-position: bottom right;
    background-repeat: no-repeat;
}
#bigPhoto{
    height: 100vh;
    width: 100vw;
}
.landing-title{
    position: relative;
    font-size: 7rem;
    text-align: right;
    font-weight: bold;
    color: #3A3A3A;
    line-height: 1.2em;
}
#bread1{
    position: absolute;
    left: 2em;
    bottom: 1em;
    height: 20rem;
    width: auto;
}
#bread2{
    position: absolute;
    top: -5%;
    right: 15vw;
    height: 40vh;
    width: auto;
}
#title-btn-wrapper{
    position: absolute;
    top: 25vh;
    left: 15vw;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: fit-content;
    width: fit-content;

    .go-shop-btn{
        margin-top: 1em; 
    }

}

.purple-btn{
    display: block;
    height:  4.5vh;
    width: fit-content!important;
    border-radius: 40px;
    border: none;
    background-color: #5E3F71;
    text-decoration: none !important;
    color: white;
    font-weight: bold;
    font-size: 1em;
    padding-bottom: 0.5%;
    padding: 0 1.5vw 0 1.5vw;
    transition: background-color 0.2s ease;
  }
  
  .purple-btn:hover{
    background-color: #532c6b
  }


@media(max-width: 1024px){
    #title-btn-wrapper{
        position: fixed!important;
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;
        top: 0!important;
        left: 0!important;
        
    }

    .landing-title{
        font-size: 6rem;
        text-align: center;
    }
    
}

@media(max-width: 850px){
    #bread1{
        display:static;
        height: 17rem;
    }

    #bread2{
        display:none!important;
    }

    #title-btn-wrapper{
        padding-bottom: 8rem!important;
    }

    .go-shop-btn{
        width: 18rem!important;
        height: 3rem;

        margin-top: 1.3em;
        font-size: 1.3em;
    }
    
    .landing-title{
        font-size: 5rem;
        text-align: center;
    }
}

@media(max-width: 600px){
    #bread1{
        height: 15rem;
    }

    #title-btn-wrapper{
        padding-bottom: 8rem!important;
    }

    .go-shop-btn{
        width: 20rem!important;
        height: 3rem;

        margin-top: 1.3em;
        font-size: 1.3em;
    }
    
}

@media(max-width: 480px){
    #bread1{
        display:none
    }

    .background-photo{
        background-image: url(${mobilePhoto});
        background-position-x: center;
        background-position-y: bottom;
    }

    .go-shop-btn{
        margin-top: 2em!important;
    }
    
    #title-btn-wrapper{
        padding-bottom: 8rem!important;
        top: -1em!important;
    }

    .landing-title{
        font-size: 4.5rem;
        text-align: center;
    }
}

@media(max-width: 325px){
    .landing-title{
        font-size: 3.8rem;
        text-align: center;
    }

    .go-shop-btn{
        width: 18rem!important;
        font-size: 1.2em;
    }
}


`
