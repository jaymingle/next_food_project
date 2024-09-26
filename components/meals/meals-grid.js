import React from 'react';

const MealsGrid = ({meals}) => {
    return (
        <ull>
            {meals.map(meal => <li key={meal.id}>

            </li>)}
        </ull>
    );
};

export default MealsGrid;