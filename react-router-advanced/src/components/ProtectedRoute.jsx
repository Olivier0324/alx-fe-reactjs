import React from "react";
import { Navigate } from "react-router-dom";

// Simulate authentication
const isAuthenticated = false;

export default function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
