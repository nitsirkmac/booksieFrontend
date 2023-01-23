
function BookThumb({ book }) {

    return (
        <div className="books">
            <h1>BookThumb</h1>
            {/* book.map((book) => (
                <div key={book._id}>
                    <h1> {book.title} </h1>
                    <h2> {book.author} </h2>
                    <img src={book.img} alt={book.title} />
                </div>
            )) */}
        </div>
    )
}

export default BookThumb