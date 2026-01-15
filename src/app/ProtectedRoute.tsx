import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import useAuth from "../hooks/useAuth";

type Props = {
  children: ReactNode;
};

export default function ProtectedRoute({ children }: Props) {
  const { user, loading } = useAuth();

  if (loading) return null;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
