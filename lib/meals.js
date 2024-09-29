import sql from 'better-sqlite3'
import slugify from "slugify";
import xss from "xss";
import fs from 'node:fs';

const db = sql('meals.db')


//this is for getting all the meals from the database on the meals page
export async function getMeals(){
    await new Promise((resolve) => setTimeout(resolve, 5000))

   // throw new Error('Loading Meals Failed!')
   return db.prepare('SELECT * FROM meals').all()

//     We use .all() to select all values from the database
//     We use.get() to select only a single value from the database
//     We use .run() if we are going to input or modify data in the database
}


//Get meal based on the id of the meal, this is used on the meal details page
export function getMeal(slug){
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}

//for saving meal from the share meal form
export async function saveMeal(meal) {
    meal.slug = slugify(meal.title, {lower: true})
    meal.instructions = xss(meal.instructiions)

    const extension = meal.image.name.split('.').pop()
    const fileName = `${meal.slug}_${extension}`

    const stream = fs.createWriteStream(`public/images/${fileName}`)
    const bufferedImage = await meal.image.arrayBuffer()

    stream.write(Buffer.from(bufferedImage))


}