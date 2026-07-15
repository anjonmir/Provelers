import {
  useState,
  useContext,
  useEffect,
} from "react";

import { UserContext }
  from "../../context/UserContext";

import PersonalDetails from "./PersonalDetails";
import RecentTrips from "./RecentTrips";
import PhotosGrid from "./PhotosGrid";
import FollowersList from "./FollowersList";
import SavedPlaces from "./SavedPlaces";
import BlogSection from "./BlogSection";

import "./profile.css";

function ProfileTabs() {
  const {
    tab,
  } = useContext(UserContext);

  const [activeTab, setActiveTab] =
    useState(
      tab || "details"
    );
  useEffect(() => {
    if (tab) {
      setActiveTab(tab);
    }
  }, [tab]);
  return (
    <div className="profile-tabs-wrapper">

      <div className="profile-tabs">

        <button
          className={
            activeTab === "details"
              ? "active"
              : ""
          }
          onClick={() =>
            setActiveTab("details")
          }
        >
          Personal Details
        </button>

        <button
          className={
            activeTab === "trips"
              ? "active"
              : ""
          }
          onClick={() =>
            setActiveTab("trips")
          }
        >
          Trips
        </button>

        <button
          className={
            activeTab === "photos"
              ? "active"
              : ""
          }
          onClick={() =>
            setActiveTab("photos")
          }
        >
          Photos
        </button>

        <button
          className={
            activeTab === "travelers"
              ? "active"
              : ""
          }
          onClick={() =>
            setActiveTab(
              "travelers"
            )
          }
        >
          Travelers
        </button>

        <button
          className={
            activeTab === "saved"
              ? "active"
              : ""
          }
          onClick={() =>
            setActiveTab("saved")
          }
        >
          Saved Places
        </button>

        <button
          className={
            activeTab === "blog"
              ? "active"
              : ""
          }
          onClick={() =>
            setActiveTab("blog")
          }
        >
          Blog
        </button>

      </div>

      <div className="profile-tab-content">

        {activeTab ===
          "details" && (
            <PersonalDetails />
          )}

        {activeTab ===
          "trips" && (
            <RecentTrips />
          )}

        {activeTab ===
          "photos" && (
            <PhotosGrid />
          )}

        {activeTab ===
          "travelers" && (
            <FollowersList />
          )}

        {activeTab ===
          "saved" && (
            <SavedPlaces />
          )}

        {activeTab ===
          "blog" && (
            <BlogSection />
          )}

      </div>

    </div>
  );
}

export default ProfileTabs;