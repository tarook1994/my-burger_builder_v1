import React, {Component} from 'react'
import AUX from '../hoc/auxilary'
import Burger from '../components/Burger/Burger'

class BurgerBuilder extends Component {

    render(){
        return (
            <AUX>
                <Burger/>
                <div>Build Controls</div>

            </AUX>


        )
    }

}

export default BurgerBuilder;