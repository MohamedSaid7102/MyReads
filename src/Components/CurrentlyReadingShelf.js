import Book from './Book';

export default function CurrentlyReadingShelf (props) {
    return (
      <>
        <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
              {
                props.books
                .filter(book => book.shelf === 'currentlyReading')
                .map(book=>{
                  return (
                    <Book 
                    key={book.id}
                    book={book}
                    moveBook={props.moveBook}/>
                )}
                )
              }
              </ol>
            </div>
          </div>
      </>
    )
}

