import React,{Fragment} from 'react';
import Currentlyreading from './Currentlyreading.js';
import wantToRead from './wantToread.js';
import Read from './Read.js'
class shelves extends React.Component{
  
render(){
    return(  
        <Fragment>   
          <div className="bookshelf">
                 
                    <div className="bookshelf-books">
                     <ol className="books-grid">
                     <Currentlyreading/>  
                      
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    <wantToRead/>
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    <Read/>
                    </ol>
                  </div>
                </div>
                <div className="open-search"></div>
          
                </Fragment>     

    );
}
}
export default shelves;