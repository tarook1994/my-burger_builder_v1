import React, {Component} from 'react'
import AUX from '../hoc/auxilary'
import Burger from '../components/Burger/Burger'
import BuildControls from '../components/Burger/BuildControls/BuildControls'


const INGREDIANTS_PRICIES = {
    salad : 0.3,
    bacon : 0.7,
    cheese: 0.5,
    meat : 1.5
}

class BurgerBuilder extends Component {
    state = {
        ingrediants  : {
            salad : 2,
            bacon : 0,
            cheese : 0,
            meat : 2
        },
        price: 4
    }

    addPrice = (oldPrice, type) => {
        let price = oldPrice;
        price = price + INGREDIANTS_PRICIES[type]
        return price;
    }

     removePrice = (oldPrice, type) => {
        let price = oldPrice;
        price = price - INGREDIANTS_PRICIES[type]
        return price;
    }
    ingrediantsControl= (type, isIncrease) => {

        this.setState((prevState,props)=> {
            let modifiedState = prevState.ingrediants
            let newPrice=null;
            if(isIncrease){
                modifiedState[type] = modifiedState[type]+1;
                 newPrice = this.addPrice(prevState.price,type)
            } else if(!isIncrease && modifiedState[type]>0){
                modifiedState[type] = modifiedState[type]-1;
                newPrice = this.removePrice(prevState.price,type)

            } else {
                newPrice = prevState.price;
            }

            return {
                ingrediants : modifiedState,
                price : newPrice
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