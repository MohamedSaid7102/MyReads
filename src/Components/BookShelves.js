import React, { Component } from 'react'
import CurrentlyReadingShelf from './CurrentlyReadingShelf';
import WantToReadShelf from './WantToReadShelf';
import ReadShelf from './ReadShelf';

export default class BookShelvies extends Component {
  render() {
    return (
      <>
        <div className="list-books-content">
            <CurrentlyReadingShelf books={this.props.books} moveBook={this.props.moveBook}/>
            <WantToReadShelf books={this.props.books} moveBook={this.props.moveBook}/>
            <ReadShelf books={this.props.books} moveBook={this.props.moveBook}/>
        </div>
      </>
    )
  }
}

