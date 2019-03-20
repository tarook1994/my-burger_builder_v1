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

    ingrediantsControl= (type, isIncrease) => {

        this.setState((prevState,props)=> {
            let modifiedState = prevState.ingrediants
            if(isIncrease){
                modifiedState[type] = modifiedState[type]+1;
            } else if(!isIncrease && modifiedState[type]>0){
                modifiedState[type] = modifiedState[type]-1;
            }

            return {
                ingrediants : modifiedState
            }
        })
    }

    render(){
        return (
            <AUX>
                <Burger ingrediants = {this.state.ingrediants}/>
                <BuildControls controlMethod={this.ingrediantsControl}/>
            </AUX>


        )
    }

}

export default BurgerBuilder;