import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AddBook2.css";
import addbooktitle from './AddBook1.js'

const AddBook2 = () => {

  const [addbooklanguage,setaddbooklanguage]=useState();
  const [addbookpublication,setaddbookpublication]=useState();
  const [addbookedition,setaddbookedition]=useState();

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
    console.log("Language:",addbooklanguage)
    console.log("Publication:",addbookpublication)
    console.log("Edition:",addbookedition)
    console.log(addbooktitle,"has been added to the database")
    navigate("/mainpage",{replace:true})  
  }

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/mainpage", { replace: true });
  };

  return (
    <div className="bg">
      <div className="inputboxaddbook2">
        <h1>ADD BOOK</h1>

        <form className="add-book2-form">
          <div className="add-book2-div">
            <label>Language:</label>
            <input type="text"
            value={addbooklanguage}
            onChange={(e) =>setaddbooklanguage(e.target.value)}
            required
             />
          </div>

          <div className="add-book2-div">
            <label>Publication:</label>
            <input type="text"
            required
            value={addbookpublication}
            onChange={(e) => setaddbookpublication(e.target.value)} />
          </div>

          <div className="add-book2-div">
            <label>Edition:</label>
            <input type="string"
            value={addbookedition}
            onChange={(e) =>setaddbookedition(e.target.value)}
            required
             />
          </div>
        </form>

        <div className="button-group">
          <button className="add-button" onClick={handleSubmit}>Add</button>
          <button className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBook2;
