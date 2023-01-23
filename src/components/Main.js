import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import Index from "../pages/Index"
import Show from "../pages/Show"

function Main() {

    const [ book, setBook ] = useState([])
    const bookURL = "http://localhost:4000/booksie"

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

    useEffect(() => {
        getBookList()
    }, [])

    return (
        <main>
            <Routes>
                <Route path='/' element={<Index book={book} createBook={createBook} />} />
                <Route path='/booksie/:id' element={<Show book={book} />} />
            </Routes>
        </main>
    )
}

export default Main