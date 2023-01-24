 import { TextArea, Info } from '../components/appStyles'
 import { useState } from 'react'
 import {  useParams, useNavigate } from 'react-router-dom'
 
 function EditBook ({ book, updateBook }) {


    const { id } = useParams()
    let navigate = useNavigate()

    const [editBook, setEditBook] = useState({
        title: "",
        author: "",
        genre: "",
        img: "",
        description: ""
    })

    const handleChange = (event) => {
        setEditBook((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        updateBook(editBook, book._id)
        navigate(`/booksie/${id}`)
    }

return (
<section>
    <form onSubmit={handleSubmit} method='PUT'>
                    <TextArea
                        type="text"
                        value={editBook.title}
                        name="title"
                        placeholder="title"
                        onChange={handleChange}
                    />
                    <TextArea
                        type="text"
                        value={editBook.author}
                        name="author"
                        placeholder="author"
                        onChange={handleChange}
                    />
                    <TextArea
                        type="text"
                        value={editBook.genre}
                        name="genre"
                        placeholder="genre"
                        onChange={handleChange}
                    />
                    <TextArea
                        type="text"
                        value={editBook.img}
                        name="img"
                        placeholder="img"
                        onChange={handleChange}
                    />
                    <Info
                        type="textarea"
                        value={editBook.description}
                        name="description"
                        placeholder="description"
                        onChange={handleChange}
                    />
                    <input type="submit" value="Update Book" />
                </form>
                </section>
    )  
 }

 export default EditBook