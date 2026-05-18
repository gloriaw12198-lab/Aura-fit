import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-3 flex justify-between items-center shadow-md">

      {/* Logo */}
      <h1 className="text-2xl font-bold tracking-wide">
        🏋️ AuraFit
      </h1>

      {/* User Section */}
      {user && (
        <div className="flex items-center gap-3">

          <img
            src={user.photoURL}
            alt="user"
            className="w-9 h-9 rounded-full border"
          />

          <span className="hidden md:block text-sm text-gray-300">
            {user.displayName}
          </span>

          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg text-sm"
          >
            Logout
          </button>

        </div>
      )}

    </nav>
  );
}