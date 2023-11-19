import { redirect } from "react-router-dom";
import { Outlet } from "react-router-dom";

import { useEffect } from "react";
import { isAuthenticated as apiIsAthenticated } from "../features/auth/authSlice";
import { useSelector } from "react-redux";
const ProtectedRoute = () => {
  const isAuthenticated = useSelector(apiIsAthenticated);

  return isAuthenticated ? <Outlet /> : redirect("/login");
};

export default ProtectedRoute;
