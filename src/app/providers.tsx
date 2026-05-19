import type { ReactNode } from "react";

import { Toaster } from "react-hot-toast";

import { AuthProvider } from "../context/AuthContext";
import { MapProvider } from "../context/MapContext";

type Props = {
  children: ReactNode;
};

function Providers({ children }: Props) {
  return (
    <AuthProvider>
      <MapProvider>
        {children}

        <Toaster
          position="top-right"
          reverseOrder={false}
        />
      </MapProvider>
    </AuthProvider>
  );
}

export default Providers;