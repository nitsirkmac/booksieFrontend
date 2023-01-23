import BookThumb from './BookThumb'

function BookList({ book }) {

    return (
        <ul>
        <BookThumb book={book}/>
        </ul>
    )
}

export default BookList