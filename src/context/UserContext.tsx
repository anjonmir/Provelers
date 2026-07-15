import { createContext } from "react";

export const UserContext =
createContext<any>({
  profile: null,
  setProfile: () => {},
  isOwner: false,
  tripId: null,
});