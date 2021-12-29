import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthHandler from "./AuthHandler";

export const PrivateRoute = () => {
  const auth = AuthHandler.loggedIn();
  return auth ? <Outlet /> : <Navigate to="/" />;
};
