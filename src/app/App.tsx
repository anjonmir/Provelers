// src/app/App.tsx
import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import AuthModal from "../components/AuthModal/AuthModal";
import Router from "./Router";

function App() {
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");

  return (
    <>
      <Navbar onAuthOpen={() => setAuthOpen(true)} />

        <Router />

      <AuthModal
        isOpen={authOpen}
        mode={authMode}
        onClose={() => setAuthOpen(false)}
        onModeChange={setAuthMode}
      />
    </>
  );
}

export default App;
