import React, { useState,useEffect } from "react";
import { CiBookmark } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";
import "./index.css";
import './Loginpage.css'

const Loginpage1 = () => {
  const [emailaddress, setEmailaddress] = useState("");
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
    e.preventDefault();
    console.log("EmailAddress:", emailaddress);
    navigate("/loginpage2", { replace: true });
  };

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/", { replace: true });
  };

  return (
    <div className="login-page">
      <div className="logo-container">
        <CiBookmark size={40} color="#00ADEF" />
        <h1>LIBGENZ</h1>
      </div>

      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <div className="backbutton1" onClick={handleClick}>
            <MdOutlineArrowBack size={20} />
          </div>

          <div className="input-group-loginpage">
            <label>
              <h2>Enter your Email Address</h2>
            </label>
            <input
              type="email"
              placeholder="user@example.com"
              pattern="^[a-zA-Z0-9._%+]+@[a-zA-Z0-9.]+\.com$"
              value={emailaddress}
              onChange={(e) => setEmailaddress(e.target.value)}
              required
            />
          </div>

          <div className="otp-message">
            <h4>OTP will be sent to your mentioned Email Address</h4>
          </div>

          <div>
            <button type="submit">SEND OTP</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Loginpage1;
