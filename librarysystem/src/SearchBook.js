import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBook.css';


const SearchBook = () => {
  const [searchbooktitle, setsearchbooktitle] = useState('');
  const [searchbookISBN, setsearchbookISBN] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const handleRefresh = () => {
      navigate('/', { replace: true });
    };
    window.addEventListener('load', handleRefresh);
    return () => {
    window.removeEventListener('load', handleRefresh);
    };
  }, [navigate]);

  const handleSubmit = (e) => {
    console.log('Book Title:', searchbooktitle);
    console.log('Book ISBN:', searchbookISBN);
    console.log("Wait...",searchbooktitle,"is being searched now")
    navigate('/mainpage', { replace: true });
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate('/mainpage', { replace: true });
  };
  
  return (
    <div className="bg">
      <div className="inputboxsearchbook">
        <h1>SEARCH BOOK</h1>

        <form className="search-book-form">
          <div className="search-book-div">
            <label>
              <h3>Search for Book by Title:</h3>
            </label>
            <input
              type="text"
              value={searchbooktitle}
              onChange={(e) => setsearchbooktitle(e.target.value)}
              required
            />
          </div>

          <div className="search-book-div">
            <label>
              <h3>Search Book by ISBN:</h3>
            </label>
            <input
              type="number"
              value={searchbookISBN}
              onChange={(e) => setsearchbookISBN(e.target.value)}
              required
            />
          </div>
        </form>

        <div className="button-group">
          <button className="search-button" type="submit" onClick={handleSubmit}>
            Search
          </button>
          <button className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBook;
