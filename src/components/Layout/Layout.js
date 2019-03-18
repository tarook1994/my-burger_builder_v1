import React from 'react'
import AUX from '../../hoc/auxilary'
import classes from './Layout.css'

const layout = (props) => {

    return (

        <AUX>

            <div>
            Toolbar, Sidedrawer, Backdrop
            </div>

            <main className={classes.content}>
                {props.children}
            </main>

        </AUX>
    )



}


export default layout;