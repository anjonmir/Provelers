import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import "./Register.css";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await register(name, email, password);
      navigate("/profile");
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="auth-overlay">
      <div className="auth-card">
        <h2>Create Account</h2>
        <p className="subtitle">Start your travel story</p>

        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

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

        <button className="primary-btn" onClick={handleRegister}>
          Sign Up
        </button>

        <p className="switch">
          Already have an account? <Link to="/login">Login</Link>
        </p>

        <button className="close-btn" onClick={() => navigate(-1)}>
          ✕
        </button>
      </div>
    </div>
  );
}
