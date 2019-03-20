import React, { Component } from 'react'
import AUX from '../hoc/auxilary'
import Burger from '../components/Burger/Burger'
import BuildControls from '../components/Burger/BuildControls/BuildControls'
import Modal from '..//components/UI/Modal/Modal'
import OrderSummary from '../components/Burger/OrderSummary/OrderSummary'


const INGREDIANTS_PRICIES = {
    salad: 0.3,
    bacon: 0.7,
    cheese: 0.5,
    meat: 1.5
}

class BurgerBuilder extends Component {
    state = {
        ingrediants: {
            salad: 2,
            bacon: 0,
            cheese: 0,
            meat: 2
        },
        price: 4,
        orderNowClicked : false
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
    ingrediantsControl = (type, isIncrease) => {

        this.setState((prevState, props) => {
            let modifiedState = {...prevState.ingrediants}
            let newPrice = null;
            if (isIncrease) {
                modifiedState[type] = modifiedState[type] + 1;
                newPrice = this.addPrice(prevState.price, type)
            } else if (!isIncrease && modifiedState[type] > 0) {
                modifiedState[type] = modifiedState[type] - 1;
                newPrice = this.removePrice(prevState.price, type)

            } else {
                newPrice = prevState.price;
            }

            return {
                ingrediants: modifiedState,
                price: newPrice
            }
        })
    }

    purchaseHander  = () => {
        this.setState({
            orderNowClicked :true
        })
    }

    closeModal = () => {
        this.setState({
            orderNowClicked :false
        })
    }

    render() {
        return (
            <AUX>
                <Burger ingrediants={this.state.ingrediants} />
                <Modal show={this.state.orderNowClicked}
                modalClosed={this.closeModal}>
                    <OrderSummary ingrediantSummary={this.state.ingrediants}/>
                </Modal>

                <BuildControls controlMethod={this.ingrediantsControl}
                price = {this.state.price} 
                orderClick= {this.purchaseHander}/>
            </AUX>


        )
    }

}

export default BurgerBuilder;