import React,{Component} from 'react';
import React, {Fragment} from 'react';
import Currentlyreading from './Currentlyreading.js';
import wantToread from './wantToread'
import Read from './Read'
class shelves extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

render(){
    return(  
        <Fragment>   
          <div className="bookshelf">
                 <Currentlyreading/>  
                    <div className="bookshelf-books">
                     <ol className="books-grid">
                      
                      
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <wantToread/>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <Read/>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      
                    </ol>
                  </div>
                </div>
                <div className="open-search">
              <button onClick={this.handleChange}>Add a book</button>
            </div>
                </Fragment>     

    );
}
}
export default shelves;