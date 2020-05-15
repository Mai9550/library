import React,{Fragment} from 'react';
import Book from './book';
class Read extends React.Component{
    render(){
        return(
            <Fragment>
       <h2 className="bookshelf-title">Read</h2>
<li>
                            
                <Book book={this.props.book}/>
                      </li>
                      </Fragment>
        );
    }
}
export default Read;