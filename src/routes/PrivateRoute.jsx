import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (user && user?.email ) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
