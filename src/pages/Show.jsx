import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Show  ()  {

    const [show1, setShow1] = useState({})

    const { id } = useParams()

    const getOneBook = async (id) => {
    const singleURL=`http://localhost:4000/booksie/${id}`
    const res = await fetch(singleURL)
    const json = await res.json()
    setShow1(json)
    }
    useEffect(() => {
        getOneBook(id)
    }, [])

    console.log(show1)
    return (
        <div key={show1._id} className="showPage">
                <h1> {show1.title} </h1>
                <h2> {show1.author} </h2> 
                <h3> {show1.genre} </h3>
                <img src={show1.img} alt={show1.title} />
                <p> {show1.description} </p>
            </div>
    )
}

export default Show