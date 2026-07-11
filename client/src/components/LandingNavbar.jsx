import { useState } from "react";
import { useNavigate } from "react-router-dom";
import polyglotLogo from "../assets/Polyglot.png";
import { useTheme } from "../context/ThemeContext";

function LandingNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  function scrollTo(id) {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav 
  className="bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 px-8 flex justify-between items-center sticky top-0 z-50"
  style={{ minHeight: "70px" }}
>
      <img src={polyglotLogo} alt="Polyglot" className="h-9" />

      {/* Desktop links */}
      <div className="hidden md:flex gap-8 items-center">
        <button onClick={() => scrollTo("home")} className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition text-base font-medium">
          Home
        </button>
        <button onClick={() => scrollTo("about")} className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition text-base font-medium">
          About
        </button>
        <button onClick={() => scrollTo("how-it-works")} className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition text-base font-medium">
          How It Works
        </button>
        <button onClick={() => scrollTo("why-us")} className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition text-base font-medium">
          Why Us
        </button>
        <button onClick={() => scrollTo("contact")} className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition text-base font-medium">
          Contact
        </button>

        <button
          onClick={toggleTheme}
          className="text-xl w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>

        <button
          onClick={() => navigate("/auth")}
          className="bg-blue-600 hover:bg-blue-500 transition px-6 py-2.5 rounded-lg text-base font-semibold text-white"
        >
          Get Started
        </button>
      </div>

      {/* Mobile: theme toggle + hamburger */}
      <div className="flex md:hidden items-center gap-3">
        <button
          onClick={toggleTheme}
          className="text-xl w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>

        <button className="text-black dark:text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 flex flex-col md:hidden">
          <button onClick={() => scrollTo("home")} className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition text-base font-medium px-6 py-3 text-left">
            Home
          </button>
          <button onClick={() => scrollTo("about")} className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition text-base font-medium px-6 py-3 text-left">
            About
          </button>
          <button onClick={() => scrollTo("how-it-works")} className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition text-base font-medium px-6 py-3 text-left">
            How It Works
          </button>
          <button onClick={() => scrollTo("why-us")} className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition text-base font-medium px-6 py-3 text-left">
            Why Us
          </button>
          <button onClick={() => scrollTo("contact")} className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition text-base font-medium px-6 py-3 text-left">
            Contact
          </button>
          <button
            onClick={() => navigate("/auth")}
            className="bg-blue-600 hover:bg-blue-500 transition mx-6 my-3 px-5 py-2.5 rounded-lg text-base font-semibold text-white"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}

export default LandingNavbar;