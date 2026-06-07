import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import {
  signInWithGoogle,
} from "../../services/authService";

import useAuth from "../../hooks/useAuth";

import "./auth.css";

function Register() {
  const handleGoogleSignup =
    async () => {
      try {
        await signInWithGoogle();

        navigate(
          "/complete-profile"
        );
      } catch (error) {
        console.error(error);
      }
    };
  const { register } = useAuth();

  const navigate = useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const handleRegister = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setError("");

    if (
      !name ||
      !email ||
      !password
    ) {
      return setError(
        "Please fill all fields."
      );
    }

    if (password.length < 6) {
      return setError(
        "Password must be at least 6 characters."
      );
    }

    try {
      setLoading(true);

      await register(
        name,
        email,
        password
      );

      navigate("/complete-profile");
    } catch (err: any) {
      setError(
        err.message ||
        "Registration failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div
        className={`auth-card ${loading ? "auth-loading" : ""
          }`}
      >
        <button
          className="auth-close-btn"
          onClick={() => navigate(-1)}
        >
          ✕
        </button>

        <div className="auth-logo">
          <h1>Create Account</h1>

          <p>
            Start exploring Bangladesh
            smarter.
          </p>
        </div>

        {error && (
          <div className="auth-error">
            {error}
          </div>
        )}

        <form
          className="auth-form"
          onSubmit={handleRegister}
        >
          <div className="auth-input-group">
            <label>Name</label>

            <input
              type="text"
              className="auth-input"
              placeholder="Enter your name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            />
          </div>

          <div className="auth-input-group">
            <label>Email</label>

            <input
              type="email"
              className="auth-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />
          </div>

          <div className="auth-input-group">
            <label>Password</label>

            <input
              type="password"
              className="auth-input"
              placeholder="Create password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
            />
          </div>

          <button
            type="submit"
            className="auth-submit-btn"
          >
            {loading
              ? "Creating Account..."
              : "Sign Up"}
          </button>
          <div className="auth-divider">
            <span>OR</span>
          </div>

          <button
            type="button"
            className="google-btn"
            onClick={handleGoogleSignup}
          >
            Continue with Google
          </button>
        </form>

        <div className="auth-switch">
          Already have an account?{" "}
          <Link to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;