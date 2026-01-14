import type { ReactNode } from "react";
import { AuthProvider } from "../context/AuthContext";
// import { MapProvider } from "../context/MapContext";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}


{/* <AuthProvider>
  <MapProvider>
    <QueryClientProvider>
      {children}
    </QueryClientProvider>
  </MapProvider>
</AuthProvider> */}
