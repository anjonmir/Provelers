import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "./MapPage.css";

// Mapbox public token
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

export default function MapPage() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/navigation-day-v1", // Google-like
      center: [90.4125, 23.8103], // Dhaka
      zoom: 11,
    });

    // Zoom & rotation controls
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="map-page">
      <div ref={mapContainerRef} className="map-container" />
    </div>
  );
}
