import React from 'react'
import classes from './Burger.css'
import BurgerIngrediant from '../Burger/BurgerIngrediant/BurgerIngrediant'

const burger = () => {
    return (
        <div className={classes.Burger}>
        <BurgerIngrediant type='bread-top'/>
        <BurgerIngrediant type='bacon'/>
        <BurgerIngrediant type='meat'/>
        <BurgerIngrediant type='cheese'/>
        <BurgerIngrediant type='bread-bottom'/>

        </div>
    )
};

export default burger;