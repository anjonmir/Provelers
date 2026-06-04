import type { ReactNode } from "react";

import { Navigate } from "react-router-dom";

import useAuth from "../hooks/useAuth";

type ProtectedRouteProps = {
  children: ReactNode;
};

function ProtectedRoute({
  children,
}: ProtectedRouteProps) {
  const auth = useAuth();

  if (!auth) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  const { user, loading } = auth;

  if (loading) {
    return (
      <div className="container py-5">
        Loading...
      </div>
    );
  }

  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  return <>{children}</>;
}

export default ProtectedRoute;