import { mockPlaces }
  from "../data/mockPlaces";

import {
  mockHiddenGemQueue,
} from "../data/mockHiddenGemQueue";

export const getPlaces = () => {

  return [
    ...mockPlaces,
    ...mockHiddenGemQueue,
  ];

};