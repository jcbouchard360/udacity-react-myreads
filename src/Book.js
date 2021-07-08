import React from 'react'
import ShelfChanger from "./ShelfChanger";
import PropTypes from 'prop-types'

const Book = props => {
    const { book , currentStatusCode , onUpdateBook } = props;
    return (
        <li key={book.id}>
            <div className="book">
                <div className="book-top">
                    {book.imageLinks && <div className="book-cover"
                                             style={{
                                                 width: 128,
                                                 height: 193,
                                                 backgroundImage:`url(${book.imageLinks.thumbnail})`
                                             }}></div>}

                    <ShelfChanger book={book} currentStatusCode={currentStatusCode} onUpdateBook={onUpdateBook} />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">
                    {book.authors}
                </div>
            </div>
        </li>
    )
}

export default Book

Book.propTypes = {
    book: PropTypes.object.isRequired,
    onUpdateBook: PropTypes.func.isRequired,
    currentStatusCode: PropTypes.string.isRequired,
};
