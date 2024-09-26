import sql from 'better-sqlite3'

const db = sql('meals.db')

export async function getMeals(){
    await new Promise((resolve) => setTimeout(resolve, 5000))

    throw new Error('Loading Meals Failed!')
   return db.prepare('SELECT * FROM meals').all()

//     We use .all() to select all values from the database
//     We use.get() to select only a single value from the database
//     We use .run() if we are going to input or modify data in the database

}