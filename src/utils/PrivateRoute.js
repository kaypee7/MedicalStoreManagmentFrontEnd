import React from "react";
import { Navigate, Route } from "react-router-dom";
import AuthHandler from "./AuthHandler";

export var PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      AuthHandler.loggedIn() ? <component {...props} /> : <Navigate to="/" />
    }
  />
);
