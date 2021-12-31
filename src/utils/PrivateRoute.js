import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import MainComponent from "../components/MainComponent";
import AuthHandler from "./AuthHandler";

export const PrivateRoute = ({ activepage }) => {
  const auth = AuthHandler.loggedIn();
  // return auth ? <Outlet /> : <Navigate to="/" />;
  return auth ? (
    <MainComponent page={<Outlet />} activepage={activepage} />
  ) : (
    <Navigate to="/" />
  );
};
