import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black/60 backdrop-blur-md border-b border-gray-800">
      <Link to="/" className="text-xl font-bold text-blue-400">
        AuraFit
      </Link>
      <Link to="/users" className="text-white">
  Users
</Link>

      <div className="flex gap-4 items-center">
        <Link className="hover:text-blue-400" to="/">Home</Link>
        <Link className="hover:text-blue-400" to="/dashboard">Dashboard</Link>
        <Link className="hover:text-blue-400" to="/saved">Saved</Link>

        {user ? (
          <button
            onClick={logout}
            className="bg-red-500 px-3 py-1 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        ) : (
          <Link className="bg-blue-500 px-3 py-1 rounded-lg" to="/login">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}