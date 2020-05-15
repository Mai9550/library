import React,{Fragment} from 'react';
import Book from './book';
class WantToRead extends React.Component{

    render(){
       return(
           <Fragment>
<h2 className="bookshelf-title">Want to Read</h2>
                      <li>
                        <Book book={this.props.book}/>
                      </li>
                      </Fragment>
       );
    }
}
export default WantToRead;