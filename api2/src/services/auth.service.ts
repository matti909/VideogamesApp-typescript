import { Auth } from 'src/interfaces/auth.interface';
import { User } from 'src/interfaces/user.interface';
import UserModel from 'src/models/user.model';
import { encrypt, verified } from 'src/utils/bcrypt.handle';
import { generateToken } from 'src/utils/jwt.handle';

const registerNewUser = async ({ email, password, name }: User) => {
  const checkIs = await UserModel.findOne({ email });

  if (checkIs) return 'uploaded user';

  const passHash = await encrypt(password);
  const registerNewUser = await UserModel.create({
    email,
    password: passHash,
    name
  });

  return registerNewUser;
};

const loginUser = async ({ email, password }: Auth) => {
  const checkIs = await UserModel.findOne({ email });
  if (!checkIs) return 'NOT_FOUND_USER';

  const passwordHash = checkIs.password; // el encriptado que viene de la base de datos!
  const isCorrect = await verified(password, passwordHash);

  if (!isCorrect) return 'PASSWORD_INCORRECT';

  const token = generateToken(checkIs.email);
  const data = {
    token,
    user: checkIs
  };
  return data;
};

export { registerNewUser, loginUser };
