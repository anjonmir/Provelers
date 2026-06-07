import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInWithGoogle } from "../../services/authService";
import ForgotPassword from "./ForgotPassword";
import useAuth from "../../hooks/useAuth";

import "./auth.css";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showForgot, setShowForgot] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate("/complete-profile");
    } catch (error) {
      console.error(error);
      setError("Google sign-in failed.");
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);
      await login(email, password);
      navigate("/feed");
    } catch (err: any) {
      setError(err.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className={`auth-card ${loading ? "auth-loading" : ""}`}>
        <button
          className="auth-close-btn"
          onClick={() => navigate(-1)}
          type="button"
        >
          ✕
        </button>

        <div className="auth-logo">
          <h1>Provelers</h1>
          <p>Welcome back to your travel journey.</p>
        </div>

        {error && <div className="auth-error">{error}</div>}

        <form className="auth-form" onSubmit={handleLogin}>
          <div className="auth-input-group">
            <label>Email</label>
            <input
              type="email"
              className="auth-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="auth-input-group">
            <label>Password</label>
            <input
              type="password"
              className="auth-input"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="auth-submit-btn"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <div className="auth-divider">
            <span>OR</span>
          </div>

          <button
            type="button"
            className="google-btn"
            onClick={handleGoogleLogin}
            disabled={loading}
          >
            Continue with Google
          </button>
        </form>

        <div className="forgot-password">
          <button
            type="button"
            onClick={() => setShowForgot(true)}
          >
            Forgot Password?
          </button>
        </div>

        <div className="auth-switch">
          Don’t have an account? <Link to="/register">Sign Up</Link>
        </div>
      </div>

      {showForgot && (
        <ForgotPassword
          onClose={() => setShowForgot(false)}
        />
      )}
    </div>
  );
}

export default Login;