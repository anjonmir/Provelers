export type HiddenGem = {
  id: number;

  name: string;

  location: string;

  postalAddress: string;

  category: string;

  image: string;

  description: string;

  rating: number;

  reviews: number;

  savedCount: number;

  latitude?: number | null;
  
  longitude?: number | null;

  hiddenGem: true;

  createdBy: string;

  reviewStatus: "pending" | "approved";
};
export const mockHiddenGemQueue: HiddenGem[] = [];
