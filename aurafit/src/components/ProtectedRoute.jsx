import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, adminOnly = false }) {
  const { user, loading } = useAuth();

  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }


  if (!user) {
    return <Navigate to="/login" replace />;
  }


  if (adminOnly && user.email !== "youradmin@email.com") {
    return <Navigate to="/" replace />;
  }

  // ✅ Allowed access
  return children;
}