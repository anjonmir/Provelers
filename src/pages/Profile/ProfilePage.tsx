import { useEffect, useState } from "react";

import useAuth from "../../hooks/useAuth";

import { getUser }
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

import "../../components/profile/profile.css";

function ProfilePage() {

  const { user } = useAuth();

  const [profile,
    setProfile] = useState<any>(null);

  const [loading,
    setLoading] = useState(true);

  useEffect(() => {

    if (!user) return;

    async function loadProfile() {

      try {

        const data =
          await getUser(user!.uid);

        setProfile(data);

      } catch (err) {

        console.error(err);

      } finally {

        setLoading(false);

      }

    }

    loadProfile();

  }, [user]);

  if (loading) {

    return <h2>Loading...</h2>;

  }

  return (

    <UserContext.Provider
      value={profile}
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