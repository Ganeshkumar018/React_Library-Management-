import {React,useEffect} from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import './Mainpage.css'

const Mainpage = () => {
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

  const handlesubmitaddbook = (e) => {
    e.preventDefault();
    navigate("/addbook1", { replace: true });
  };

  const handlesubmitadduser = (e) => {
    e.preventDefault();
    navigate("/adduser", { replace: true });
  };

  const handlesubmitissuebook = (e) => {
    e.preventDefault();
    navigate("/issuebook", { replace: true });
  };

  const handlesubmitdeletebook = (e) => {
    e.preventDefault();
    navigate("/deletebook", { replace: true });
  };

  const handlesubmitsearchbook = (e) => {
    e.preventDefault();
    navigate("/searchbook", { replace: true });
  };
  return (
    <div className="bg">
      <div className="search-box">
        <div className="searh-box-div">
          <FaSearch size={20} />
          <input type="text" placeholder="Search for books,author,etc...." />
        </div>
      </div>

      <div className="buttons">
        <div className="button-left">
          <div className="button">
            <button className="button-btn" onClick={handlesubmitaddbook}>
              ADD BOOK
            </button>
          </div>

          <div className="button">
            <button className="button-btn" onClick={handlesubmitadduser}>
              ADD USER
            </button>
          </div>

          <div className="button">
            <button className="button-btn" onClick={handlesubmitissuebook}>
              ISSUE BOOK
            </button>
          </div>
        </div>

        <div className="button-right">
          <div className="button">
            <button className="button-btn" onClick={handlesubmitdeletebook}>
              DELETE BOOK
            </button>
          </div>

          <div className="button">
            <button className="button-btn" onClick={handlesubmitsearchbook}>
              SEARCH BOOK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
