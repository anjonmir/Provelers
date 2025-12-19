// components/AuthModal/AuthModal.tsx
import "./AuthModal.css";

type Props = {
  isOpen: boolean;
  mode: "login" | "register";
  onClose: () => void;
  onModeChange: (mode: "login" | "register") => void;
};

export default function AuthModal({
  isOpen,
  mode,
  onClose,
  onModeChange,
}: Props) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content flip-modal">
        <span className="close-modal" onClick={onClose}>
          &times;
        </span>

        {/* IMPORTANT: ORDER MUST NOT CHANGE */}
        <div id="container" className={mode === "register" ? "active" : ""}>
          {/* LOGIN */}
          <div className="login">
            <div className="content">
              <h1>Log In</h1>
              <form>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <span className="forget">Forgot password?</span>
                <span className="clearfix"></span>
                <button type="button">Log In</button>
              </form>
            </div>
          </div>

          {/* FRONT PAGE */}
          <div className="page front">
            <div className="content">
              <h1>Hello, friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button type="button" onClick={() => onModeChange("register")}>
                Register
              </button>
            </div>
          </div>

          {/* BACK PAGE */}
          <div className="page back">
            <div className="content">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login</p>
              <button type="button" onClick={() => onModeChange("login")}>
                Log In
              </button>
            </div>
          </div>

          {/* REGISTER */}
          <div className="register">
            <div className="content">
              <h1>Sign Up</h1>
              <form>
                <input type="text" placeholder="name" />
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <span className="clearfix"></span>
                <button type="button">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
