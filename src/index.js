import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/Login";
import MainComponent from "./components/MainComponent";
import { PrivateRoute } from "./utils/PrivateRoute";

ReactDOM.render(
  <Router>
    <Fragment>
      <Routes>
        <Route exact path="/home" element={<PrivateRoute />}>
          <Route exact path="/home" element={<MainComponent />} />
        </Route>
        <Route exact path="/" element={<Login />} />
      </Routes>
    </Fragment>
  </Router>,

  document.getElementById("root")
);
