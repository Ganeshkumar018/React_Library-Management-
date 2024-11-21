import React from "react";
import { useNavigate } from "react-router-dom";
import "./AddUser.css";
import { useState,useEffect } from "react";

const AddUser = () => {


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

  const [addusername,setaddusername]=useState();
  const [adduserID,setadduserID]=useState();
  const [addusercontact,setaddusercontact]=useState();
  const [adduseruseraddress,setadduseruseraddress]=useState();
  const [adduserborrowed,setadduserborrowed]=useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Name:",addusername)
    console.log("User ID:",adduserID)
    console.log("User Contact:",addusercontact)
    console.log("User Address:",adduseruseraddress)
    console.log("Number of Books Borrowed:",adduserborrowed)
    console.log(addusername,"named new user has been to the user database")
    navigate("/mainpage",{replace:true})
  }

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/mainpage", { replace: true });
  };

  return (
    <div className="bg">
      <div className="inputboxadduser">
        <h1>ADD USER</h1>

        <form className="add-user-form">
          <div className="add-user-div">
            <label>Name of the User:</label>
            <input type="text"
            value={addusername}
            onChange={(e) =>setaddusername(e.target.value)}
            required
             />
          </div>

          <div className="add-user-div">
            <label>USER ID:</label>
            <input type="number"
            value={adduserID}
            onChange={(e) =>setadduserID(e.target.value)}
            required
             />
          </div>

          <div className="add-user-div">
            <label>Contact Number:</label>
            <input type="number"
            value={addusercontact}
            onChange={(e) =>setaddusercontact(e.target.value)}
            required
             />
          </div>

          <div className="add-user-div">
            <label>User Address:</label>
            <input type="string"
            value={adduseruseraddress}
            onChange={(e) =>setadduseruseraddress(e.target.value)}
            required
             />
          </div>

          <div className="add-user-div">
            <label>Number of Books Borrowed:</label>
            <input type="number" 
            value={adduserborrowed}
            onChange={(e) =>setadduserborrowed(e.target.value)}
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

export default AddUser;
