import { Schema, model } from 'mongoose';
import { User } from 'src/interfaces/user.interface';

const UserSchema = new Schema<User>(
  {
    name: {
      type: String,
      trim: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      match: [/.+\@.+\..+/, 'Please fill a valid email address'],
      required: true
    },
    description: {
      type: String,
      default: 'soy la descripcion'
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const UserModel = model('users', UserSchema);
export default UserModel;
