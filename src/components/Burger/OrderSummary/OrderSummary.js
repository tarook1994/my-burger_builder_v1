import React from 'react';
import AUX from '../../../hoc/auxilary'

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
            <p>Countiue to checkout?</p>

        </AUX >

    )




}

export default orderSummary;