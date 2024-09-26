import Link from "next/link";
import classes from './page.module.css'
import MealsGrid from "@/components/meals/meals-grid";
import {getMeals} from "@/lib/meals";
import {Suspense} from "react";

async function Meals(){

    const meals = await getMeals();
    return  <MealsGrid meals={meals}/>

}

const MealsPage = async() => {

    return (
        <>
            <header className={classes.header}>
                <h1>Delicious meals, made {' '} for you <span className={classes.highlight}>with love</span> </h1>
                <p>Prepare your recipe and let us prepare it for you. Healthy and fast!</p>
                <p className={classes.cta}>
                    <Link href="/meals/share">Share Your Meals</Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>Fetching Meals....</p>}>
                    <Meals/>
                </Suspense>
            </main>
        </>
    )
}

export default MealsPage;