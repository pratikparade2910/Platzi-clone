// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../components/firebase";

const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <p className="text-center">Loading...</p>;
  // console.log(user)
  // console.log(loading)
  if (!user) {
    return <Navigate to="/" />
    // return <Navigate to="/home"/>
  } else if (user) {
    return children;
  }


  // else{
  //  return <Navigate to="/" />;
  // }


};

export default ProtectedRoute;
