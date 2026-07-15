import { useEffect, useState } from "react";

import useAuth from "../../hooks/useAuth";

import { getProfile }
  from "../../services/userService";

import { UserContext }
  from "../../context/UserContext";
import ProfileCover from "../../components/profile/ProfileCover";
import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileStats from "../../components/profile/ProfileStats";
import ProfileTabs from "../../components/profile/ProfileTabs";

import ExplorerRankCard from "../../components/profile/ExplorerRankCard";
import BadgeGrid from "../../components/profile/BadgeGrid";
import PointsHistory from "../../components/profile/PointsHistory";
import FriendsList from "../../components/profile/FriendsList";
import {
  useParams,
  useSearchParams,
} from "react-router-dom";

import "../../components/profile/profile.css";

function ProfilePage() {

  const { user } = useAuth();

  const [profile,
    setProfile] = useState<any>(null);

  const { firebaseUid } = useParams();
  const isOwner =
    !firebaseUid ||
    firebaseUid === user?.uid;

  const [searchParams] =
    useSearchParams();

  const tab =
    searchParams.get("tab");

  const tripId =
    searchParams.get("trip");

  const stopId =
    searchParams.get("stop");

  const [loading,
    setLoading] = useState(true);

  useEffect(() => {

    if (!user) return;

    async function loadProfile() {

      try {

        const uid =
          firebaseUid || user?.uid;

        if (!uid) return;

        const data =
          await getProfile(uid);

        setProfile(data);

      } catch (err) {

        console.error(err);

      } finally {

        setLoading(false);

      }

    }

    loadProfile();

  }, [user, firebaseUid]);

  if (loading) {

    return <h2>Loading...</h2>;

  }

  return (

    <UserContext.Provider
      value={{
        profile,
        setProfile,
        isOwner,
        tab,

        tripId,

        stopId,
      }}
    >

      <div className="profile-page">

        <ProfileCover />

        <ProfileHeader />

        <ProfileStats />

        <div className="profile-layout">

          <div className="profile-main">

            <ProfileTabs />

          </div>

          <div className="profile-sidebar">

            <ExplorerRankCard />

            <BadgeGrid />

            <PointsHistory />

            <FriendsList />

          </div>

        </div>

      </div>

    </UserContext.Provider>

  );

}

export default ProfilePage;