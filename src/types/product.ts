export interface Product {
  id: string;
  name: string;
  type: string;
  size: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  badge?: string;
  image: string;
  gallery?: string[];
  shortDescription: string;
  description: string;
  benefits?: string[];
  wearingMethod?: string;
  mantras?: string;
  faces?: number;
  origin: string;
  certification: boolean;
  featured?: boolean;
}