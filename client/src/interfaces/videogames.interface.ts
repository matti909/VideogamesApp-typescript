export interface IGame {
  id: number;
  slug?: string;
  name: string;
  released?: string;
  background_image?: string;
  rating: number;
  platforms: IPlatform[];
  genres: string[] | IGenre[];
}

export interface IGenre {
  id?: number;
  name?: string;
}

export interface IPlatform {
  id?: number;
  name: string;
}

export type Filter = null | ((game: IGenre) => boolean);
