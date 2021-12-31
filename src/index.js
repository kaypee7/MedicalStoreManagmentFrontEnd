import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { PrivateRoute } from "./utils/PrivateRoute";
import HomeComponent from "./pages/HomeComponent";
import CompanyComponent from "./pages/CompanyComponent";

ReactDOM.render(
  <Router>
    <Fragment>
      <Routes>
        <Route exact path="/home" element={<PrivateRoute activepage="0" />}>
          <Route exact path="/home" element={<HomeComponent />} />
        </Route>
        <Route exact path="/company" element={<PrivateRoute activepage="1" />}>
          <Route exact path="/company" element={<CompanyComponent />} />
        </Route>
        <Route exact path="/" element={<Login />} />
      </Routes>
    </Fragment>
  </Router>,

  document.getElementById("root")
);
