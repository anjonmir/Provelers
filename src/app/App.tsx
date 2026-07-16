import { useEffect } from "react";

import useAuth from "../hooks/useAuth";

import { socket } from "../services/socket";

import AppRoutes from "./routes";

function App() {
  const { user } = useAuth();
  useEffect(() => {

    if (!user) {

      socket.disconnect();

      return;

    }

    socket.connect();

    socket.emit("join", user.uid);

    return () => {

      socket.disconnect();

    };

  }, [user]);
  return <AppRoutes />;
}

export default App;