import React, {Component} from 'react'
import AUX from '../hoc/auxilary'
import Burger from '../components/Burger/Burger'

class BurgerBuilder extends Component {
    state = {
        ingrediants  : {
            salad : 0,
            bacon : 0,
            cheese : 0,
            meat : 0
        }
    }

    render(){
        return (
            <AUX>
                <Burger ingrediants = {this.state.ingrediants}/>
                <div>Build Controls</div>

            </AUX>


        )
    }

}

export default BurgerBuilder;