import React from 'react';
import AUX from '../../../hoc/auxilary'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const listItmem = Object.keys(props.ingrediantSummary)
        .map((igkey) => {
            return (
                <li><span style={{ textTransform: 'capitalize' }}>{igkey}</span> : {props.ingrediantSummary[igkey]}</li>
            );
        });
    console.log(listItmem)

    return (
        < AUX >
            <h3>Your Order </h3>
            <p>A burger with the following ingrediants : </p>
            <ul>
                {
                    listItmem
                }

            </ul>
            <p>Total price is : {props.price}$</p>
            <p>Countiue to checkout?</p>
            <Button type ='Danger'
            clicked={props.purchaseCanceled}
            >Cancel</Button>
            <Button type ='Success'
            clicked={props.purchaseContinue}
            >Confirm</Button>


        </AUX >

    )




}

export default orderSummary;