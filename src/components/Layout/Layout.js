import React from 'react'
import AUX from '../../hoc/auxilary'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const layout = (props) => {

    return (

        <AUX>

            <Toolbar/>
            <SideDrawer/>

            <main className={classes.content}>
                {props.children}
            </main>

        </AUX>
    )



}


export default layout;