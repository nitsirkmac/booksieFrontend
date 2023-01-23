// import { Link } from "react-router-dom"
import { useState } from "react"
import BookList from '../components/BookList'

function Index({ book, createBook }) {

    const [newBook, setNewBook] = useState({
        title: "",
        author: "",
        genre: "",
        img: "",
        description: ""
    })

    const handleChange = (event) => {
        setNewBook((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        createBook(newBook)
        setNewBook({
            title: "",
            author: "",
            genre: "",
            img: "",
            description: ""
        })
    }

    const loaded = () => {
        return book.map((book) => (
            <div key={book._id} className="newBook">
                <h1> {book.title} </h1>
                <h2> {book.author} </h2>
                {/* <h3> {book.genre} </h3> */}
                <img src={book.img} alt={book.title} />
                {/* <p> {book.description} </p> */}
            </div>
        ))
        return (
            <BookList />
        )
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newBook.title}
                    name="title"
                    placeholder="title"
                    onChange={handleChange}
                />
                 <input
                    type="text"
                    value={newBook.author}
                    name="author"
                    placeholder="author"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newBook.genre}
                    name="genre"
                    placeholder="genre"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newBook.img}
                    name="img"
                    placeholder="img"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newBook.description}
                    name="description"
                    placeholder="description"
                    onChange={handleChange}
                />
                <input type="submit" value="Create Book" />

            </form>
            {book ? loaded() : loading()}
        </section>
    )
}

export default Index