import React, {Component} from 'react'
import AUX from '../hoc/auxilary'
import Burger from '../components/Burger/Burger'
import BuildControls from '../components/Burger/BuildControls/BuildControls'

class BurgerBuilder extends Component {
    state = {
        ingrediants  : {
            salad : 2,
            bacon : 0,
            cheese : 0,
            meat : 2
        }
    }

    render(){
        return (
            <AUX>
                <Burger ingrediants = {this.state.ingrediants}/>
                <BuildControls></BuildControls>

            </AUX>


        )
    }

}

export default BurgerBuilder;