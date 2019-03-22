import React, { Component } from 'react'
import AUX from '../hoc/auxilary'
import Burger from '../components/Burger/Burger'
import BuildControls from '../components/Burger/BuildControls/BuildControls'
import Modal from '..//components/UI/Modal/Modal'
import OrderSummary from '../components/Burger/OrderSummary/OrderSummary'
import axiosInstance from '../axios/axios'
import { maxHeaderSize } from 'http';
import Spinner from '../components/UI/Spinner/Spinner'
import Axios from 'axios';


const INGREDIANTS_PRICIES = {
    salad: 0.3,
    bacon: 0.7,
    cheese: 0.5,
    meat: 1.5
}

class BurgerBuilder extends Component {
    state = {
        ingrediants: null,
        price: 4,
        orderNowClicked: false,
        loading: false
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
            let modifiedState = { ...prevState.ingrediants }
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

    purchaseHander = () => {
        this.setState({
            orderNowClicked: true,
        })
    }

    closeModal = () => {
        this.setState({
            orderNowClicked: false
        })
    }

    continueHandler = () => {
        // alert('you continue')
        this.setState({
            loading: true
        })
        const order = {
            ingrediants: this.state.ingrediants,
            price: this.state.price,
            customer: {
                name: 'max',
                address: 'test',
                country: 'eshasras',
                email: 'test@test.com',
                deliveryMethod: 'fast'
            }
        }
        axiosInstance.post('/orders.json', order).then(response => {
            console.log(response)
            this.setState({
                loading: false,
                orderNowClicked: false
            })
        }, error => {
            console.log(error)
        })

    }
    componentDidMount() {

        Axios.get('https://racingcalendar-5b73e.firebaseio.com/Ingrediants.json').then(response => {
            this.setState({
                ingrediants: response.data
            })
        })
    }

    render() {
        let burger = <Spinner />
        let orderSummary = <Spinner />

        if (this.state.ingrediants) {
            burger = (
                <AUX>

                    <Burger ingrediants={this.state.ingrediants} />
                    <BuildControls controlMethod={this.ingrediantsControl}
                        price={this.state.price}
                        orderClick={this.purchaseHander} />
                </AUX>

            )

            orderSummary = (
                <OrderSummary
                    ingrediantSummary={this.state.ingrediants}
                    purchaseCanceled={this.closeModal}
                    purchaseContinue={this.continueHandler}
                    price={this.state.price} />
            )

        }

        if (this.state.loading) {
            orderSummary = <Spinner />
        }

        return (
            <AUX>
                <Modal show={this.state.orderNowClicked}
                    modalClosed={this.closeModal}>
                    {orderSummary}
                </Modal>
                {burger}



            </AUX>


        )
    }

}

export default BurgerBuilder;