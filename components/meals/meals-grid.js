import React from 'react';
import classes from './meals-grid.module.css'


const MealsGrid = ({meals}) => {
    return (
        <ull className={classes.meals}>
            {meals.map(meal => <li key={meal.id}>

            </li>)}
        </ull>
    );
};

export default MealsGrid;