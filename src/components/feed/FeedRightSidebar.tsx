import TrendingPlaces from "./TrendingPlaces";
import TopTravelers from "./TopTravelers";
import UpcomingEvents from "./UpcomingEvents";
import SuggestedTravelers from "./SuggestedTravelers";

import "./feed.css";

function FeedRightSidebar() {
  return (
    <div className="feed-right-sidebar">

      <TrendingPlaces />

      <TopTravelers />

      <UpcomingEvents />

      <SuggestedTravelers />

    </div>
  );
}

export default FeedRightSidebar;