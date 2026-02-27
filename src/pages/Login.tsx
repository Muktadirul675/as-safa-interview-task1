import { useState } from "react";
import { FiLock, FiMail } from "react-icons/fi";
import { useNavigate } from "react-router";
import Spinner from "../components/ui/Spinner";
import { useAuth } from "../stores/auth";

export default function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const from = "/dashboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (err: any) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);  
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Welcome Back
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="relative">
            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-50 text-gray-800 pl-12 pr-4 py-3 rounded-xl 
                         border border-gray-200
                         focus:outline-none focus:ring-2 focus:ring-green-500
                         focus:border-green-500
                         transition duration-200"
              required
            />
          </div>

          <div className="relative">
            <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-50 text-gray-800 pl-12 pr-4 py-3 rounded-xl
                         border border-gray-200
                         focus:outline-none focus:ring-2 focus:ring-green-500
                         focus:border-green-500
                         transition duration-200"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-green-600 hover:bg-green-700 
                        text-white py-3 rounded-xl font-semibold
                        transition duration-200 shadow-md
                        flex items-center justify-center gap-2
                        ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {loading ? (
              <>
                <Spinner size="sm" />
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}