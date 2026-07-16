import {
  useMemo,
  useState,
  useEffect,
} from "react";

import {
  useLocation,
} from "react-router-dom";

import PlaceDetailModal from "./PlaceDetailModal";

import TripCreateModal from "../trip/TripCreateModal";

import HiddenGemButton from "./HiddenGemButton";

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

  const location = useLocation();

  const [selectedFilter, setSelectedFilter] =
    useState("All")

  const [searchTerm,
    setSearchTerm] =
    useState("");

  const places = getPlaces();
  const [showHiddenGemModal,
    setShowHiddenGemModal] =
    useState(false);

  const filteredPlaces = useMemo(() => {

    return places.filter(
      (place: any) => {

        const matchesFilter =
          selectedFilter === "All" ||
          place.category === selectedFilter;

        const matchesSearch =
          place.name
            .toLowerCase()
            .includes(
              searchTerm.toLowerCase()
            ) ||

          place.location
            .toLowerCase()
            .includes(
              searchTerm.toLowerCase()
            );

        return (
          matchesFilter &&
          matchesSearch
        );

      }
    );

  }, [
    places,
    selectedFilter,
    searchTerm,
  ]);

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
  const [selectedPlace,
    setSelectedPlace] =
    useState<any>(null);

  const [showPlaceModal,
    setShowPlaceModal] =
    useState(false);
  const [viewState,
    setViewState] =
    useState({
      longitude: 90.4125,
      latitude: 23.8103,
      zoom: 6,
    });

  const [userLocation,
    setUserLocation] =
    useState<{
      lat: number;
      lng: number;
    } | null>(null);

  useEffect(() => {

    navigator.geolocation.getCurrentPosition(
      (position) => {

        const lat =
          position.coords.latitude;

        const lng =
          position.coords.longitude;

        setUserLocation({
          lat,
          lng,
        });

        setViewState({
          latitude: lat,
          longitude: lng,
          zoom: 12,
        });

      },
      (error) => {
        console.log(error);
      }
    );

  }, []);

  useEffect(() => {

    const params =
      new URLSearchParams(location.search);

    const placeName =
      params.get("place");

    if (!placeName) return;

    const foundPlace =
      places.find(
        (place: any) =>
          place.name === placeName
      ) as any;
    if (!foundPlace) return;

    setViewState({

      latitude: foundPlace.lat,

      longitude: foundPlace.lng,

      zoom: 12,

    });

    setSelectedPlace(foundPlace);

    setShowPlaceModal(true);

  }, [location.search]);


  const handleSearch = () => {

    const foundPlace: any =
      places.find(
        (place: any) =>
          place.name
            .toLowerCase()
            .includes(
              searchTerm.toLowerCase()
            )
      );

    if (!foundPlace) return;

    setViewState({
      latitude: foundPlace.lat,
      longitude: foundPlace.lng,
      zoom: 12,
    });

    setSelectedPlace(foundPlace);
    setShowPlaceModal(true);
  };
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

              value={searchTerm}

              onChange={(e) =>
                setSearchTerm(
                  e.target.value
                )
              }

              onKeyDown={(e) => {

                if (e.key === "Enter") {
                  handleSearch();
                }

              }}

              placeholder="Search Sajek, Cox's Bazar..."
            />

            <SmartFilters
              selected={selectedFilter}
              onSelect={setSelectedFilter}
            />

          </div>

          <Map
            {...viewState}

            onMove={(evt) =>
              setViewState(
                evt.viewState
              )
            }
            mapStyle="mapbox://styles/mapbox/navigation-day-v1"
            mapboxAccessToken={
              import.meta.env
                .VITE_MAPBOX_TOKEN
            }
          >
            <HiddenGemButton
              onClick={() =>
                setShowHiddenGemModal(true)
              }
            />
            <NavigationControl />
            {userLocation && (

              <Marker
                longitude={
                  userLocation.lng
                }
                latitude={
                  userLocation.lat
                }
              >

                <div
                  style={{
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    background:
                      "#2563eb",
                    border:
                      "3px solid white",
                    boxShadow:
                      "0 0 0 6px rgba(37,99,235,.25)",
                  }}
                />

              </Marker>

            )}

            {filteredPlaces.map(
              (place: any) => (
                <Marker
                  key={place.id}
                  longitude={place.lng}
                  latitude={place.lat}
                >

                  <button
                    className="marker-btn"
                    onClick={() => {



                      setSelectedPlace(place);

                      setShowPlaceModal(true);

                    }}
                  >
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
        onCreateTrip={() => { }}
      />
      <PlaceDetailModal
        isOpen={
          showPlaceModal
        }
        onClose={() =>
          setShowPlaceModal(
            false
          )
        }
        place={
          selectedPlace
        }
      />


    </section>
  );
}

export default MapContainer;