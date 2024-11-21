import React from "react";
import { useNavigate } from "react-router-dom";
import "./DeleteBook.css";
import { useState,useEffect } from "react";

const DeleteBook = () => {

  const [deletebooktitle,setdeletebooktitle]=useState();
  const [deletebookauthor,setdeletebookauthor]=useState();
  const [deletebookISBN,setdeletebookISBN]=useState();


  
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

  const handleSubmit = (e) =>
  {
    e.preventDefault();
    console.log("Book Title:",deletebooktitle)
    console.log("Author Name:",deletebookauthor)
    console.log("ISBN Number:",deletebookISBN)
    console.log(deletebooktitle,"is deleted from the book database")
    navigate("/mainpage",{replace:true})
  }

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/mainpage", { replace: true });
  };

  return (
    <div className="bg">
      <div className="inputboxdeletebook">
        <h1>DELETE BOOK</h1>

        <form className="delete-book-form">
          <div className="delete-book-div">
            <label>
              <h3>Title of the Book:</h3>
            </label>
            <input type="text"
            required
            value={deletebooktitle}
            onChange={(e) =>setdeletebooktitle(e.target.value)}
             />
          </div>

          <div className="delete-book-div">
            <label>
              <h3>Author of the Book:</h3>
            </label>
            <input type="text"
            required
            value={deletebookauthor}
            onChange={(e) =>setdeletebookauthor(e.target.value)}
             />
          </div>

          <div className="delete-book-div">
            <label>
              <h3>ISBN Number:</h3>
            </label>
            <input type="number"
            required
            value={deletebookISBN}
            onChange={(e) => setdeletebookISBN(e.target.value)}
             />
          </div>
        </form>
        <div className="button-group">
          <button className="delete-button" onClick={handleSubmit}>Delete</button>
          <button className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteBook;
