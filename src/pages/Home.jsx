import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center h-[80vh] px-6">
      <h1 className="text-5xl font-bold text-blue-400">
        AuraFit
      </h1>

      <p className="text-gray-300 mt-4 max-w-md">
        Your smart outfit generator powered by weather + AI styling.
      </p>

      <Link
        to="/dashboard"
        className="mt-6 bg-blue-500 px-6 py-3 rounded-xl hover:bg-blue-600"
      >
        Get Started
      </Link>
    </div>
  );
}
  

      


