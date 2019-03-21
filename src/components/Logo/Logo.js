import React from 'react';
import Image from '../../assets/Images/burger-logo.png'
import classes from './Logo.css'



const logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img src={Image } alt={"My Image"}></img>
    </div >
    ) 
    
}

export default logo;