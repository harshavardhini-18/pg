import { createContext, useState } from "react";

export const LocationContext = createContext();

export function LocationProvider({ children }) {
  const [userLocation, setUserLocation] = useState(null);

  return (
    <LocationContext.Provider
      value={{ userLocation, setUserLocation }}
    >
      {children}
    </LocationContext.Provider>
  );
}
