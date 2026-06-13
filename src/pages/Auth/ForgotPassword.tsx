import { useState } from "react";

import useAuth from "../../hooks/useAuth";

type Props = {
  onClose?: () => void;
};

function ForgotPassword({
  onClose,
}: Props) {
  const { resetPassword } = useAuth();

  const [email, setEmail] =
    useState("");

  const [message, setMessage] =
    useState("");

  const [error, setError] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleReset = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setError("");
    setMessage("");

    if (!email) {
      return setError(
        "Please enter your email."
      );
    }

    try {
      setLoading(true);

      await resetPassword(email);

      setMessage(
        "Password reset email sent successfully."
      );
    } catch (err: any) {
      setError(
        err.message ||
          "Failed to send reset email."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot-overlay">
      <div className="forgot-modal">
        <button
          className="auth-close-btn"
          onClick={() => onClose?.()}
        >
          ✕
        </button>

        <h2>Forgot Password</h2>

        <p>
          Enter your email to receive a
          password reset link.
        </p>

        {error && (
          <div className="auth-error">
            {error}
          </div>
        )}

        {message && (
          <div className="auth-success">
            {message}
          </div>
        )}

        <form onSubmit={handleReset}>
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

          <button
            type="submit"
            className="auth-submit-btn"
          >
            {loading
              ? "Sending..."
              : "Send Reset Link"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;