import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Image } from './appStyles'

const BookThumb = ({ book }) => {



    return (
        <div className="thumbnail" style={ {width: "18rem"} } >
          <Link to={`/booksie/${book._id}`}>
            <Card key={book._id}>
                <h3> {book.title} </h3>
                <Image src={book.img} alt={book.title} />
                <h4> {book.author} </h4>
            </Card>
          </Link>
        </div>
    )
}

export default BookThumb