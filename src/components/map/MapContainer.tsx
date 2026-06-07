import { useMemo, useState } from "react";
import TripCreateModal from "../trip/TripCreateModal";

import Map, {
  Marker,
  NavigationControl,
} from "react-map-gl/mapbox";

import "mapbox-gl/dist/mapbox-gl.css";

import MapSidebar from "./MapSidebar";
import NearbyPlaces from "./NearbyPlaces";
import NearbyTravelers from "./NearbyTravelers";
import RecentQuestions from "./RecentQuestions";
import SmartFilters from "./SmartFilters";



import { getPlaces } from "../../services/mapService";

import "./map.css";


function MapContainer() {

  const [selectedFilter, setSelectedFilter] =
    useState("All");

  const places = getPlaces();

  const filteredPlaces = useMemo(() => {
    if (selectedFilter === "All") {
      return places;
    }

    return places.filter(
      (place) =>
        place.category === selectedFilter
    );
  }, [places, selectedFilter]);

  const getPinColor = (
    category: string
  ) => {
    switch (category) {
      case "Beach":
        return "#f97316";

      case "Hiking":
        return "#22c55e";

      case "Hidden Gem":
        return "#eab308";

      case "Historical":
        return "#3b82f6";

      default:
        return "#ef4444";
    }
  };

  const [showModal, setShowModal] = useState(false);
  return (
    <section className="map-page">

      <aside className="map-left">
        <MapSidebar />
      </aside>

      <main className="map-center">

        <div className="map-wrapper">

          <div className="map-overlay">

            <input
              className="map-search-input"
              placeholder="Search places, cities, categories..."
            />

            <SmartFilters
              selected={selectedFilter}
              onSelect={setSelectedFilter}
            />

          </div>

          <Map
            initialViewState={{
              longitude: 90.4125,
              latitude: 23.8103,
              zoom: 6,
            }}
            mapStyle="mapbox://styles/mapbox/navigation-day-v1"
            mapboxAccessToken={
              import.meta.env
                .VITE_MAPBOX_TOKEN
            }
          >
            <NavigationControl />

            {filteredPlaces.map(
              (place) => (
                <Marker
                  key={place.id}
                  longitude={place.lng}
                  latitude={place.lat}
                >
                  <button className="marker-btn">
                    <div
                      className="map-pin"
                      style={{
                        background:
                          getPinColor(
                            place.category
                          ),
                      }}
                    />
                  </button>
                </Marker>
              )
            )}
          </Map>

        </div>

      </main>

      <aside className="map-right">

        <NearbyPlaces />

        <NearbyTravelers />

        <RecentQuestions />


        <button
          className="primary-btn"
          onClick={() =>
            setShowModal(true)
          }
        >
          Create Your Trip
        </button>

      </aside>
      <TripCreateModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />


    </section>
  );
}

export default MapContainer;