import { useState } from 'react'
import { Card, Image } from './appStyles'

const BookThumb = ({ book }) => {



    return (
        <div className="thumbnail" style={ {width: "18rem"} } >
          <Card key={book._id}>
            <h3> {book.title} </h3>
            <img src={book.img} alt={book.title} />
            <h4> {book.author} </h4>
          </Card>
        </div>
    )
}

export default BookThumb