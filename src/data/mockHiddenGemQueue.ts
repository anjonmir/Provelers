export type HiddenGem = {
  id: number;

  name: string;

  description: string;

  location: string;

  category: string;

  image?: string;

  reviewStatus:
    | "pending"
    | "approved";

  createdBy: string;

  lat: number | null;

  lng: number | null;
};

export const mockHiddenGemQueue: HiddenGem[] = [];