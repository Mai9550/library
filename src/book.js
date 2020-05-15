import React from 'react';
import NavigationButton from './NavigationButton.js';
class Book extends React.Component{
    render(){
   const {book, shelf}  = this.props;
   
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${"http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api"})`,
            }}
          />
          <NavigationButton book={book} shelf={shelf} />
        </div>
        <div className="book-title"></div>
        <div className="book-authors"></div>
      </div>
    </li>
    
  );
}
};
export default Book;