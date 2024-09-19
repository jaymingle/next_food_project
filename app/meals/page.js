import Link from "next/link";

const Meals = () => {
    return (
        <main>
            <h1>Meals Page</h1>

            <Link href='meals/1'>Meal 1</Link>
            <Link href='meals/2'>Meal 2</Link>
            <Link href='meals/3'>Meal 3</Link>
            <Link href='meals/4'>Meal 4</Link>
            <Link href='meals/5'>Meal 5</Link>

        </main>
    )
}

export default Meals;