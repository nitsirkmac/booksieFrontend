import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import Index from "../pages/Index"
import Show from "../pages/Show"
import AddBook from "../pages/AddBook"
import BookList from "../components/BookList"
import EditBook from "../pages/EditBook"
import GoogleBooks from '../pages/GoogleBooks'

function Main() {

    const [googleBooks, setGoogleBooks] = useState([])

    const getFromGoogle = async (bookTitle) => {
        const gbURL = `https://www.googleapis.com/books/v1/volumes?q=intitle:${bookTitle}&printType=books&key=AIzaSyC0-RbX4rAq7mz2qJ0IdZZkq7UM7rcusss`
        const res = await fetch(gbURL);
        const json = await res.json();
        setGoogleBooks(json)
    }
    useEffect(() => {
        getFromGoogle()
    }, [])
    console.log(googleBooks)


    const [ book, setBook ] = useState([])
    const bookURL = "https://booksiebackend.herokuapp.com/booksie/"

    const getBookList = async () => {
        const res = await fetch(bookURL)
        const json = await res.json()
        setBook(json)
    }

    const createBook = async (newBook) => {
        await fetch(bookURL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(newBook)
        })
        getBookList()
    }

    const updateBook = async (book, id) => {
        await fetch(bookURL + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify(book),
        })
        getBookList()
    }

    const deleteBook = async (id) => {
        await fetch(bookURL + id, {
            method: 'DELETE',
        })
        getBookList()
    }

    useEffect(() => {
        getBookList()
    }, [])


    return (
        <main>
            <Routes>
                <Route path='/' element={<Index book={book} />} />
                <Route path='/booksie' element={<BookList book={book}  />} />
                <Route path='/booksie/new' element={<AddBook createBook={createBook} book={book} /> } />
                <Route path='/booksie/:id' element={<Show book={book} deleteBook={deleteBook} updateBook={updateBook} />} />
                <Route path='/booksie/:id/edit' element={ <EditBook  updateBook={updateBook} /> } />
                <Route path='/booksie/search' element={ <GoogleBooks getFromGoogle={getFromGoogle} googleBooks={googleBooks} /> } />
            </Routes>
        </main>
    )
}

export default Main