export interface HiddenGem {
  id: number;
  name: string;
  description: string;
  reviewStatus:
    | "pending"
    | "approved"
    | "rejected";

  lat: number | null;
  lng: number | null;
}