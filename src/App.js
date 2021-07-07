import React from 'react'
import * as BooksAPI from './BooksAPI';
import './App.css'
import { Route } from 'react-router-dom'
import Search from "./Search";
import ListBooks from "./ListBooks";

class BooksApp extends React.Component {
    state = {
        books : []
    }
    componentDidMount() {
        this.loadAllBooks()
    }

    updateBook = (book, shelf) => {
        BooksAPI.update(book ,shelf)
            .then(() =>  {
                this.loadAllBooks()
            })
    }

    loadAllBooks() {
        BooksAPI.getAll()
            .then((books) =>  {
                this.setState(() => ({
                    books : books
                }))
            })
    }

    render() {
        return (
            <div className="app">
                <Route path='/search' render={() => (
                    <Search onUpdateBook={(book, shelf) => {
                        this.updateBook(book, shelf)

                    }}/>
                )} />

                <Route exact path='/' render={() => (
                    <ListBooks allBooks={this.state.books}
                               onUpdateBook={(book, shelf) => {
                                   this.updateBook(book, shelf)
                               }}/>
                )} />
            </div>
        )
    }
}

export default BooksApp
