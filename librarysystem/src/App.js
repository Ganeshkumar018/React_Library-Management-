import { Route, Routes } from "react-router-dom";
import React from "react";
import Loginpage1 from "./Loginpage1";
import HomePage from "./Homepage";
import Loginpage2 from "./Loginpage2";
import Mainpage from "./Mainpage";
import AddBook1 from "./AddBook1";
import AddBook2 from "./AddBook2";
import AddUser from "./AddUser";
import DeleteBook from "./DeleteBook";
import IssueBook from "./IssueBook";
import SearchBook from "./SearchBook";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loginpage1" element={<Loginpage1 />} />
        <Route path="/loginpage2" element={<Loginpage2 />} />
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/addbook1" element={<AddBook1 />} />
        <Route path="/addbook2" element={<AddBook2 />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/deletebook" element={<DeleteBook />} />
        <Route path="/issuebook" element={<IssueBook />} />
        <Route path="/searchbook" element={<SearchBook />} />
      </Routes>
    </div>
  );
};

export default App;
