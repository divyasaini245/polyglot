import { useNavigate } from "react-router-dom";
import polyglotLogo from "../assets/Polyglot.png";

function Navbar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  }

  return (
    <nav className="bg-black/80 backdrop-blur-md border-b border-gray-800 px-6 py-3 flex justify-between items-center sticky top-0 z-50">
      <img
        src={polyglotLogo}
        alt="Polyglot"
        className="h-8 cursor-pointer"
        onClick={() => navigate("/dashboard")}
      />

      <div className="flex gap-4 items-center">
        <button
          onClick={() => navigate("/history")}
          className="text-gray-300 hover:text-white transition text-sm font-medium"
        >
          History
        </button>
        <button
          onClick={handleLogout}
          className="bg-gray-800 hover:bg-red-600 transition px-4 py-2 rounded-lg text-sm font-medium"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;