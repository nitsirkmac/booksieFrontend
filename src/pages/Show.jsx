import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'


function Show  ( { deleteBook, updateBook, book })  {

    const { id } = useParams()
    let navigate = useNavigate()
    
    const [show1, setShow1] = useState({})



    const getOneBook = async (id) => {
    const singleURL=`http://localhost:4000/booksie/${id}`
    const res = await fetch(singleURL)
    const json = await res.json()
    setShow1(json)
    }
    useEffect(() => {
        getOneBook(id)
    }, [])



    const removeBook = () => {
        deleteBook(show1._id);
        navigate('/booksie')
    };

    console.log(show1)
    return (
        <div key={show1._id} className="showPage">
                <h1> {show1.title} </h1>
                <h2> {show1.author} </h2> 
                <h3> {show1.genre} </h3>
                <img src={show1.img} alt={show1.title} />
                <p> {show1.description} </p>
                <button id='delete' onClick={removeBook}>
                    REMOVE BOOK
                </button>
                <Link to={`/booksie/${id}/edit`} >
                    <button id='update'> EDIT BOOK</button>
                </Link>
         </div>
    )
}

export default Show