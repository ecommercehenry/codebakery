import React from 'react'
import NavBar from '../navBar/NavBar';
import './Landing.css';

const Landing = () => {

    return (
        <>
        <NavBar color='black'/>
        <div className="landing-content">
            <img src={"./landing-big-photo.png"}/>
        </div>
        </>
    )
}

export default Landing;
