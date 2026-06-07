import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import LandingPage from "../pages/Landing/LandingPage";

import FeedPage from "../pages/Feed/FeedPage";
import MapPage from "../pages/Map/MapPage";
import CommunityPage from "../pages/Community/CommunityPage";
import TripPage from "../pages/Trip/TripPage";
import LeaderboardPage from "../pages/Leaderboard/LeaderboardPage";
import ProfilePage from "../pages/Profile/ProfilePage";
import ChatPage from "../pages/Chat/ChatPage";

import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

import ProtectedRoute from "./ProtectedRoute";

import NotFound from "../pages/NotFound/NotFound";
import CompleteProfilePage from "../pages/CompleteProfile/CompleteProfilePage";

function AppRoutes() {
  return (
    <Routes>
      {/* Landing */}

      <Route element={<MainLayout />}>
        <Route
          path="/"
          element={<LandingPage />}
        />
      </Route>

      {/* Protected Dashboard */}

      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route
          path="/feed"
          element={<FeedPage />}
        />

        <Route
          path="/map"
          element={<MapPage />}
        />

        <Route
          path="/community"
          element={<CommunityPage />}
        />

        <Route
          path="/trips"
          element={<TripPage />}
        />

        <Route
          path="/leaderboard"
          element={<LeaderboardPage />}
        />

        <Route
          path="/profile"
          element={<ProfilePage />}
        />

        <Route
          path="/chat"
          element={<ChatPage />}
        />
      </Route>

      {/* Auth */}

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />
      <Route
  path="/complete-profile"
  element={<CompleteProfilePage />}
/>

      {/* 404 */}

      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
}

export default AppRoutes;