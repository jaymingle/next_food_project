import React from 'react';
import classes from './meals-grid.module.css'
import MealItem from "@/components/meals/meal-item";


const MealsGrid = ({meals}) => {
    return (
        <ull className={classes.meals}>
            {meals.map(meal => <li key={meal.id}>
                {<MealItem {...meal} />}
            </li>)}
        </ull>
    );
};

export default MealsGrid;