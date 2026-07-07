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

  latitude: number | null;

  longitude: number | null;

};

export const mockHiddenGemQueue: HiddenGem[] = [];