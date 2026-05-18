import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Login() {
  const { user, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
      <div className="bg-gray-900 p-8 rounded-2xl w-full max-w-md text-center">

        <h1 className="text-3xl font-bold mb-2">🏋️ AuraFit</h1>
        <p className="text-gray-400 mb-6">
          Sign in to continue your fitness journey
        </p>

        <button
          onClick={login}
          className="w-full bg-green-500 hover:bg-green-600 py-3 rounded-lg font-semibold"
        >
          Sign in with Google
        </button>

      </div>
    </div>
  );
}