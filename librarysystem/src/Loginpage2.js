import React, { useState,useEffect } from "react";
import { CiBookmark } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";
import "./index.css";
import './Loginpage.css'

const Loginpage2 = () => {
  const [otpaddress, Setotpaddress] = useState("");
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
    console.log("OTP", otpaddress);
    navigate("/mainpage", { replace: true });
  };

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/loginpage1", { replace: true });
  };

  return (
    <div className="login-page">
      <div className="logo-container">
        <CiBookmark size={40} color="#00ADEF" />
        <h1>LIBGENZ</h1>
      </div>

      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <div className="backbutton2" onClick={handleClick}>
            <MdOutlineArrowBack size={20} />
          </div>

          <h2>We sent your code</h2>
          <h5>Enter the 6-digit  verification code below</h5>

          <div className="input-group-loginpage">
            <input
              type="text"
              placeholder="Enter your OTP"
              maxLength={6}
              pattern="[0-9]{6}"
              value={otpaddress}
              onChange={(e) => Setotpaddress(e.target.value)}
              required
            />
          </div>
          <button>Verify OTP</button>
        </form>
      </div>
    </div>
  );
};

export default Loginpage2;
