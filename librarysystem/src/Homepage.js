import React, { useState,useEffect } from "react";
import { CiBookmark } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import "./index.css";
import { useNavigate } from "react-router-dom";
import './Homepage.css'

const HomePage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
    console.log("Username:", username);
    console.log("Password:", password);
    navigate("/loginpage1", { replace: true });
  };

  return (
    <div className="login-page">
      <div className="logo-container">
        <CiBookmark size={40} color="#00ADEF" />
        <h1>LIBGENZ</h1>
      </div>
      <div className="login-container">
        <div className="login-header">
          <FiUser size={25} />
          <h2>LOGIN NOW</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Username:</label>
            <input
              type="text"
              placeholder="Enter username"
              required
              minLength={8}
              maxLength={16}
              pattern="[a-zA-Z0-9]{8,16}"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              pattern="[a-zA-Z0-9/@#$%]{8-16}"
              minLength={8}
              maxLength={16}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
