import React from 'react'
import PropTypes from 'prop-types';
import Book from "./Book";

const Bookshelf = props => {
    const { currentStatusCode , currentStatusReadable , allBooks , onUpdateBook } = props;
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{currentStatusReadable}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {allBooks.map((book) => (
                        book.shelf === currentStatusCode && <Book key={book.id} book={book} currentStatusCode={currentStatusCode} onUpdateBook={onUpdateBook} />
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default Bookshelf

Bookshelf.propTypes = {
    allBooks: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired,
    currentStatusCode: PropTypes.string.isRequired,
    currentStatusReadable: PropTypes.string.isRequired,
};

