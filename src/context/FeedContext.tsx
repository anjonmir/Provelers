import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

type Coordinates = {
  lng: number;
  lat: number;
};

type MapContextType = {
  selectedPlace: string | null;

  setSelectedPlace: (
    place: string | null
  ) => void;

  coordinates: Coordinates;

  setCoordinates: (
    coordinates: Coordinates
  ) => void;
};

const MapContext =
  createContext<MapContextType | null>(null);

type Props = {
  children: ReactNode;
};

export function MapProvider({
  children,
}: Props) {
  const [selectedPlace, setSelectedPlace] =
    useState<string | null>(null);

  const [coordinates, setCoordinates] =
    useState<Coordinates>({
      lng: 90.4125,
      lat: 23.8103,
    });

  return (
    <MapContext.Provider
      value={{
        selectedPlace,
        setSelectedPlace,

        coordinates,
        setCoordinates,
      }}
    >
      {children}
    </MapContext.Provider>
  );
}

export function useMapContext() {
  const context = useContext(MapContext);

  if (!context) {
    throw new Error(
      "useMapContext must be used inside MapProvider"
    );
  }

  return context;
}