import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import MapPage from "../pages/Map/MapPage";
import Profile from "../pages/Profile/Profile";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected */}
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
