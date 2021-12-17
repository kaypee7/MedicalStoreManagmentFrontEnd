import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/Login";

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<Login />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);
