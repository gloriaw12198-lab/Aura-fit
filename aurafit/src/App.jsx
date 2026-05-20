import { useEffect } from "react";
import { HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { testFirestoreWrite } from "./tests/firestoreTest";

export default function App() {
  useEffect(() => {
    testFirestoreWrite();
  }, []);

  return (
    <HashRouter>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <Navbar />
        <AppRoutes />
      </div>
    </HashRouter>
  );
}
