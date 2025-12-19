import "./Navbar.css";

type Props = {
  onAuthOpen: () => void;
};

export default function Navbar({ onAuthOpen }: Props) {
  return (
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
        { <button onClick={onAuthOpen}>Log In / Sign Up</button> 
        

        }
      </div>
    </div>
  );
}