import React, { Component } from 'react'
import {Link} from "react-router-dom";
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI';
import Book from "./Book";

class Search extends Component {
    static propTypes = {
        savedBooks: PropTypes.array.isRequired,
        onUpdateBook: PropTypes.func.isRequired
    }

    state = {
        query : '',
        books : []
    }

    isBookOnShelf = searchedBook => {
        for(const savedBook of this.props.savedBooks) {
            if(savedBook.id === searchedBook.id) {
                searchedBook.shelf= savedBook.shelf
            }
        }
        return searchedBook;
    }

    search = (query) => {
        let myBooks = ''
        BooksAPI.search(query)
            .then((searchedBooks) =>  {
                if(searchedBooks && !searchedBooks.error) {
                    myBooks = searchedBooks.map( searchedBook => {
                        return this.isBookOnShelf(searchedBook)
                    })
                }
                this.setState( (currentState) => ({
                    books: myBooks || []
                }))
            })
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }))
        this.search(query)
    }

    render() {
        const { books } = this.state
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        className='close-search'
                        to='/'>
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                               placeholder="Search by title or author"
                               onChange={(event) => this.updateQuery(event.target.value)}/>
                    </div>
                </div>
                <div className="search-books-results">

                    <ol className="books-grid">
                        {!books.error  && books.map((book) => (
                            <Book key={book.id} book={book} currentStatusCode={book.shelf || 'none'} onUpdateBook={this.props.onUpdateBook} />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search
