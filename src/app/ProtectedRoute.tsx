import { Navigate } from "react-router-dom";

import useAuth from "../hooks/useAuth";

type Props = {
  children: React.ReactNode;
};

function ProtectedRoute({
  children,
}: Props) {
  const { user, loading } =
    useAuth();

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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