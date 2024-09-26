import Link from "next/link";
import classes from './page.module.css'

const MealsPage = () => {
    return (
        <>
            <header className={classes.header}>
                <h1>Delicious meals, made {' '} for you <span className={classes.highlight}>with love</span> </h1>
                <p>Prepare your recipe and let us prepare it for you. Healthy and fast!</p>
                <p className={classes.cta}>
                    <Link href="/meals/share">Share Your Meals</Link>
                </p>
            </header>
            <main className={classes.main}></main>
        </>
    )
}

export default MealsPage;