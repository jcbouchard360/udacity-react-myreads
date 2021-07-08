import React from 'react'
import Bookshelf from "./Bookshelf";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const statuses = [  {code : 'currentlyReading', readable : 'Currently Reading'},
                    {code : 'wantToRead', readable : 'Want To Read'},
                    {code : 'read', readable : 'Read'}];

const ListBooks = props => {
    const {  savedBooks , onUpdateBook } = props;
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {statuses.map((status) => (
                        <Bookshelf key={status.code} currentStatusCode={status.code} currentStatusReadable={status.readable} savedBooks={savedBooks} onUpdateBook={onUpdateBook} />
                    ))}
                </div>
            </div>
            <Link
                className='open-search'
                to='/search'>
                Add a book
            </Link>
        </div>
    )
}

export default ListBooks

ListBooks.propTypes = {
    savedBooks: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired,
};


