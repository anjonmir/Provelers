import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await login(email, password);
      navigate("/profile");
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="auth-overlay">
      <div className="auth-card">
        <h2>Welcome Back</h2>
        <p className="subtitle">Login to continue your journey</p>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="primary-btn" onClick={handleLogin}>
          Login
        </button>

        <p className="switch">
          Don’t have an account? <Link to="/register">Sign up</Link>
        </p>

        <button className="close-btn" onClick={() => navigate(-1)}>
          ✕
        </button>
      </div>
    </div>
  );
}
