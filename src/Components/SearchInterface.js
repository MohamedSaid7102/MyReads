import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book';
import * as BooksAPI from '../BooksAPI';

export default class SearchInterface extends Component {
  state = {
    showingBooks: [],
  }
  seachBooks = async (query) => {
    const books  = await BooksAPI.search(query);
    const booksWithShelves = books!==undefined && !books.error && books 
    ? books.map(book => {
      if(this.props.books.some(b=>b.id === book.id)) {
        book.shelf = this.props.books.find(x=>x.id===book.id).shelf;
      }
      return book;
    })
    : [];
    this.setState(()=>({
      showingBooks: booksWithShelves
    }))
  }
  render() {
    return (
      <>
        <div className="search-books">
            <div className="search-books-bar">
              <Link to="/">
                <button className="close-search" >Close</button>
              </Link>
              <div className="search-books-input-wrapper">
                <input 
                type="text" 
                placeholder="Search by title or author" 
                onChange={(event) => this.seachBooks(event.target.value)}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {
                  this.state.showingBooks.map(book=>                    
                  <Book 
                    key={book.id}
                    book={book}
                    moveBook = {this.props.moveBook}
                    />)
                }
              </ol>
            </div>
          </div>
      </>
    )
  }
}

