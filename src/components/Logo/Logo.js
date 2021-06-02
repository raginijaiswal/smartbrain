import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png'

const Logo = () =>{
    return(
        <div className= 'ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2 pa3" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner"> <img alt='logo' src={brain}></img> </div>
            </Tilt>
        </div>
    )
    
}

export default Logo;