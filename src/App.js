
import React,{Component} from 'react';
import * as BooksAPI from './BooksAPI';
import getAll from './BooksAPI.js'
import './App.css'
import Shelves from './shelves.js'

class App extends Component {
  state = {
    books:[]
    
  };
  
  componentDidMount = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ books: books });
    });
  };
    

  render() {
    const books=this.state;
    return (
      <div className="app">
        
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" >Close</button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
              <Shelves books={books} />
            </div>
            
          </div>
      
      </div>
    );
  }
}

export default App
