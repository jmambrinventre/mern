import React, {Fragment, useState, useEffect} from 'react';
import Navbar from './Components/Navbar';
import BookList from './Components/BookList';

function App() {

  const [books, setBooks] = useState([])

  useEffect(() => {
    const getBooks = () => {
      fetch('http://localhost:9000/api')
      .then(res => res.json())
      .then(res => setBooks(res))
    }
    getBooks()
  }, []);

  return (
    <Fragment>
      <Navbar brand='Library app'/>
      <div className='container'>
        <div className='row'>
          <div className='col-7'>
            <h2 style={{ textAlign: 'center'}}>Book List</h2>
            <BookList books={books}/>
          </div>
          <div className='col-5'>
            <h2 style={{ textAlign: 'center'}}>Book Form</h2>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
