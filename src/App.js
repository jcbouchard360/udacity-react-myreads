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
        this.loadsavedBooks()
    }

    updateBook = (book, shelf) => {
        BooksAPI.update(book ,shelf)
            .then(() =>  {
                this.loadsavedBooks()
            })
    }

    loadsavedBooks() {
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
                    <Search savedBooks={this.state.books}
                            onUpdateBook={(book, shelf) => {
                                this.updateBook(book, shelf)
                            }}/>
                )} />

                <Route exact path='/' render={() => (
                    <ListBooks savedBooks={this.state.books}
                               onUpdateBook={(book, shelf) => {
                                   this.updateBook(book, shelf)
                               }}/>
                )} />
            </div>
        )
    }
}

export default BooksApp
