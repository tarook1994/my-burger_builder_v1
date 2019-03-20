import React from 'react';
import BuildControl from './BuildControl/BuildControl'
import classes from './buildControls.css'

const buildControls = (props) => {
    const controls = [
        { label: 'Salad', type: 'salad' },
        { label: 'Meat', type: 'meat' },
        { label: 'Cheese', type: 'cheese' },
        { label: 'Bacon', type: 'bacon' }
    ]


    return (

        <div className={classes.BuildControls}>
            {
                controls.map((control, index) => {
                return <BuildControl
                    key = {control.label}
                    label={control.label}
                    type={control.type} />
            })
            }
        </div>
    )


}

export default buildControls;