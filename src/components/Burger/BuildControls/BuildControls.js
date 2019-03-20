import React from 'react';
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.css'

const buildControls = (props) => {
    const controls = [
        { label: 'Salad', type: 'salad' },
        { label: 'Meat', type: 'meat' },
        { label: 'Cheese', type: 'cheese' },
        { label: 'Bacon', type: 'bacon' }
    ]


    return (

        <div className={classes.BuildControl}>

        <div>Current Price is : {props.price.toFixed(2)}$</div>
            {
                controls.map((control, index) => {
                    return <BuildControl
                        controlMethod={props.controlMethod}
                        key={control.label}
                        label={control.label}
                        type={control.type} />
                })
            }

            <button 
            className = {classes.OrderButton}
            onClick={props.orderClick}>ORDER NOW</button>
        </div>
    )


}

export default buildControls;