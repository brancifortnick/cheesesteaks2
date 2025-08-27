import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = (props) => {
  const user = useSelector((state) => state.session.user);
  console.log("ProtectedRoute - user:", user);
  console.log("Should redirect to login:", !user);

  if (!user) {
    console.log("Redirecting to /login");
    return <Redirect to="/login" />;
  }

  return <Route {...props}>{props.children}</Route>;
};
export default ProtectedRoute;
