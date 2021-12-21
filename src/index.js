import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/Login";
import MainComponent from "./components/MainComponent";
import { PrivateRoute } from "./utils/PrivateRoute";

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <PrivateRoute exact path="/home" element={<MainComponent />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);
