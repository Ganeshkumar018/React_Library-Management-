import {React,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./AddBook1.css";
import { useState } from "react";

const AddBook1 = () => {


  const [addbooktitle,setaddbooktitle]=useState('');
  const [addbookauthor,setaddbookauthor]=useState();
  const [addbookISBN,setaddbookISBN]=useState();
  const [addbookID,setaddbookID]=useState();
  const [addbookgenre,setaddbookgenre]=useState();
  const [addbookdescription,setaddbookdescription]=useState();
  const [addbooknumofpages,setaddbooknumofpages]=useState();
  
  

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

  const handleClick = (e) => {
    // e.preventDefault();
    console.log("Book Title:",addbooktitle)
    console.log("Book Author:",addbookauthor)
    console.log("ISBN Number:",addbookISBN)
    console.log("Book ID",addbookID)
    console.log("Genre:",addbookgenre)
    console.log("Description:",addbookdescription)
    console.log("Number of Pages:",addbooknumofpages)
  }

 
  const handleSubmit = (e) => {
    // e.preventDefault();
    navigate("/addbook2", { replace: true });
  };

  const handleSubmission = (e) =>
  {
    e.preventDefault();
    handleClick();
    handleSubmit();
    
  }

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/mainpage", { replace: true });
  };
  return (
    <div className="bg">
      <div className="inputboxaddbook1">
        <h1>ADD BOOK</h1>

        <form className="add-book1-form">
          <div className="add-book1-div">
            <label>Title of the Book:</label>
            <input type="text"
            value={addbooktitle}
            onChange={(e) =>setaddbooktitle(e.target.value)}
            required />
          </div>

          <div className="add-book1-div">
            <label>Author of the Book:</label>
            <input type="text"
            value={addbookauthor} 
            onChange={(e) =>setaddbookauthor(e.target.value)}
            required/>
          </div>

          <div className="add-book1-div">
            <label>ISBN Number:</label>
            <input type="number"
            value={addbookISBN}
            onChange={(e) =>setaddbookISBN(e.target.value)}
            required />
          </div>

          <div className="add-book1-div">
            <label>Book ID:</label>
            <input type="number"
            value={addbookID}
            onChange={(e) =>setaddbookID(e.target.value)}
            required />
          </div>

          <div className="add-book1-div">
            <label>Genre:</label>
            <input type="text"
            value={addbookgenre}
            onChange={(e) => setaddbookgenre(e.target.value)}
            required />
          </div>

          <div className="add-book1-div">
            <label>Number of Pages:</label>
            <input type="number" 
            value={addbooknumofpages}
            onChange={(e) =>setaddbooknumofpages(e.target.value)}
            required/>
          </div>

          <div className="add-book1-div">
            <label>Description:</label>
            <input type="textarea"
            value={addbookdescription}
            onChange={(e) => setaddbookdescription(e.target.value)}
            required />
          </div>
        </form>

        <div className="button-group">
          <button className="next-button" onClick={handleSubmission}>
            Next
          </button>
          <button className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBook1;
