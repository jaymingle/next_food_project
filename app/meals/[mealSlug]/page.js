import React from 'react';

const MealDetails = ({params}) => {
    return (
        <main>
            <h1>Meals Page</h1>
            <p>This a meal with an ID: {params.id}</p>
        </main>
    );
};

export default MealDetails;