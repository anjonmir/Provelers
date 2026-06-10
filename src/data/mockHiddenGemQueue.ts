// import { HiddenGem }
// from "../types/hiddenGem";

// export const mockHiddenGemQueue:
//   HiddenGem[] = [];


type HiddenGem = {
  id: number;
  name: string;
  description: string;
  reviewStatus: string;
  lat: number | null;
  lng: number | null;
};

export const mockHiddenGemQueue: HiddenGem[] = [];