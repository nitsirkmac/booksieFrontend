import { useState } from 'react'

function GoogleBooks ({ getFromGoogle, googleBooks }) {
    const [searchTitle, setSearchTitle] = useState('') 

    const handleChange = (event) => {
        setSearchTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        getFromGoogle(searchTitle)
    }

    return googleBooks.items ? (
        <>
        <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={searchTitle} />
        <button type="submit"></button>
        </form>
        
        <section>
        <img src={googleBooks.items[0].volumeInfo.imageLinks.thumbnail} alt={googleBooks.title} />
          <h1> {googleBooks.items[0].volumeInfo.authors[0]}</h1>
          <h2> {googleBooks.items[0].volumeInfo.categories}</h2>
          <h1>{googleBooks.items[0].volumeInfo.title}</h1>
          <h4>{googleBooks.items[0].volumeInfo.description} </h4>
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