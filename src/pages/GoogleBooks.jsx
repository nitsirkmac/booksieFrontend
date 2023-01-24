import { useState, useEffect } from 'react'

function GoogleBooks ({ getFromGoogle, googleBooks }) {
    const [searchTitle, setSearchTitle] = useState('') 

    const handleChange = (event) => {
        setSearchTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        getFromGoogle(searchTitle)
    }

    return googleBooks.map ? (
        <>

            <section>
             
            </section>
        </>
    ) : (
        <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={searchTitle} />
        <button type="submit"></button>
        </form>
    )
}

export default GoogleBooks