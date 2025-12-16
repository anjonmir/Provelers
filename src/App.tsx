
import { useState } from "react";
import "./App.css";

export default function App() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"login" | "register">("login");

  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        <div className="nav-left">
          <img src="/logo.png" className="logo" />
          <div className="nav-links">
            <a>Home</a>
            <a>Explore</a>
            <a>Map</a>
            <a>Contact</a>
          </div>
        </div>
        <div className="auth-buttons">
          <button onClick={() => setOpen(true)}>Log In / Sign Up</button>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="modal">
          <div className="modal-content flip-modal">
            <span className="close" onClick={() => setOpen(false)}>&times;</span>

            <div id="container" className={mode === "register" ? "active" : "close"}>
              {/* Login */}
              <div className="login">
                <div className="content">
                  <h1>Log In</h1>
                  <input placeholder="email" />
                  <input type="password" placeholder="password" />
                  <button>Log In</button>
                </div>
              </div>

              {/* Flip pages */}
              <div className="page front">
                <div className="content">
                  <h1>Hello, friend!</h1>
                  <p>Enter your personal details and start journey with us</p>
                  <button onClick={() => setMode("register")}>Register</button>
                </div>
              </div>

              <div className="page back">
                <div className="content">
                  <h1>Welcome Back!</h1>
                  <p>To keep connected with us please login with your personal info</p>
                  <button onClick={() => setMode("login")}>Log In</button>
                </div>
              </div>

              {/* Register */}
              <div className="register">
                <div className="content">
                  <h1>Sign Up</h1>
                  <input placeholder="name" />
                  <input placeholder="email" />
                  <input type="password" placeholder="password" />
                  <button>Register</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


