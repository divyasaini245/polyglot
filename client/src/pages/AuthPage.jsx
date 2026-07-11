import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const endpoint = isLogin ? "/auth/login" : "/auth/signup";
      const payload = isLogin
        ? { email: formData.email, password: formData.password }
        : formData;

      const res = await API.post(endpoint, payload);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }
return (
  <div className="min-h-screen bg-black flex items-center justify-center text-white px-4 relative overflow-hidden">
    {/* Background glow effect */}
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>

    <div className="w-full max-w-sm relative z-10">
      <h2 className="text-3xl font-bold mb-2 text-center">
        {isLogin ? "Welcome back" : "Create account"}
      </h2>
      <p className="text-gray-400 text-center mb-8 text-sm">
        {isLogin
          ? "Login to continue to Polyglot"
          : "Sign up to get started with Polyglot"}
      </p>

      {error && (
        <p className="bg-red-900/40 border border-red-700 text-red-300 text-sm rounded-lg px-4 py-2 mb-4">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {!isLogin && (
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-gray-900/80 border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition"
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-gray-900/80 border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="bg-gray-900/80 border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-500 transition py-3 rounded-xl font-semibold mt-2 disabled:opacity-50 shadow-lg shadow-blue-600/30"
        >
          {loading ? "Please wait..." : isLogin ? "Login" : "Sign Up"}
        </button>
      </form>

      <p className="text-gray-400 text-center mt-6 text-sm">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <span
          onClick={() => setIsLogin(!isLogin)}
          className="text-blue-400 cursor-pointer hover:underline font-medium"
        >
          {isLogin ? "Sign Up" : "Login"}
        </span>
      </p>
    </div>
  </div>
  );
}

export default AuthPage;