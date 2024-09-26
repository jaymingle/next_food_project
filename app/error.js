"use client"
const Error = ({error}) => {
    return(
        <main className='error'>
            <h1>An error ocurred!</h1>
            <p>Fail to fetch meal data, please try again!!</p>
        </main>
    )
}

export default Error;