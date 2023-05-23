export interface IGame {
  id: number;
  slug?: string;
  name: string;
  released?: string;
  background_image: string;
  rating: number;
  platforms: IPlatform[];
  genres: string[] | IGenre[];
}

export interface IGenre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

export interface IPlatform {
  id: number;
  name: string;
  slug: string;
  image?: any;
  games_count?: number;
  image_background: string;
}
