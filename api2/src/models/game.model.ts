import mongoose, { Schema, Document } from 'mongoose';

interface Requirementsen {
  minimum: string;
  recommended: string;
}

interface Platform {
  id: number;
  name: string;
  slug: string;
  image?: any;
  year_end?: any;
  year_start?: number;
  games_count: number;
  image_background: string;
}

interface Platform2 {
  platform: Platform;
  released_at: string;
  requirements_en?: Requirementsen;
  requirements_ru?: any;
}

interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface Game extends Document {
  id: number;
  slug: string;
  name: string;
  released: string;
  background_image: string;
  rating: number;
  platforms: Platform2[];
  genres: Genre[];
}

const RequirementsenSchema = new Schema<Requirementsen>({
  minimum: { type: String, required: true },
  recommended: { type: String, required: true }
});

const PlatformSchema = new Schema<Platform>({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  slug: { type: String, required: true },
  image: { type: Schema.Types.Mixed },
  year_end: { type: Schema.Types.Mixed },
  year_start: { type: Number },
  games_count: { type: Number, required: true },
  image_background: { type: String, required: true }
});

const Platform2Schema = new Schema<Platform2>({
  platform: { type: PlatformSchema, required: true },
  released_at: { type: String, required: true },
  requirements_en: RequirementsenSchema,
  requirements_ru: { type: Schema.Types.Mixed }
});

const GenreSchema = new Schema<Genre>({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  slug: { type: String, required: true },
  games_count: { type: Number, required: true },
  image_background: { type: String, required: true }
});

const GameSchema = new Schema<Game>({
  id: { type: Number, required: true },
  slug: { type: String, required: true },
  name: { type: String, required: true },
  released: { type: String, required: true },
  background_image: { type: String, required: true },
  rating: { type: Number, required: true },
  platforms: { type: [Platform2Schema], required: true },
  genres: { type: [GenreSchema], required: true }
});

const GameModel = mongoose.model<Game>('Game', GameSchema);

export default GameModel;
