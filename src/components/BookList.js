import BookThumb from './BookThumb'
import { ListView } from './appStyles'

const BookList = ({ book, }) => {

const list = book.map((book, index) => {
    return (
        <div>
            <BookThumb
                key={book.id}
                book={book}
                />


        </div>
    )
})
    return (
        <ListView id="list">{list}</ListView>
    )
}

export default BookList