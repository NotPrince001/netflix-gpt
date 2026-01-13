import React, { useEffect, useState } from "react";
import api from "../utils/api";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await api.get("/authFrontend");
        setAuthorized(true);
      } catch {
        setAuthorized(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) return <p>...Loading</p>;
  if (!authorized) return <Navigate to={"/"} />;
  return children;
};

export default ProtectedRoute;
