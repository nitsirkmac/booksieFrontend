import BookThumb from './BookThumb'
import { ListView } from './appStyles'

const BookList = ({ book }) => {

const list = book.map((book, index) => {
    return (
        <ListView>
            <BookThumb
                key={book.id}
                book={book}
                />
                {/* //update
                //delete */}
        </ListView>
    )
})
    return (
        <div id="list">{list}</div>
    )
}

export default BookList