import {
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import ProtectedRoute from "./ProtectedRoute";

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
import ForgotPassword from "../pages/Auth/ForgotPassword";

import CompleteProfilePage from "../pages/CompleteProfile/CompleteProfilePage";

import NotFound from "../pages/NotFound/NotFound";

function AppRoutes() {
  return (
    <Routes>

      {/* LANDING */}

      <Route
        element={<MainLayout />}
      >
        <Route
          path="/"
          element={<LandingPage />}
        />
      </Route>

      {/* COMPLETE PROFILE */}

      <Route
        path="/complete-profile"
        element={
          <ProtectedRoute>
            <CompleteProfilePage />
          </ProtectedRoute>
        }
      />

      {/* DASHBOARD */}

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
          element={
            <CommunityPage />
          }
        />

        <Route
          path="/trips"
          element={<TripPage />}
        />

        <Route
          path="/leaderboard"
          element={
            <LeaderboardPage />
          }
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

      {/* AUTH */}

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
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