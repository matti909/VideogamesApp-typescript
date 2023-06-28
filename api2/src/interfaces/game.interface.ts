export interface IGame {
  id: number;

  name: string;
  description?: string;
  released: string;
  background_image: string;
  rating: number;
  platforms: IPlatform2[] | IPlatform[];
  genres: string[] | IGenre[];
}

export interface IGenre {
  id: number;
  name: string;
}

export interface IPlatform2 {
  platform: IPlatform;
  released_at: string;
}

export interface IPlatform {
  id: number;
  name: string;
}

interface RootObject {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  released: string;
  rating: number;
  platforms: string[];
  genres: string[];
}
