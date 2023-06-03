export interface IGame {
  id: number;
  slug: string;
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
  requirements_en?: Requirementsen;
  requirements_ru?: any;
}

interface Requirementsen {
  minimum: string;
  recommended: string;
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
