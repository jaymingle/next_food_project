import React from 'react';
import classes from './page.module.css'

const MealDetails = ({params}) => {
    return (
        <>
            <header>

            </header>
            <main>
                <h1>Meals Page</h1>
                <p>This a meal with an ID: {params.slug}</p>
            </main>
        </>
    );
};

export default MealDetails;