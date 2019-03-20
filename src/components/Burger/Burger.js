import React from 'react'
import classes from './Burger.css'
import BurgerIngrediant from '../Burger/BurgerIngrediant/BurgerIngrediant'

const burger = (props) => {
    const transformed = Object.keys(props.ingrediants).map(igKey => {
        return [...Array(props.ingrediants[igKey])].map((_,index) => {
            return (<BurgerIngrediant 
                key = {index+ igKey}
                type = {igKey}/>
        )})
    }).reduce((arr,el)=> {
        return arr.concat(el)
    },[])

    console.log(transformed)
    return (
        <div className={classes.Burger}>
      
        <BurgerIngrediant type='bread-top'/>
        {transformed.length>0? transformed:<p>Please start adding ingrediants! </p>}
        <BurgerIngrediant type='bread-bottom'/>

        </div>
    )
};

export default burger;