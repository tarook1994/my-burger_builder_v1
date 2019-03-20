import React from 'react'
import classes from './Modal.css'
import AUX from '../../../hoc/auxilary'
import BackDrop from '../BackDrop/BackDrop'

const modal = (props) => {
    return (

        <AUX>
            <BackDrop show = {props.show} 
            clicked = {props.modalClosed}/>
            <div
                className={classes.Modal}
                style={
                    {
                        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: props.show ? '1' : '0'
                    }
                }>{props.children}</div>
        </AUX>

    )
}

export default modal;