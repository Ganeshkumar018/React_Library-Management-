import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./IssueBook.css";

const IssueBook = () => {

  const [issuebooktitle,setissuebooktitle]=useState();
  const [issuebookID,setissuebookID]=useState();
  const [issuebookISBN,setissuebookISBN]=useState();
  const [issuebookuser,setissuebookuser]=useState();
  const [issuebookuserID,setissuebookuserID]=useState();
  const [issuebookborrowed,setissuebookborrowed]=useState();
  const [issuebookdate,setissuebookdate]=useState();
  const [issuebookreturndate,setissuebookreturndate]=useState();
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
    console.log("Book Title:",issuebooktitle)
    console.log("Book ID:",issuebookID)
    console.log("ISBN Number:",issuebookISBN)
    console.log("User Name:",issuebookuser)
    console.log("User ID:",issuebookuserID)
    console.log("Number of Books Borrowed:",issuebookborrowed)
    console.log("Lending Date:",issuebookdate)
    console.log("Return Date:",issuebookreturndate)
    console.log(issuebooktitle,"issued to",issuebookuser,"from",issuebookdate,"to",issuebookreturndate)
    navigate("/mainpage",{replace:true})
  }

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/mainpage", { replace: true });
  };
  return (
    <div className="bg">
      <div className="inputboxissuebook">
        <h1>ISSUE BOOK</h1>

        <form className="issue-book-form">
          <div className="issue-book-div">
            <label>
              <h3>Title of the Book:</h3>
            </label>
            <input type="text"
            required
            value={issuebooktitle}
            onChange={(e) =>setissuebooktitle(e.target.value)}
             />
          </div>

          <div className="issue-book-div">
            <label>Book ID:</label>
            <input type="number" 
            required
            value={issuebookID}
            onChange={(e) => setissuebookID(e.target.value)}
            />
          </div>

          <div className="issue-book-div">
            <label>ISBN Number:</label>
            <input type="number"
            required
            value={issuebookISBN}
            onChange={(e) => setissuebookISBN(e.target.value)}
             />
          </div>

          <div className="issue-book-div">
            <label>Name of the User:</label>
            <input type="text"
            required
            value={issuebookuser}
            onChange={(e) =>setissuebookuser(e.target.value)}
             />
          </div>

          <div className="issue-book-div">
            <label>USER ID:</label>
            <input type="number"
            required
            value={issuebookuserID}
            onChange={(e) => setissuebookuserID(e.target.value)}
             />
          </div>

          <div className="issue-book-div">
            <label>Number of Books Borrowed:</label>
            <input type="number" 
            value={issuebookborrowed}
            required
            onChange={(e) => setissuebookborrowed(e.target.value)}
            />
          </div>

          <div className="issue-book-div">
            <label>Lending Date:</label>
            <input type="date"
            required
            value={issuebookdate}
            onChange={(e) => setissuebookdate(e.target.value)}
             />
          </div>

          <div className="issue-book-div">
            <label>Return Date:</label>
            <input type="date"
            required
            value={issuebookreturndate}
            onChange={(e) => setissuebookreturndate(e.target.value)}
             />
          </div>
        </form>

        <div className="button-group">
          <button className="issue-button" onClick={handleSubmit}>Issue</button>
          <button className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default IssueBook;
