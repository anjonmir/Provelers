import { useState } from "react";

import Map, {
  Marker,
  Popup,
  NavigationControl,
} from "react-map-gl/mapbox";

import "mapbox-gl/dist/mapbox-gl.css";

import {
  touristPlaces,
} from "../../services/mapService";

import MarkerPopup from "./MarkerPopup";
import SmartFilters from "./SmartFilters";
import MapSidebar from "./MapSidebar";

import "./map.css";

function MapContainer() {
  const [selectedPlace, setSelectedPlace] =
    useState<any>(null);

  const [filter, setFilter] =
    useState("All");

  const filteredPlaces =
    filter === "All"
      ? touristPlaces
      : touristPlaces.filter(
          (place) =>
            place.category === filter
        );

  return (
    <div className="map-layout">
      <MapSidebar places={filteredPlaces} />

      <div className="map-wrapper">
        <div className="map-overlay">
          <div>
            <h2>Smart Travel Map</h2>

            <p>
              Discover places interactively
              with live maps.
            </p>
          </div>

          <SmartFilters
            selected={filter}
            onSelect={setFilter}
          />
        </div>

        <Map
          initialViewState={{
            longitude: 90.4125,
            latitude: 23.8103,
            zoom: 6,
          }}
          style={{
            width: "100%",
            height: "100%",
          }}
          mapStyle="mapbox://styles/mapbox/streets-v12"
          mapboxAccessToken={
            import.meta.env.VITE_MAPBOX_TOKEN
          }
        >
          <NavigationControl position="top-right" />

          {filteredPlaces.map((place) => (
            <Marker
              key={place.id}
              longitude={place.lng}
              latitude={place.lat}
              anchor="bottom"
            >
              <button
                className="marker-btn"
                onClick={() =>
                  setSelectedPlace(place)
                }
              >
                📍
              </button>
            </Marker>
          ))}

          {selectedPlace && (
            <Popup
              longitude={selectedPlace.lng}
              latitude={selectedPlace.lat}
              anchor="top"
              onClose={() =>
                setSelectedPlace(null)
              }
            >
              <MarkerPopup
                place={selectedPlace}
              />
            </Popup>
          )}
        </Map>
      </div>
    </div>
  );
}

export default MapContainer;