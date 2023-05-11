import { Schema, model } from 'mongoose';

const GameSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    released: {
      type: String
    },
    rating: {
      type: Number
    }
  },
  {
    timestamps: true
  }
);

const Game = model('Game', GameSchema);

export default Game;
