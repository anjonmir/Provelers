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
  return (
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
  );
}

export default ProfilePage;